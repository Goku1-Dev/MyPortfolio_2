import { useState, useEffect } from 'react';
import PageShell from '../PageShell';
import ProjectCard from '../../components/ProjectCard';
import ProjectDetail from '../ProjectDetail';
import { projectsData } from '../../components/ProjectCard/data';
import './Projects.scss';

export default function Projects({ onNavigate, initialProject }) {
  const [search, setSearch] = useState('');
  const [selectedProject, setSelectedProject] = useState(initialProject || null);

  // Sync when App-level routing sets a project (e.g. direct URL load or back/forward)
  useEffect(() => {
    setSelectedProject(initialProject || null);
  }, [initialProject]);

  function scrollToTop() {
    const rp = document.getElementById('right-panel-scroll');
    if (rp) rp.scrollTop = 0;
  }

  function handleSelectProject(project) {
    // Let App.jsx handle state + URL via onNavigate
    onNavigate('projects', project);
    scrollToTop();
  }

  function handleBack() {
    // Navigate to projects list — clears the project in App state + URL
    onNavigate('projects', null);
    scrollToTop();
  }

  // ── Detail view ──────────────────────────────────────
  if (selectedProject) {
    return (
      <div className="page-shell">
        <div className="page-shell__body">
          <ProjectDetail project={selectedProject} onBack={handleBack} />
        </div>
      </div>
    );
  }

  // ── List view ────────────────────────────────────────
  const filtered = projectsData.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase()) ||
    p.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <PageShell
      title="Projects"
      subtitle="A collection of my recent projects and experiments."
    >
      <section className="page-section">
        <div className="projects-page__search">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"/>
            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input
            className="projects-page__search-input"
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>

        {filtered.length === 0 ? (
          <div className="projects-page__empty">No projects match your search.</div>
        ) : (
          <div className="projects-page__list">
            {filtered.map(p => (
              <ProjectCard
                key={p.id}
                project={p}
                onClick={() => handleSelectProject(p)}
              />
            ))}
          </div>
        )}
      </section>
    </PageShell>
  );
}
