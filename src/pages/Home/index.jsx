import SectionHeader from '../../components/SectionHeader';
import ProjectCard from '../../components/ProjectCard';
import DesignGrid from '../../components/DesignGrid';
import PracticeTable from '../../components/PracticeTable';
import { projectsData } from '../../components/ProjectCard/data';
import './Home.scss';

export default function Home({ onNavigate }) {
  return (
    <div className="home-page">
      <section className="home-page__section">
        <SectionHeader title="Selected Projects" onSeeAll={() => onNavigate('projects')} />
        <div className="home-page__projects-grid">
          {projectsData.map(p => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>

      <section className="home-page__section">
        <SectionHeader title="Selected Designs" onSeeAll={() => onNavigate('designs')} />
        <DesignGrid />
      </section>

      <section className="home-page__section">
        <SectionHeader title="Featured Practice" onSeeAll={() => onNavigate('practice')} />
        <PracticeTable limit={5} />
      </section>
    </div>
  );
}
