import { Bell, Search, ShieldCheck, User } from 'lucide-react';

function Header({ activeTab, onOpenProfile }) {
  const tabLabels = {
    map: 'Mapa urbano',
    report: 'Nuevo reporte',
    reports: 'Seguimiento',
    rewards: 'Rewards',
    profile: 'Perfil ciudadano',
  };

  return (
    <header className="app-header">
      <div className="app-header__brand">
        <div className="app-header__logo">
          <ShieldCheck size={18} />
        </div>
        <div>
          <div className="app-header__title-row">
            <h1>Mi Ciudad</h1>
            <span>{tabLabels[activeTab]}</span>
          </div>
          <p>Reporta y Mejora tu Ciudad</p>
        </div>
      </div>

      <div className="app-header__actions">
        <button className="icon-button" type="button" aria-label="Buscar reportes">
          <Search size={18} />
        </button>
        <button
          className="icon-button icon-button--accent"
          type="button"
          aria-label="Abrir perfil"
          onClick={onOpenProfile}
        >
          {activeTab === 'profile' ? <Bell size={18} /> : <User size={18} />}
        </button>
      </div>
    </header>
  );
}

export default Header;
