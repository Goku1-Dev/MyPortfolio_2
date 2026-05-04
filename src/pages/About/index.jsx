import PageShell from '../PageShell';
import SectionHeader from '../../components/SectionHeader';
import { aboutMe, workExperience, skills } from './data';
import './About.scss';

function WorkExperienceItem({ job }) {
  return (
    <div className="work-item">
      <div className="work-item__header">
        <div className="work-item__left">
          <div className="work-item__title-row">
            <span className="work-item__company">{job.company}</span>
            <span className="work-item__sep">·</span>
            <span className="work-item__role">{job.role}</span>
          </div>
          <div className="work-item__meta">
            <span>{job.location}</span>
          </div>
        </div>
        <span className="work-item__period">{job.period}</span>
      </div>
      <ul className="work-item__bullets">
        {job.bullets.map((b, i) => (
          <li key={i} className="work-item__bullet">{b}</li>
        ))}
      </ul>
    </div>
  );
}

function SkillsSection() {
  return (
    <div className="skills-section">
      {skills.map(s => (
        <div key={s.id} className="skill-row">
          <span className="skill-row__cat">{s.category}</span>
          <span className="skill-row__items">{s.items}</span>
        </div>
      ))}
    </div>
  );
}

export default function About() {
  return (
    <PageShell>
      {/* About Me */}
      <section className="about-page__section">
        <SectionHeader title="About Me" />
        <div className="about-bio">
          {aboutMe.bio.map((para, i) => (
            <p key={i} className="about-bio__para">{para}</p>
          ))}
        </div>
      </section>

      {/* Work Experience */}
      <section className="about-page__section">
        <SectionHeader title="Work Experience" />
        <div className="work-list">
          {workExperience.map(job => (
            <WorkExperienceItem key={job.id} job={job} />
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="about-page__section">
        <SectionHeader title="Skills" />
        <SkillsSection />
      </section>
    </PageShell>
  );
}
