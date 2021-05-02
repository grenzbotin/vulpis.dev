import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import { useRouter } from 'next/router';

interface Props {
  title: string;
  description: string;
  keywords: string;
  noRobots?: boolean;
}

const HtmlHeader: React.FC<Props> = ({ title, description, keywords, noRobots = false }) => {
  const { pathname } = useRouter();
  const { lang } = useTranslation();

  return (
    <Head>
      <title>{title}</title>
      {noRobots && <meta name="robots" content="noindex" />}
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      <meta name="twitter:card" content="summary" key="twcard" />
      <meta property="og:url" content={`https://www.vulpis.dev/${lang}${pathname}`} key="ogurl" />
      <meta
        property="og:image"
        content="https://www.vulpis.dev/images/vulpis_og.png"
        key="ogimage"
      />
      <meta property="og:title" content={title} key="ogtitle" />
      <meta property="og:description" content={description} key="ogdesc" />
      <meta property="og:site_name" content="vulpis.dev" key="ogsitename" />

      <meta httpEquiv="Content-Type" content="text/html" charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        // eslint-disable-next-line max-len
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5,shrink-to-fit=no"
      />
      <meta name="application-name" content="vulpis.dev" />
      <meta name="msapplication-tooltip" content="vulpis web development Franziska Fieke" />
      <meta name="msapplication-starturl" content="/" />
      <meta name="msapplication-tap-highlight" content="no" />

      <meta name="theme-color" content="#65a88b" />
      <meta name="mobile-web-app-capable" content="yes" />

      <meta name="apple-mobile-web-app-title" content="vulpis.dev" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />

      <meta name="msapplication-navbutton-color" content="#65a88b" />
      <meta name="msapplication-TileColor" content="#e3e3e3" />
      <meta name="msapplication-TileImage" content="/setup/144x144.png" />
      <meta name="msapplication-config" content="/setup/browserconfig.xml" />

      <link href="/setup/16x16.png" rel="icon" type="image/png" sizes="16x16" />
      <link href="/setup/32x32.png" rel="icon" type="image/png" sizes="32x32" />
      <link href="/setup/48x48.png" rel="icon" type="image/png" sizes="48x48" />

      <link href="/setup/apple-touch-icon.png" rel="apple-touch-icon" />
      <link href="/setup/76x76.png" rel="apple-touch-icon" sizes="76x76" />
      <link href="/setup/120x120.png" rel="apple-touch-icon" sizes="120x120" />
      <link href="/setup/152x152.png" rel="apple-touch-icon" sizes="152x152" />

      <link href="/setup/320x480.png" rel="apple-touch-startup-image" />

      <link href="/setup/icon.svg" rel="mask-icon" color="#65a88b" />

      <link href="/setup/192x192.png" rel="icon" sizes="192x192" />
      <link href="/setup/128x128.png" rel="icon" sizes="128x128" />

      <link rel="icon" href="/setup/favicon.ico" />

      <link href="/setup/57x57.png" rel="apple-touch-icon-precomposed" sizes="57x57" />
      <link href="/setup/72x72.png" rel="apple-touch-icon" sizes="72x72" />

      <link href="/setup/manifest.json" rel="manifest" />
    </Head>
  );
};

export default HtmlHeader;
