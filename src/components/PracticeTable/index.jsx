import './index.scss';
import { practiceData, difficultyColors } from './data';

export default function PracticeTable({ limit }) {
  const rows = limit ? practiceData.slice(0, limit) : practiceData;

  return (
    <div className="practice-table">
      {rows.map((item, idx) => {
        const colors = difficultyColors[item.difficulty];
        return (
          <div key={item.id} className="practice-table__row">
            <div className="practice-table__left">
              <span className="practice-table__num">{String(idx + 1).padStart(2, '0')}</span>
              <span className="practice-table__title">{item.title}</span>
            </div>
            <div className="practice-table__right">
              <span className="practice-table__topic">{item.topic}</span>
              <span className="practice-table__dot">•</span>
              <span
                className="practice-table__difficulty"
                style={{ color: colors.text, background: colors.bg }}
              >
                {item.difficulty}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
