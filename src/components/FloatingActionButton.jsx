import { Plus } from 'lucide-react';

function FloatingActionButton({ visible, onClick }) {
  return (
    <button
      type="button"
      className={`fab ${visible ? 'fab--visible' : ''}`}
      onClick={onClick}
      aria-hidden={visible ? 'false' : 'true'}
      tabIndex={visible ? 0 : -1}
    >
      <Plus size={20} />
      <span>NUEVO REPORTE</span>
    </button>
  );
}

export default FloatingActionButton;

