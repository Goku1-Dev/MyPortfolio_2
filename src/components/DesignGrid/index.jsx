import { useState } from 'react';
import './index.scss';
import { designFilters, designsData } from './data';

export default function DesignGrid() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? designsData
    : designsData.filter(d => d.category === activeFilter);

  return (
    <div className="design-grid">
      <div className="design-grid__filters">
        {designFilters.map(f => (
          <button
            key={f}
            className={`design-grid__filter ${activeFilter === f ? 'design-grid__filter--active' : ''}`}
            onClick={() => setActiveFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="design-grid__collage">
        {filtered.map(design => (
          <div
            key={design.id}
            className={`design-grid__item design-grid__item--${design.span}`}
            style={{ background: design.bg }}
          >
            <span className="design-grid__emoji">{design.emoji}</span>
            <div className="design-grid__overlay">
              <span className="design-grid__cat">{design.category}</span>
              <span className="design-grid__name">{design.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
