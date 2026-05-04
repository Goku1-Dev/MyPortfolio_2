import './index.scss';

export default function SectionHeader({ title, onSeeAll }) {
  return (
    <div className="section-header">
      <h2 className="section-header__title">{title}</h2>
      {onSeeAll && (
        <button className="section-header__see-all" onClick={onSeeAll}>
          See all
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"/>
            <polyline points="12 5 19 12 12 19"/>
          </svg>
        </button>
      )}
    </div>
  );
}
