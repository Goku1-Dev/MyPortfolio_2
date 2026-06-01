import ProjectDetailHeader from '../../components/ProjectDetailHeader';
import TableOfContents from '../../components/TableOfContents';
import './ProjectDetail.scss';

/**
 * ProjectDetail page
 * Shows the full write-up for a single project.
 * Two key components from the screenshot:
 *  1. ProjectDetailHeader — breadcrumb, title, action-menu, pill links
 *  2. TableOfContents    — sticky "On This Page" sidebar
 */
export default function ProjectDetail({ project, onBack }) {
  return (
    <div className="project-detail">
      {/* ① Header component */}
      <ProjectDetailHeader project={project} onBack={onBack} />

      {/* Body: content + TOC */}
      <div className="project-detail__body">
        {/* Main scrollable content */}
        <article className="project-detail__content">
          {project.sections.map(section => (
            <section key={section.id} className="project-detail__section">
              {/* Invisible anchor for scroll-spy */}
              <span
                id={`toc-anchor-${section.id}`}
                data-section-id={section.id}
                className="project-detail__anchor"
              />

              <h2 className="project-detail__heading">{section.heading}</h2>

              {section.content && (
                <p className="project-detail__para">{section.content}</p>
              )}

              {section.subsections && section.subsections.map(sub => (
                <div key={sub.id} className="project-detail__subsection">
                  <span
                    id={`toc-anchor-${sub.id}`}
                    data-section-id={sub.id}
                    className="project-detail__anchor"
                  />
                  <h3 className="project-detail__subheading">{sub.subheading}</h3>
                  <p className="project-detail__para">{sub.content}</p>
                </div>
              ))}
            </section>
          ))}

          {/* Tags footer */}
          <div className="project-detail__tags">
            {project.tags.map(tag => (
              <span key={tag} className="project-detail__tag">{tag}</span>
            ))}
          </div>
        </article>

        {/* ② Table of Contents component */}
        <TableOfContents
          sections={project.sections}
          scrollContainerId="right-panel-scroll"
        />
      </div>
    </div>
  );
}
