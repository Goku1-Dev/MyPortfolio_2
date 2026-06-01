import SectionHeader from '../../components/SectionHeader';
import ProjectCard from '../../components/ProjectCard';
import DesignGrid from '../../components/DesignGrid';
import PracticeTable from '../../components/PracticeTable';
import { projectsData } from '../../components/ProjectCard/data';
import { profileData, contactLinks } from '../../components/LeftPanel/data';
import { GitFork, Link2, Mail, X as XIcon, AtSign, Send } from 'lucide-react';
import './Home.scss';

const iconMap = { GitFork, Link2, Mail, XIcon, AtSign, Send };

export default function Home({ onNavigate }) {
  function handleProjectClick(project) {
    onNavigate('projects', project);
  }

  const { firstName, lastName, role, image } = profileData;

  return (
    <div className="home-page">
      {/* Mobile-only profile hero */}
      <div className="home-page__mobile-profile">
        <div className="home-page__mobile-avatar-wrap">
          <img
            className="home-page__mobile-avatar"
            src={image}
            alt={`${firstName} ${lastName}`}
          />
        </div>
        <div className="home-page__mobile-info">
          <h1 className="home-page__mobile-name">
            {firstName} {lastName}
          </h1>
          <p className="home-page__mobile-role">{role}</p>
        </div>
      </div>

      {/* Projects */}
      <section className="home-page__section">
        <SectionHeader title="Selected Projects" onSeeAll={() => onNavigate('projects')} />
        <div className="home-page__projects-grid">
          {projectsData.map(p => (
            <ProjectCard key={p.id} project={p} onClick={() => handleProjectClick(p)} />
          ))}
        </div>
      </section>

      {/* Designs */}
      <section className="home-page__section">
        <SectionHeader title="Selected Designs" onSeeAll={() => onNavigate('designs')} />
        <DesignGrid />
      </section>

      {/* Practice */}
      <section className="home-page__section">
        <SectionHeader title="Featured Practice" onSeeAll={() => onNavigate('practice')} />
        <PracticeTable limit={5} />
      </section>

      {/* Mobile-only contact section at the bottom */}
      <section className="home-page__mobile-contact">
        <p className="home-page__mobile-contact-label">CONNECT</p>
        <div className="home-page__mobile-contact-icons">
          {contactLinks.map((link) => {
            const Icon = iconMap[link.icon];
            return (
              <a
                key={link.id}
                href={link.href}
                className="home-page__mobile-contact-icon"
                title={link.label}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
              >
                <Icon size={18} strokeWidth={1.8} />
                <span>{link.label}</span>
              </a>
            );
          })}
        </div>
        <p className="home-page__mobile-copyright">
          © {new Date().getFullYear()} {firstName} {lastName}
        </p>
      </section>
    </div>
  );
}
