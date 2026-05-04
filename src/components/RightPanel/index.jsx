import './index.scss';
import Home     from '../../pages/Home';
import About    from '../../pages/About';
import Projects from '../../pages/Projects';
import Designs  from '../../pages/Designs';
import Practice from '../../pages/Practice';
import Resume   from '../../pages/Resume';

const PAGE_MAP = { home: Home, about: About, projects: Projects, designs: Designs, practice: Practice, resume: Resume };

export default function RightPanel({ activePage, onNavigate }) {
  const PageComponent = PAGE_MAP[activePage] || Home;

  return (
    <main className="right-panel" key={activePage}>
      <div className="right-panel__inner">
        <PageComponent onNavigate={onNavigate} />
      </div>
    </main>
  );
}
