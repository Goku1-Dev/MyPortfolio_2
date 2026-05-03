import { useState } from 'react';
import './styles/styles.scss';
import LeftPanel from './components/LeftPanel';
import RightPanel from './components/RightPanel';

export default function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => setTheme(t => t === 'light' ? 'dark' : 'light');

  return (
    <div className={`app-layout app-layout--${theme}`}>
      <LeftPanel theme={theme} onThemeToggle={toggleTheme} />
      <RightPanel />
    </div>
  );
}
