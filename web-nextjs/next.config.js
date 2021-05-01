const nextTranslate = require('next-translate');
const withReactSvg = require('next-react-svg');
const path = require('path');

const compose = (...fns) => (...args) => fns.reduceRight((y, f) => f(y), ...args);

const nextConfig = {
  include: path.resolve(__dirname, 'assets/svg'),
  images: {
    domains: ['localhost', process.env.NEXT_PUBLIC_CMS_URL],
  },
}

module.exports = compose(nextTranslate, withReactSvg)(nextConfig);
