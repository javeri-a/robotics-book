import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

function NotFound() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={`Page Not Found - ${siteConfig.title}`} description="Sorry, we couldn't find the page you were looking for.">
      <main className="container margin-vert--xl">
        <div className="row">
          <div className="col col--6 col--offset-3">
            <h1 className="hero__title">Page Not Found</h1>
            <p className="hero__subtitle">
              Sorry, we couldn't find the page you were looking for.
            </p>
            <Link className="button button--primary button--lg margin-top--sm" to="/">
              Back to Home
            </Link>
            <Link className="button button--secondary button--lg margin-left--sm margin-top--sm" to="/docs/intro">
              To Textbook
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default NotFound;