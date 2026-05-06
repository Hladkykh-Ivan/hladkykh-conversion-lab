"use client";

import { CONTACTS } from "@/app/core/config";
import { useLanguage } from "@/app/core/providers";
import "./template-1.scss";

export default function Template1() {
  const { t } = useLanguage();
  const card = t.examples.card;

  return (
    <div className="template-1 template-1--green">
      <div className="template-1__header">
        <div className="template-1__image-wrapper">
          <svg
            className="template-1__image"
            viewBox="0 0 160 160"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="currentColor">
              <rect x="10" y="20" width="20" height="120" />
              <rect x="50" y="20" width="20" height="120" />
              <rect x="10" y="70" width="60" height="20" />
            </g>
            <g fill="currentColor">
              <rect x="95" y="120" width="50" height="20" />
              <rect x="100" y="90" width="40" height="30" />
              <rect x="110" y="40" width="20" height="50" />
              <rect x="113" y="25" width="14" height="15" />
              <rect x="118" y="10" width="4" height="15" />
              <circle cx="120" cy="65" r="9" fill="var(--card-surface)" />
              <line
                x1="120"
                y1="65"
                x2="120"
                y2="59"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
              <line
                x1="120"
                y1="65"
                x2="126"
                y2="68"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </g>
          </svg>
        </div>
        <h3 className="template-1__title">Conversion Helper</h3>
      </div>

      <ul className="template-1__list">
        <li className="template-1__item">
          <span className="template-1__item-icon-wrapper">
            <svg className="template-1__item-icon" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 6v12M15 9.5c0-1.4-1.3-2.5-3-2.5s-3 1.1-3 2.5c0 3 6 1.5 6 4.5 0 1.4-1.3 2.5-3 2.5s-3-1.1-3-2.5"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <p className="template-1__item-text">{card.items[0]}</p>
        </li>
        <li className="template-1__item">
          <span className="template-1__item-icon-wrapper">
            <svg className="template-1__item-icon" viewBox="0 0 24 24" fill="none">
              <path d="M3 17l6-6 4 4 8-8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M14 7h7v7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <p className="template-1__item-text">{card.items[1]}</p>
        </li>
        <li className="template-1__item">
          <span className="template-1__item-icon-wrapper">
            <svg className="template-1__item-icon" viewBox="0 0 24 24" fill="none">
              <path
                d="M3 4h18l-7 9v7l-4-2v-5L3 4z"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <p className="template-1__item-text">{card.items[2]}</p>
        </li>
        <li className="template-1__item">
          <span className="template-1__item-icon-wrapper">
            <svg className="template-1__item-icon" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="9" strokeWidth="2" />
              <circle cx="12" cy="12" r="5" strokeWidth="2" />
              <circle cx="12" cy="12" r="1.5" />
            </svg>
          </span>
          <p className="template-1__item-text">{card.items[3]}</p>
        </li>
      </ul>

      <div className="template-1__footer">
        <a
          href={CONTACTS.telegram}
          target="_blank"
          rel="noopener noreferrer"
          className="template-1__button"
          onClick={(e) => e.stopPropagation()}
        >
          <span className="template-1__button-text">{card.cta}</span>
          <svg className="template-1__button-icon" viewBox="0 0 56 56" fill="none">
            <path
              d="M51.6735 7.33828C50.8335 6.62596 49.5141 6.52404 48.15 7.07172H48.1477C46.713 7.6474 7.5354 24.4519 5.94052 25.1384C5.65044 25.2392 3.117 26.1845 3.37796 28.2901C3.61092 30.1885 5.64708 30.9748 5.89572 31.0655L15.8559 34.4759C16.5167 36.6756 18.9527 44.7911 19.4914 46.5248C19.8274 47.6056 20.3751 49.0258 21.3349 49.3181C22.1772 49.6429 23.0149 49.3461 23.557 48.9205L29.6464 43.2724L39.4767 50.9388L39.7108 51.0788C40.3783 51.3744 41.0178 51.5223 41.6282 51.5223C42.0997 51.5223 42.5522 51.4338 42.9845 51.2568C44.4573 50.652 45.0464 49.2487 45.108 49.0896L52.4508 10.9234C52.8988 8.885 52.276 7.84788 51.6735 7.33828ZM24.64 35.84L21.28 44.8L17.92 33.6L43.68 14.56L24.64 35.84Z"
              fill="currentColor"
            />
          </svg>
        </a>
        <p className="template-1__button-description">{card.ctaHint}</p>
      </div>
    </div>
  );
}
