import './index.scss';

export default function Card({ card }) {
  const { category, categoryMeta, title, description, price, originalPrice, isFree, rating } = card;

  return (
    <article className="card">
      <div className="card__header">
        <div className="card__meta">
          <span className="card__category">{category}</span>
          {categoryMeta && (
            <>
              <span className="card__dot">·</span>
              <span className="card__meta-text">{categoryMeta}</span>
            </>
          )}
        </div>
        {rating && (
          <div className="card__rating">
            <span className="card__star">★</span>
            <span className="card__rating-num">{rating}</span>
          </div>
        )}
      </div>

      <div className="card__body">
        <h3 className="card__title">{title}</h3>
        <p className="card__desc">{description}</p>
      </div>

      <div className="card__footer">
        <div className="card__price-wrap">
          {isFree ? (
            <span className="card__price card__price--free">FREE</span>
          ) : (
            <>
              <span className="card__price">₹{price}</span>
              {originalPrice && (
                <span className="card__price-original">₹{originalPrice}</span>
              )}
            </>
          )}
        </div>
        <button className="card__cta" aria-label={`Book ${title}`}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>
      </div>
    </article>
  );
}
