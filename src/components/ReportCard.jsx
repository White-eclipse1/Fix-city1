import { useState } from 'react';
import { CalendarDays, Check, Clock3, MapPin, PackageCheck } from 'lucide-react';

const TRACKING_STEPS = [
  {
    id: 'enviado',
    label: 'Reporte enviado',
    detail: 'Tu incidencia ya esta registrada en Mi Ciudad.',
  },
  {
    id: 'aceptado',
    label: 'Reporte aceptado',
    detail: 'El reporte fue validado para seguimiento.',
  },
  {
    id: 'ejecucion',
    label: 'Reporte en ejecucion',
    detail: 'La cuadrilla o area responsable esta trabajando.',
  },
  {
    id: 'solucionado',
    label: 'Solucionado',
    detail: 'La mejora fue marcada como resuelta.',
  },
];

const STATUS_STEP_INDEX = {
  pendiente: 0,
  'en-revision': 1,
  atendido: 3,
};

function ReportCard({ report }) {
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const statusClass = report.status
    .toLowerCase()
    .replace(/\s+/g, '-')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

  const urgencyClass = report.urgency
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

  const currentStepIndex = STATUS_STEP_INDEX[statusClass] ?? 0;
  const progressPercent = (currentStepIndex / (TRACKING_STEPS.length - 1)) * 100;

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
        <button
          type="button"
          className="link-button"
          onClick={() => setIsDetailOpen((current) => !current)}
          aria-expanded={isDetailOpen}
        >
          {isDetailOpen ? 'Ocultar detalle' : 'Ver detalle'}
        </button>
      </div>

      {isDetailOpen && (
        <div className="tracking-detail">
          <div className="tracking-detail__header">
            <div>
              <span>Seguimiento del reporte</span>
              <strong>{TRACKING_STEPS[currentStepIndex].label}</strong>
            </div>
            <PackageCheck size={18} />
          </div>

          <div className="tracking-progress" aria-label={`${progressPercent}% de avance`}>
            <span style={{ width: `${progressPercent}%` }} />
          </div>

          <div className="tracking-steps">
            {TRACKING_STEPS.map((step, index) => {
              const isCompleted = index <= currentStepIndex;
              const isCurrent = index === currentStepIndex;

              return (
                <div
                  key={step.id}
                  className={`tracking-step ${isCompleted ? 'tracking-step--complete' : ''} ${
                    isCurrent ? 'tracking-step--current' : ''
                  }`}
                >
                  <span className="tracking-step__dot">
                    {isCompleted ? <Check size={13} /> : index + 1}
                  </span>
                  <span className="tracking-step__copy">
                    <strong>{step.label}</strong>
                    <small>{step.detail}</small>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </article>
  );
}

export default ReportCard;
