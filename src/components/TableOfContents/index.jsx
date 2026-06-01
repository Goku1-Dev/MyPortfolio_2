import { useState, useEffect, useRef } from 'react';
import './index.scss';

export default function TableOfContents({ sections, scrollContainerId = 'right-panel-scroll' }) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? '');
  const [hovered, setHovered] = useState(false);
  const observerRef = useRef(null);

  // Build flat list of all headings (sections + subsections)
  const flatItems = sections.flatMap(s => {
    const top = { id: s.id, label: s.heading, level: 1 };
    const subs = (s.subsections || []).map(sub => ({
      id: sub.id, label: sub.subheading, level: 2,
    }));
    return [top, ...subs];
  });

  // IntersectionObserver — updates active indicator line on scroll only
  useEffect(() => {
    const container = document.getElementById(scrollContainerId);
    if (!container) return;

    if (observerRef.current) observerRef.current.disconnect();

    const elements = flatItems
      .map(i => document.getElementById(`toc-anchor-${i.id}`))
      .filter(Boolean);

    if (!elements.length) return;

    observerRef.current = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveId(visible[0].target.dataset.sectionId);
        }
      },
      { root: container, rootMargin: '-10% 0px -60% 0px', threshold: 0 }
    );

    elements.forEach(el => observerRef.current.observe(el));
    return () => observerRef.current?.disconnect();
  }, [sections, scrollContainerId]);

  function scrollTo(id) {
    const el = document.getElementById(`toc-anchor-${id}`);
    const container = document.getElementById(scrollContainerId);
    if (el && container) {
      const containerRect = container.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      const offset = elRect.top - containerRect.top + container.scrollTop - 80;
      container.scrollTo({ top: offset, behavior: 'smooth' });
    }
    setActiveId(id);
  }

  return (
    <aside
      className={`toc${hovered ? ' toc--expanded' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Collapsed indicator: stack of horizontal lines */}
      <div className="toc__indicator" aria-hidden="true">
        {flatItems.map(item => (
          <span
            key={item.id}
            className={[
              'toc__indicator-line',
              item.level === 2 ? 'toc__indicator-line--sub' : '',
              item.id === activeId ? 'toc__indicator-line--active' : '',
            ].filter(Boolean).join(' ')}
          />
        ))}
      </div>

      {/* Expanded panel — only shown on hover */}
      <div className="toc__panel">
        <p className="toc__label">ON THIS PAGE</p>
        <nav className="toc__nav">
          {flatItems.map(item => (
            <button
              key={item.id}
              className={[
                'toc__item',
                item.level === 2 ? 'toc__item--sub' : '',
                item.id === activeId ? 'toc__item--active' : '',
              ].filter(Boolean).join(' ')}
              onClick={() => scrollTo(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
}
