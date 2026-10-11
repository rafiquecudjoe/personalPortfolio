import NextHead from 'next/head';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { site } from '@config';

const Head = ({ title, description, image }) => {
  const { pathname } = useRouter();

  const seo = {
    title: title ? `${title} | ${site.title}` : site.title,
    description: description || site.description,
    image: `${site.siteUrl}${image || site.image}`,
    url: `${site.siteUrl}${pathname}`,
  };

  return (
    <NextHead>
      <title>{seo.title}</title>

      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={site.twitterUsername} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
    </NextHead>
  );
};

export default Head;

Head.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

Head.defaultProps = {
  title: null,
  description: null,
  image: null,
};
