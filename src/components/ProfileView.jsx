import {
  Bell,
  ChevronRight,
  History,
  LogOut,
  Settings,
  User,
} from 'lucide-react';

const PROFILE_OPTIONS = [
  { label: 'Notificaciones', description: 'Alertas de avances y actualizaciones', icon: Bell },
  { label: 'Historial', description: 'Tus reportes y actividad reciente', icon: History },
  { label: 'Configuración', description: 'Preferencias de idioma y vista', icon: Settings },
  { label: 'Cerrar sesión', description: 'Solo visual para esta demo', icon: LogOut },
];

function ProfileView() {
  return (
    <div className="profile-view">
      <div className="profile-card">
        <div className="profile-card__avatar">
          <User size={34} />
        </div>
        <div>
          <span className="section-intro__eyebrow">Ciudadano activo</span>
          <h2>Estudiante Iteso</h2>
          <p>estudiante@iteso.demo</p>
        </div>
      </div>

      <div className="profile-stats">
        <div>
          <strong>12</strong>
          <span>Reportes</span>
        </div>
        <div>
          <strong>7</strong>
          <span>Atendidos</span>
        </div>
        <div>
          <strong>3</strong>
          <span>En revisión</span>
        </div>
      </div>

      <div className="profile-options">
        {PROFILE_OPTIONS.map((option) => {
          const Icon = option.icon;

          return (
            <button key={option.label} type="button" className="profile-option">
              <span className="profile-option__icon">
                <Icon size={18} />
              </span>
              <span className="profile-option__copy">
                <strong>{option.label}</strong>
                <small>{option.description}</small>
              </span>
              <ChevronRight size={16} />
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default ProfileView;
