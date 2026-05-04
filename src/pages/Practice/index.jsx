import { useState } from 'react';
import PageShell from '../PageShell';
import SectionHeader from '../../components/SectionHeader';
import { practiceByTopic, difficultyColors } from './data';
import './Practice.scss';

export default function Practice() {
  const [search, setSearch] = useState('');

  const filtered = practiceByTopic
    .map(group => ({
      ...group,
      problems: group.problems.filter(p =>
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        group.topic.toLowerCase().includes(search.toLowerCase())
      ),
    }))
    .filter(g => g.problems.length > 0);

  return (
    <PageShell
      title="Practice"
      subtitle="Collection of coding problems and solutions."
    >
      {/* Search */}
      <section className="page-section">
        <div className="practice-page__search">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"/>
            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input
            className="practice-page__search-input"
            type="text"
            placeholder="Search problems..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
      </section>

      {/* One section per topic */}
      {filtered.map(group => (
        <section key={group.topic} className="page-section">
          <SectionHeader title={group.topic} />
          <div className="practice-page__table">
            {group.problems.map(p => {
              const colors = difficultyColors[p.difficulty];
              return (
                <div key={p.id} className="practice-row">
                  <span className="practice-row__title">{p.title}</span>
                  <span
                    className="practice-row__diff"
                    style={{ color: colors.text }}
                  >
                    {p.difficulty}
                  </span>
                </div>
              );
            })}
          </div>
        </section>
      ))}
    </PageShell>
  );
}
