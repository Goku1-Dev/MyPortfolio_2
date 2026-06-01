import { useState, useEffect } from 'react';
import './styles/styles.scss';
import LeftPanel  from './components/LeftPanel';
import RightPanel from './components/RightPanel';
import { projectsData } from './components/ProjectCard/data';

const VALID_PAGES = ['about', 'projects', 'designs', 'practice', 'resume'];

function toSlug(title) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function projectFromSlug(slug) {
  return projectsData.find(p => toSlug(p.title) === slug) ?? null;
}

function parsePath() {
  const parts = window.location.pathname.replace(/^\//, '').split('/').filter(Boolean);
  if (parts.length === 0) return { page: 'home', project: null };
  const [page, projectSlug] = parts;
  if (!VALID_PAGES.includes(page)) return { page: 'home', project: null };
  const project = (page === 'projects' && projectSlug) ? projectFromSlug(projectSlug) : null;
  return { page, project };
}

function toPath(page, project = null) {
  if (page === 'home') return '/';
  if (project) return `/${page}/${toSlug(project.title)}`;
  return `/${page}`;
}

export default function App() {
  const initial = parsePath();
  const [activePage,    setActivePage]    = useState(initial.page);
  const [activeProject, setActiveProject] = useState(initial.project);
  const [theme,         setTheme]         = useState('light');
  const [sidebarOpen,   setSidebarOpen]   = useState(false);

  const handleNavigate = (page, project = null) => {
    setActivePage(page);
    setActiveProject(project);
    setSidebarOpen(false); // close sidebar on navigate (mobile)
    const rp = document.getElementById('right-panel-scroll');
    if (rp) rp.scrollTop = 0;
    window.history.pushState(
      { page, projectSlug: project ? toSlug(project.title) : null },
      '',
      toPath(page, project)
    );
  };

  useEffect(() => {
    const onPop = () => {
      const { page, project } = parsePath();
      setActivePage(page);
      setActiveProject(project);
      const rp = document.getElementById('right-panel-scroll');
      if (rp) rp.scrollTop = 0;
    };
    window.addEventListener('popstate', onPop);
    const { page, project } = parsePath();
    window.history.replaceState(
      { page, projectSlug: project ? toSlug(project.title) : null },
      '',
      toPath(page, project)
    );
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  // Prevent body scroll when sidebar open
  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [sidebarOpen]);

  return (
    <div className={`app-layout app-layout--${theme}`}>
      <LeftPanel
        activePage={activePage}
        onNavigate={handleNavigate}
        theme={theme}
        onThemeToggle={() => setTheme(t => t === 'light' ? 'dark' : 'light')}
        sidebarOpen={sidebarOpen}
        onSidebarClose={() => setSidebarOpen(false)}
      />
      <RightPanel
        activePage={activePage}
        activeProject={activeProject}
        onNavigate={handleNavigate}
        onSidebarOpen={() => setSidebarOpen(true)}
        theme={theme}
        onThemeToggle={() => setTheme(t => t === 'light' ? 'dark' : 'light')}
      />
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)} />
      )}
    </div>
  );
}
