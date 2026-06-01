import './index.scss';

export default function ProjectCard({ project, onClick }) {
  const { title, description, tags, github, live, accent } = project;

  return (
    <article
      className={`project-card${onClick ? ' project-card--clickable' : ''}`}
      style={{ '--accent': accent }}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => { if (e.key === 'Enter' || e.key === ' ') onClick(); } : undefined}
    >
      <div className="project-card__accent-bar" />

      <div className="project-card__body">
        <div className="project-card__top">
          <h3 className="project-card__title">{title}</h3>
          <div className="project-card__links">
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer"
                className="project-card__link" title="GitHub"
                onClick={e => e.stopPropagation()}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="18" r="3"/>
                  <circle cx="6" cy="6" r="3"/>
                  <circle cx="18" cy="6" r="3"/>
                  <path d="M18 9v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9"/>
                  <line x1="12" y1="12" x2="12" y2="15"/>
                </svg>
                <span>GitHub</span>
              </a>
            )}
            {live && (
              <a href={live} target="_blank" rel="noopener noreferrer"
                className="project-card__link project-card__link--live" title="Live"
                onClick={e => e.stopPropagation()}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
                <span>Live</span>
              </a>
            )}
          </div>
        </div>

        <p className="project-card__desc">{description}</p>

        <div className="project-card__tags">
          {tags.map(tag => (
            <span key={tag} className="project-card__tag">{tag}</span>
          ))}
        </div>
      </div>
    </article>
  );
}
