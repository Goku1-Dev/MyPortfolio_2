import './index.scss';
import { testimonials, aiSummary } from './data';

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials__grid">
        {testimonials.map((t) => (
          <div key={t.id} className="testimonials__card">
            <span className="testimonials__quote-mark">"</span>
            <p className="testimonials__text">{t.text}</p>
            <div className="testimonials__author">
              <div
                className="testimonials__avatar"
                style={{ background: t.avatarColor }}
              >
                {t.avatar}
              </div>
              <span className="testimonials__author-name">{t.author}</span>
            </div>
          </div>
        ))}

        <div className="testimonials__ai-card">
          <p className="testimonials__ai-text">{aiSummary.highlight}</p>
          <div className="testimonials__ai-label">
            <span className="testimonials__ai-icon">✨</span>
            <span>{aiSummary.label}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
