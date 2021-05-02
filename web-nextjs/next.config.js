const nextTranslate = require('next-translate');
const withReactSvg = require('next-react-svg');
const path = require('path');

const compose = (...fns) => (...args) => fns.reduceRight((y, f) => f(y), ...args);

const nextConfig = {
  include: path.resolve(__dirname, 'assets/svg'),
  images: {
    domains: ['localhost', 'cms.vulpis.dev'],
  },
}

module.exports = compose(nextTranslate, withReactSvg)(nextConfig);
