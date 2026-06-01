import { useState, useRef, useEffect } from 'react';
import { ExternalLink, GitFork, MoreHorizontal, Link, FileText, ChevronRight } from 'lucide-react';
import './index.scss';

export default function ProjectDetailHeader({ project, onBack }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const menuRef = useRef(null);

  // Close menu on outside click
  useEffect(() => {
    function handleClick(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  function handleCopyLink() {
    navigator.clipboard.writeText(window.location.href).catch(() => {});
    setCopied(true);
    setTimeout(() => { setCopied(false); setMenuOpen(false); }, 1500);
  }

  function handleCopyPage() {
    const text = project.sections
      .map(s => {
        let out = `## ${s.heading}\n${s.content || ''}`;
        if (s.subsections) {
          out += '\n' + s.subsections.map(sub => `### ${sub.subheading}\n${sub.content}`).join('\n');
        }
        return out;
      })
      .join('\n\n');
    navigator.clipboard.writeText(text).catch(() => {});
    setMenuOpen(false);
  }

  return (
    <header className="pdh">
      {/* Breadcrumb */}
      <nav className="pdh__breadcrumb" aria-label="Breadcrumb">
          <button className="pdh__breadcrumb-link" onClick={onBack}>
            Projects
          </button>
          <ChevronRight size={13} className="pdh__breadcrumb-sep" />
          <span className="pdh__breadcrumb-current">{project.title}</span>
        </nav>

      {/* Title row */}
      <div className="pdh__title-row">
        <h1 className="pdh__title" style={{ '--project-accent': project.accent }}>
          {project.title}
        </h1>

        {/* Action menu */}
        <div className="pdh__menu-wrap" ref={menuRef}>
          <button
            className="pdh__menu-trigger"
            onClick={() => setMenuOpen(v => !v)}
            aria-label="More options"
            aria-expanded={menuOpen}
          >
            <MoreHorizontal size={18} strokeWidth={1.8} />
          </button>

          {menuOpen && (
            <div className="pdh__menu">
              <button className="pdh__menu-item" onClick={handleCopyLink}>
                <Link size={14} strokeWidth={1.8} />
                <span className="pdh__menu-item-label">Copy Link</span>
                <span className="pdh__menu-item-sub">
                  {copied ? 'Copied!' : 'Copy URL to clipboard'}
                </span>
              </button>
              <div className="pdh__menu-divider" />
              <button className="pdh__menu-item" onClick={handleCopyPage}>
                <FileText size={14} strokeWidth={1.8} />
                <span className="pdh__menu-item-label">Copy Page</span>
                <span className="pdh__menu-item-sub">Copy page as Markdown for LLMs</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Pill links */}
      <div className="pdh__links">
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="pdh__link">
            <GitFork size={13} strokeWidth={1.8} />
            <span>GitHub</span>
            <ExternalLink size={11} strokeWidth={1.8} className="pdh__link-ext" />
          </a>
        )}
        {project.live && (
          <a href={project.live} target="_blank" rel="noopener noreferrer" className="pdh__link pdh__link--live">
            <span>Live</span>
            <ExternalLink size={11} strokeWidth={1.8} className="pdh__link-ext" />
          </a>
        )}
      </div>
    </header>
  );
}
