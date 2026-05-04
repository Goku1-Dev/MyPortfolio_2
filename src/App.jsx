import { useState } from 'react';
import './styles/styles.scss';
import LeftPanel  from './components/LeftPanel';
import RightPanel from './components/RightPanel';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [theme, setTheme]           = useState('light');

  const handleNavigate = (page) => {
    setActivePage(page);
    // scroll right panel to top on page change
    const rp = document.getElementById('right-panel-scroll');
    if (rp) rp.scrollTop = 0;
  };

  return (
    <div className={`app-layout app-layout--${theme}`}>
      <LeftPanel
        activePage={activePage}
        onNavigate={handleNavigate}
        theme={theme}
        onThemeToggle={() => setTheme(t => t === 'light' ? 'dark' : 'light')}
      />
      <RightPanel activePage={activePage} onNavigate={handleNavigate} />
    </div>
  );
}
