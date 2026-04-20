import {
  Camera,
  Droplets,
  Lightbulb,
  MapPin,
  Signal,
  Trash2,
  TriangleAlert,
} from 'lucide-react';

const ICONS = {
  bache: TriangleAlert,
  luminaria: Lightbulb,
  agua: Droplets,
  semaforo: Signal,
  basura: Trash2,
};

const URGENCY_LEVELS = ['baja', 'media', 'alta'];

function ReportSheet({
  reportTypes,
  selectedCategory,
  onSelectCategory,
  location,
  description,
  onDescriptionChange,
  urgency,
  onUrgencyChange,
  onSubmit,
}) {
  return (
    <div className="report-sheet">
      <div className="report-sheet__handle" />

      <div className="report-sheet__header">
        <div>
          <span className="section-intro__eyebrow">Panel de reporte</span>
          <h2>Nuevo reporte ciudadano</h2>
        </div>
        <span className="report-sheet__badge">Demo</span>
      </div>

      <div className="report-sheet__group">
        <label className="field-label">Categoría</label>
        <div className="category-grid">
          {reportTypes.map((type) => {
            const Icon = ICONS[type.id];
            const isActive = type.id === selectedCategory;

            return (
              <button
                key={type.id}
                type="button"
                className={`category-card ${isActive ? 'category-card--active' : ''}`}
                onClick={() => onSelectCategory(type.id)}
                style={{
                  '--category-accent': type.accent,
                }}
              >
                <span className="category-card__icon">
                  <Icon size={18} />
                </span>
                <span>{type.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="report-sheet__group">
        <label className="field-label">Ubicación actual</label>
        <div className="field-card">
          <MapPin size={16} />
          <span>{location}</span>
        </div>
      </div>

      <div className="report-sheet__group">
        <label className="field-label" htmlFor="report-description">
          Describe el problema
        </label>
        <textarea
          id="report-description"
          className="report-textarea"
          placeholder="Ej. El semáforo no cambia a verde desde hace varios minutos."
          value={description}
          onChange={(event) => onDescriptionChange(event.target.value)}
          rows={4}
        />
      </div>

      <div className="report-sheet__group">
        <label className="field-label">Evidencia visual</label>
        <button className="upload-card" type="button">
          <span className="upload-card__icon">
            <Camera size={18} />
          </span>
          <span>Añadir Foto/Video</span>
          <small>Solo visual, sin carga real</small>
        </button>
      </div>

      <div className="report-sheet__group">
        <label className="field-label">Nivel de urgencia</label>
        <div className="urgency-toggle">
          {URGENCY_LEVELS.map((level) => (
            <button
              key={level}
              type="button"
              className={`urgency-pill ${urgency === level ? 'urgency-pill--active' : ''}`}
              onClick={() => onUrgencyChange(level)}
            >
              {level.charAt(0).toUpperCase() + level.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <button className="primary-button" type="button" onClick={onSubmit}>
        ENVIAR REPORTE
      </button>
    </div>
  );
}

export default ReportSheet;

