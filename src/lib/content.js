import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeExternalLinks from 'rehype-external-links';
import rehypePrism from 'rehype-prism-plus';
import rehypeStringify from 'rehype-stringify';

const CONTENT_DIR = path.join(process.cwd(), 'content');

// gray-matter (via js-yaml) auto-parses unquoted YAML dates into Date objects,
// which getStaticProps can't serialize. Normalize back to ISO strings.
function normalizeFrontmatter(data) {
  if (data.date instanceof Date) {
    return { ...data, date: data.date.toISOString() };
  }
  return data;
}

export function markdownToHtml(markdown) {
  const file = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeExternalLinks, { target: '_blank', rel: ['nofollow', 'noopener', 'noreferrer'] })
    .use(rehypePrism, { ignoreMissing: true })
    .use(rehypeStringify)
    .processSync(markdown || '');

  return String(file);
}

// Reads every `index.md` inside immediate subdirectories of `dir`, e.g. content/jobs/*/index.md
function readIndexEntries(dirName) {
  const dir = path.join(CONTENT_DIR, dirName);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter(entry => entry.isDirectory())
    .map(entry => {
      const filePath = path.join(dir, entry.name, 'index.md');
      if (!fs.existsSync(filePath)) return null;
      const raw = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(raw);
      return { frontmatter: normalizeFrontmatter(data), html: markdownToHtml(content), slug: entry.name };
    })
    .filter(Boolean);
}

// Reads every top-level `*.md` file in `dir`, e.g. content/projects/*.md
function readFlatEntries(dirName) {
  const dir = path.join(CONTENT_DIR, dirName);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter(entry => entry.isFile() && entry.name.endsWith('.md'))
    .map(entry => {
      const filePath = path.join(dir, entry.name);
      const raw = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(raw);
      return {
        frontmatter: normalizeFrontmatter(data),
        html: markdownToHtml(content),
        slug: entry.name.replace(/\.md$/, ''),
      };
    });
}

export function getJobs() {
  return readIndexEntries('jobs').sort(
    (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date),
  );
}

export function getFeatured() {
  return readIndexEntries('featured').sort(
    (a, b) => Number(a.frontmatter.date) - Number(b.frontmatter.date),
  );
}

export function getProjects() {
  return readFlatEntries('projects')
    .filter(({ frontmatter }) => frontmatter.showInProjects !== false)
    .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));
}

export function getArchiveProjects() {
  return readFlatEntries('projects').sort(
    (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date),
  );
}

export function getAllPosts({ includeDrafts = false } = {}) {
  return readIndexEntries('posts')
    .filter(({ frontmatter }) => includeDrafts || !frontmatter.draft)
    .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));
}

export function getPostBySlug(slug) {
  const targetSlug = `/pensieve/${slug}`;
  return getAllPosts({ includeDrafts: true }).find(post => post.frontmatter.slug === targetSlug);
}

export function getAllPostSlugs() {
  return getAllPosts().map(post => post.frontmatter.slug.replace(/^\/pensieve\//, ''));
}

export function getAllTags() {
  const posts = getAllPosts();
  const counts = new Map();

  posts.forEach(({ frontmatter }) => {
    (frontmatter.tags || []).forEach(tag => {
      counts.set(tag, (counts.get(tag) || 0) + 1);
    });
  });

  return Array.from(counts.entries()).map(([fieldValue, totalCount]) => ({
    fieldValue,
    totalCount,
  }));
}

export function getPostsByTag(tag) {
  return getAllPosts().filter(({ frontmatter }) => (frontmatter.tags || []).includes(tag));
}
