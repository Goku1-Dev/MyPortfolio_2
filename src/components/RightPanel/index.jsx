import { useState } from 'react';
import './index.scss';
import Testimonials from '../Testimonials';
import Tabs from '../Tabs';
import Card from '../Card';
import { cardsData } from '../Card/data';

export default function RightPanel() {
  const [activeTab, setActiveTab] = useState('all');

  const filtered = activeTab === 'all'
    ? cardsData
    : cardsData.filter(c => c.type === activeTab);

  return (
    <main className="right-panel">
      <div className="right-panel__inner">
        <Testimonials />
        <Tabs activeTab={activeTab} onTabChange={setActiveTab} />

        <div className="right-panel__cards-label">
          <span className="right-panel__count">{filtered.length} services</span>
        </div>

        <div className="right-panel__grid">
          {filtered.map(card => (
            <Card key={card.id} card={card} />
          ))}
        </div>
      </div>
    </main>
  );
}
