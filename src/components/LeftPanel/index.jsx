import {
  User, Folders, Palette, Code2, FileText,
  GitFork, Link2, Mail, X as XIcon, AtSign, Send,
  Sun, Moon, Home, X as CloseIcon,
} from 'lucide-react';
import './index.scss';
import { profileData, navItems, contactLinks, copyrightYear } from './data';

const iconMap = {
  Home, User, Folders, Palette, Code2, FileText,
  GitFork, Link2, Mail, XIcon, AtSign, Send,
};

export default function LeftPanel({
  activePage, onNavigate, theme, onThemeToggle,
  sidebarOpen, onSidebarClose,
}) {
  const { firstName, lastName, role, image } = profileData;
  const fullName = `${firstName} ${lastName}`;

  return (
    <aside className={`left-panel${sidebarOpen ? ' left-panel--open' : ''}`}>
      {/* Mobile close button */}
      <button
        className="left-panel__close-btn"
        onClick={onSidebarClose}
        aria-label="Close menu"
      >
        <CloseIcon size={20} strokeWidth={2} />
      </button>

      <div className="left-panel__content">
        {/* Profile */}
        <div
          className="left-panel__profile"
          onClick={() => onNavigate('about')}
          role="button"
          tabIndex={0}
          onKeyDown={e => { if (e.key === 'Enter') onNavigate('about'); }}
        >
          <div className="left-panel__avatar-wrap">
            <img className="left-panel__avatar" src={image} alt={fullName} />
          </div>
          <h1 className="left-panel__name">
            <span className="left-panel__name-first">{firstName}</span>
            <span className="left-panel__name-last">{lastName}</span>
          </h1>
          <p className="left-panel__role">{role}</p>
        </div>

        {/* Nav */}
        <nav className="left-panel__nav">
          <button
            className={`left-panel__nav-item${activePage === 'home' ? ' left-panel__nav-item--active' : ''}`}
            onClick={() => onNavigate('home')}
          >
            <span className="left-panel__nav-icon">
              <Home size={17} strokeWidth={activePage === 'home' ? 2.2 : 1.8} />
            </span>
            <span className="left-panel__nav-label">Home</span>
            {activePage === 'home' && <span className="left-panel__nav-pip" />}
          </button>

          {navItems.map((item) => {
            const Icon = iconMap[item.icon];
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                className={`left-panel__nav-item${isActive ? ' left-panel__nav-item--active' : ''}`}
                onClick={() => onNavigate(item.id)}
              >
                <span className="left-panel__nav-icon">
                  <Icon size={17} strokeWidth={isActive ? 2.2 : 1.8} />
                </span>
                <span className="left-panel__nav-label">{item.label}</span>
                {isActive && <span className="left-panel__nav-pip" />}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Footer / Contact */}
      <div className="left-panel__footer">
        <div className="left-panel__connect-row">
          <p className="left-panel__connect-label">CONNECT</p>
          <button
            className="left-panel__theme-toggle"
            onClick={onThemeToggle}
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            aria-label="Toggle theme"
          >
            {theme === 'dark'
              ? <Sun size={15} strokeWidth={1.8} />
              : <Moon size={15} strokeWidth={1.8} />
            }
          </button>
        </div>

        <div className="left-panel__contact-icons">
          {contactLinks.map((link) => {
            const Icon = iconMap[link.icon];
            return (
              <a key={link.id} href={link.href} className="left-panel__contact-icon"
                title={link.label} target="_blank" rel="noopener noreferrer"
                aria-label={link.label}>
                <Icon size={16} strokeWidth={1.8} />
              </a>
            );
          })}
        </div>

        <p className="left-panel__copyright">© {copyrightYear} {fullName}</p>
      </div>
    </aside>
  );
}
