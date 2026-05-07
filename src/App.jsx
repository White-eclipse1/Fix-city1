import { useEffect, useState, startTransition } from 'react';
import { CheckCircle2, MapPin } from 'lucide-react';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import MapView from './components/MapView';
import ReportSheet from './components/ReportSheet';
import ReportCard from './components/ReportCard';
import ProfileView from './components/ProfileView';
import RewardsView from './components/RewardsView';
import FloatingActionButton from './components/FloatingActionButton';
import { initialPins, initialReports, pinDropSlots } from './data/mockReports';
import { reportTypes } from './data/reportTypes';

const TABS = {
  MAP: 'map',
  REPORT: 'report',
  REPORTS: 'reports',
  REWARDS: 'rewards',
  PROFILE: 'profile',
};

const CURRENT_LOCATION = 'Av. Chapultepec 52';

function App() {
  const [activeTab, setActiveTab] = useState(TABS.MAP);
  const [selectedCategory, setSelectedCategory] = useState(reportTypes[0].id);
  const [customCategory, setCustomCategory] = useState('');
  const [urgency, setUrgency] = useState('media');
  const [description, setDescription] = useState(
    'Luminaria intermitente y poca visibilidad por las noches.',
  );
  const [reports, setReports] = useState(initialReports);
  const [pins, setPins] = useState(initialPins);
  const [toast, setToast] = useState('');

  const activeCategory =
    reportTypes.find((item) => item.id === selectedCategory) ?? reportTypes[0];
  const focusCategoryLabel =
    activeCategory.id === 'otros'
      ? customCategory.trim() || activeCategory.label
      : activeCategory.label;

  useEffect(() => {
    if (!toast) {
      return undefined;
    }

    const timerId = window.setTimeout(() => setToast(''), 2600);
    return () => window.clearTimeout(timerId);
  }, [toast]);

  const handleTabChange = (tab) => {
    startTransition(() => setActiveTab(tab));
  };

  const handleSubmitReport = () => {
    const customCategoryName = customCategory.trim();
    const isCustomCategory = activeCategory.id === 'otros';

    if (isCustomCategory && !customCategoryName) {
      setToast('Escribe el tipo de reporte personalizado.');
      return;
    }

    const slot = pinDropSlots[pins.length % pinDropSlots.length];
    const reportCategory = isCustomCategory ? customCategoryName : activeCategory.label;
    const today = new Intl.DateTimeFormat('es-MX', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    }).format(new Date());

    // Todo es mock: simulamos crear el reporte localmente para una demo más realista.
    const newReport = {
      id: `RPT-${100 + reports.length + 1}`,
      category: reportCategory,
      location: CURRENT_LOCATION,
      date: today,
      status: 'Pendiente',
      urgency: urgency.charAt(0).toUpperCase() + urgency.slice(1),
      description: description.trim() || 'Reporte enviado desde la demo.',
    };

    setReports((current) => [newReport, ...current]);
    setPins((current) => [
      {
        id: `pin-${Date.now()}`,
        category: reportCategory,
        color: activeCategory.accent,
        ...slot,
      },
      ...current,
    ]);
    setDescription('');
    setCustomCategory('');
    setUrgency('media');
    setToast('Reporte enviado con éxito. Se agregó a Mis Reportes.');
    startTransition(() => setActiveTab(TABS.REPORTS));
  };

  return (
    <div className="page-shell">
      <div className="page-shell__glow page-shell__glow--left" />
      <div className="page-shell__glow page-shell__glow--right" />

      <div className="mobile-app">
        <Header
          activeTab={activeTab}
          onOpenProfile={() => handleTabChange(TABS.PROFILE)}
        />

        <main className="app-content">
          {activeTab === TABS.MAP && (
            <section className="screen screen--map" key="map">
              <MapView pins={pins}>
                <div className="map-summary">
                  <div>
                    <span className="map-summary__eyebrow">Ciudad activa</span>
                    <h2>Mapa ciudadano en tiempo real</h2>
                  </div>
                  <p>24 reportes abiertos y 8 incidencias con prioridad alta.</p>
                  <div className="map-summary__legend">
                    <span>Baches</span>
                    <span>Luminaria</span>
                    <span>Servicios</span>
                  </div>
                </div>
              </MapView>
            </section>
          )}

          {activeTab === TABS.REPORT && (
            <section className="screen screen--report" key="report">
              <MapView
                pins={pins}
                showFocusPin
                focusColor={activeCategory.accent}
                focusLabel={focusCategoryLabel}
              />
              <ReportSheet
                reportTypes={reportTypes}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
                location={CURRENT_LOCATION}
                description={description}
                onDescriptionChange={setDescription}
                customCategory={customCategory}
                onCustomCategoryChange={setCustomCategory}
                urgency={urgency}
                onUrgencyChange={setUrgency}
                onSubmit={handleSubmitReport}
              />
            </section>
          )}

          {activeTab === TABS.REPORTS && (
            <section className="screen screen--scroll" key="reports">
              <div className="section-intro">
                <div>
                  <span className="section-intro__eyebrow">Seguimiento</span>
                  <h2>Mis Reportes</h2>
                </div>
                <div className="section-intro__badge">
                  <MapPin size={16} />
                  <span>{reports.length} activos</span>
                </div>
              </div>

              <div className="reports-list">
                {reports.map((report) => (
                  <ReportCard key={report.id} report={report} />
                ))}
              </div>
            </section>
          )}

          {activeTab === TABS.PROFILE && (
            <section className="screen screen--scroll" key="profile">
              <ProfileView />
            </section>
          )}

          {activeTab === TABS.REWARDS && (
            <section className="screen screen--scroll" key="rewards">
              <RewardsView />
            </section>
          )}
        </main>

        <FloatingActionButton
          visible={activeTab === TABS.MAP}
          onClick={() => handleTabChange(TABS.REPORT)}
        />

        <BottomNav activeTab={activeTab} onChange={handleTabChange} />

        {toast && (
          <div className="toast" role="status" aria-live="polite">
            <CheckCircle2 size={18} />
            <span>{toast}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
