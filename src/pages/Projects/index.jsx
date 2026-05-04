import { useState } from 'react';
import PageShell from '../PageShell';
import SectionHeader from '../../components/SectionHeader';
import ProjectCard from '../../components/ProjectCard';
import { projectsData } from '../../components/ProjectCard/data';
import './Projects.scss';

export default function Projects() {
  const [search, setSearch] = useState('');

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
        <SectionHeader title="All Projects" />

        {/* Search toolbar */}
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
            {filtered.map(p => <ProjectCard key={p.id} project={p} />)}
          </div>
        )}
      </section>
    </PageShell>
  );
}
