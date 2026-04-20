import { LocateFixed } from 'lucide-react';
import mapSurface from '../assets/map-surface.svg';

function MapView({
  pins,
  children,
  showFocusPin = false,
  focusColor = '#179c7d',
  focusLabel = 'Nuevo reporte',
}) {
  return (
    <div className="map-view">
      <div
        className="map-view__texture"
        style={{ backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0.14), rgba(5, 28, 42, 0.18)), url(${mapSurface})` }}
        aria-hidden="true"
      />

      <div className="map-view__overlay" aria-hidden="true" />

      {pins.map((pin) => (
        <div
          key={pin.id}
          className="map-pin"
          style={{
            top: pin.top,
            left: pin.left,
            '--pin-color': pin.color,
          }}
          title={pin.category}
        >
          <span>{pin.category.charAt(0)}</span>
        </div>
      ))}

      {showFocusPin && (
        <div className="map-view__focus">
          <div className="map-pin map-pin--focus" style={{ '--pin-color': focusColor }}>
            <LocateFixed size={18} />
          </div>
          <div className="map-view__focus-label">{focusLabel}</div>
        </div>
      )}

      {children}
    </div>
  );
}

export default MapView;

