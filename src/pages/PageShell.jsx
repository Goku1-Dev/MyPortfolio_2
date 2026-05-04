import './PageShell.scss';

export default function PageShell({ title, subtitle, children }) {
  return (
    <div className="page-shell">
      {(title || subtitle) && (
        <div className="page-shell__header">
          {title    && <h1 className="page-shell__title">{title}</h1>}
          {subtitle && <p  className="page-shell__subtitle">{subtitle}</p>}
        </div>
      )}
      <div className="page-shell__body">{children}</div>
    </div>
  );
}
