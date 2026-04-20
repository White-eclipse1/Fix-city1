import { CalendarDays, Clock3, MapPin } from 'lucide-react';

function ReportCard({ report }) {
  const statusClass = report.status
    .toLowerCase()
    .replace(/\s+/g, '-')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

  const urgencyClass = report.urgency
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

  return (
    <article className="report-card">
      <div className="report-card__top">
        <div>
          <span className="report-card__eyebrow">#{report.id}</span>
          <h3>{report.category}</h3>
        </div>
        <div className={`status-pill status-pill--${statusClass}`}>{report.status}</div>
      </div>

      <p className="report-card__description">{report.description}</p>

      <div className="report-card__meta">
        <span>
          <MapPin size={14} />
          {report.location}
        </span>
        <span>
          <CalendarDays size={14} />
          {report.date}
        </span>
      </div>

      <div className="report-card__footer">
        <div className={`urgency-tag urgency-tag--${urgencyClass}`}>
          <Clock3 size={14} />
          Urgencia {report.urgency}
        </div>
        <button type="button" className="link-button">
          Ver detalle
        </button>
      </div>
    </article>
  );
}

export default ReportCard;

