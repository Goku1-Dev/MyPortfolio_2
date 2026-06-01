import PageShell from '../PageShell';
import SectionHeader from '../../components/SectionHeader';
import DesignGrid from '../../components/DesignGrid';

export default function Designs() {
  return (
    <PageShell
      title="Designs"
      subtitle="A curated collection of UI/UX work across web, mobile, and brand."
    >
      <section className="page-section">
        {/* <SectionHeader /> */}
        <DesignGrid showAll />
      </section>
    </PageShell>
  );
}
