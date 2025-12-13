import React from 'react';
import clsx from 'clsx';
import styles from './Citation.module.css';

/**
 * Component for displaying APA-style citations
 */
export default function Citation({ authors, year, title, source, url }) {
  return (
    <div className={clsx('row', styles.citationBlock)}>
      <div className="col">
        <p className={styles.citation}>
          {authors} ({year}). <em>{title}</em>. {source}. {url && <a href={url}>Link</a>}
        </p>
      </div>
    </div>
  );
}