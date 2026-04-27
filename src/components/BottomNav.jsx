import { ClipboardList, FilePlus, Gift, Map, User } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'map', label: 'Mapa', icon: Map },
  { id: 'report', label: 'Reportar', icon: FilePlus },
  { id: 'reports', label: 'Mis Reportes', icon: ClipboardList },
  { id: 'rewards', label: 'Rewards', icon: Gift },
  { id: 'profile', label: 'Perfil', icon: User },
];

function BottomNav({ activeTab, onChange }) {
  return (
    <nav className="bottom-nav" aria-label="Navegación principal">
      {NAV_ITEMS.map((item) => {
        const Icon = item.icon;
        const isActive = activeTab === item.id;

        return (
          <button
            key={item.id}
            type="button"
            className={`bottom-nav__item ${isActive ? 'bottom-nav__item--active' : ''}`}
            onClick={() => onChange(item.id)}
            aria-current={isActive ? 'page' : undefined}
          >
            <Icon size={18} />
            <span>{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}

export default BottomNav;
