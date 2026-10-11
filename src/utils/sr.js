const isSSR = typeof window === 'undefined';
// Deferred require: scrollreveal touches `document` at module load time, so it
// must never be evaluated during server-side rendering.
// eslint-disable-next-line global-require
const ScrollReveal = isSSR ? null : require('scrollreveal');
const sr = isSSR
  ? null
  : (typeof ScrollReveal === 'function'
      ? ScrollReveal()
      : typeof ScrollReveal?.default === 'function'
      ? ScrollReveal.default()
      : ScrollReveal);

export default sr;

