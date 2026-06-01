import { Menu, Sun, Moon } from 'lucide-react';
import './index.scss';
import Home     from '../../pages/Home';
import About    from '../../pages/About';
import Projects from '../../pages/Projects';
import Designs  from '../../pages/Designs';
import Practice from '../../pages/Practice';
import Resume   from '../../pages/Resume';

export default function RightPanel({
  activePage, activeProject, onNavigate,
  onSidebarOpen, theme, onThemeToggle,
}) {
  const renderPage = () => {
    switch (activePage) {
      case 'home':     return <Home onNavigate={onNavigate} />;
      case 'about':    return <About onNavigate={onNavigate} />;
      case 'projects': return <Projects onNavigate={onNavigate} initialProject={activeProject} />;
      case 'designs':  return <Designs onNavigate={onNavigate} />;
      case 'practice': return <Practice onNavigate={onNavigate} />;
      case 'resume':   return <Resume onNavigate={onNavigate} />;
      default:         return <Home onNavigate={onNavigate} />;
    }
  };

  const panelKey = activeProject ? `${activePage}-${activeProject.id}` : activePage;

  return (
    <main className="right-panel" id="right-panel-scroll" key={panelKey}>
      {/* Mobile top bar */}
      <header className="mobile-topbar">
        <button
          className="mobile-topbar__menu-btn"
          onClick={onSidebarOpen}
          aria-label="Open menu"
        >
          <Menu size={22} strokeWidth={1.8} />
        </button>

        <span className="mobile-topbar__page-title">
          {activePage.charAt(0).toUpperCase() + activePage.slice(1)}
        </span>

        <button
          className="mobile-topbar__theme-btn"
          onClick={onThemeToggle}
          aria-label="Toggle theme"
        >
          {theme === 'dark'
            ? <Sun size={18} strokeWidth={1.8} />
            : <Moon size={18} strokeWidth={1.8} />
          }
        </button>
      </header>

      <div className="right-panel__inner">
        {renderPage()}
      </div>
    </main>
  );
}
