import './index.scss';
import { tabsData } from './data';

export default function Tabs({ activeTab, onTabChange }) {
  return (
    <nav className="tabs">
      <div className="tabs__list">
        {tabsData.map((tab) => (
          <button
            key={tab.id}
            className={`tabs__btn ${activeTab === tab.id ? 'tabs__btn--active' : ''}`}
            onClick={() => onTabChange(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
