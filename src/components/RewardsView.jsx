import {
  ArrowRight,
  Bike,
  Bus,
  Gift,
  Landmark,
  Medal,
  Paintbrush,
  ShieldCheck,
  Sparkles,
  Trophy,
  WalletCards,
} from 'lucide-react';

const REWARD_OPTIONS = [
  {
    title: 'Saldo Mi Macro',
    points: '750 pts',
    description: 'Canje para recargas de movilidad en Guadalajara.',
    icon: Bus,
  },
  {
    title: 'Bici publica',
    points: '520 pts',
    description: 'Minutos extra para sistemas de movilidad compartida.',
    icon: Bike,
  },
  {
    title: 'Beneficio local',
    points: '430 pts',
    description: 'Descuentos con comercios aliados de la colonia.',
    icon: Gift,
  },
];

const LEADERBOARD = [
  { name: 'Ana P.', area: 'Americana', points: 2480 },
  { name: 'Luis M.', area: 'Centro', points: 2115 },
  { name: 'Tú', area: 'Chapalita', points: 1840 },
];

const TRANSPARENCY_ITEMS = [
  { label: 'Reportes validados', value: '318' },
  { label: 'Recompensas entregadas', value: '$42k' },
  { label: 'Mejoras financiadas', value: '9' },
];

function RewardsView() {
  const communityProgress = 72;

  return (
    <div className="rewards-view">
      <section className="rewards-hero">
        <div className="rewards-hero__copy">
          <span className="section-intro__eyebrow">Mi Ciudad Rewards</span>
          <h2>Participar tambien suma para tu ciudad</h2>
          <p>
            Gana puntos por reportar, validar y dar seguimiento a infraestructura urbana.
          </p>
        </div>
        <div className="rewards-score" aria-label="Puntos disponibles">
          <Sparkles size={18} />
          <strong>1,840</strong>
          <span>pts</span>
        </div>
      </section>

      <section className="rewards-panel">
        <div className="rewards-panel__header">
          <div>
            <span className="section-intro__eyebrow">Canjes</span>
            <h3>Beneficios disponibles</h3>
          </div>
          <WalletCards size={20} />
        </div>

        <div className="reward-options">
          {REWARD_OPTIONS.map((reward) => {
            const Icon = reward.icon;

            return (
              <button key={reward.title} type="button" className="reward-option">
                <span className="reward-option__icon">
                  <Icon size={18} />
                </span>
                <span className="reward-option__copy">
                  <strong>{reward.title}</strong>
                  <small>{reward.description}</small>
                </span>
                <span className="reward-option__points">{reward.points}</span>
              </button>
            );
          })}
        </div>
      </section>

      <section className="community-goal">
        <div className="community-goal__top">
          <span className="community-goal__icon">
            <Paintbrush size={20} />
          </span>
          <div>
            <span className="section-intro__eyebrow">Meta colectiva</span>
            <h3>Mural y mobiliario para Chapalita</h3>
          </div>
        </div>
        <p>
          Si la comunidad alcanza 500 reportes validados, se libera presupuesto para
          intervenciones culturales y mobiliario urbano.
        </p>
        <div className="goal-progress" aria-label={`${communityProgress}% de avance`}>
          <span style={{ width: `${communityProgress}%` }} />
        </div>
        <div className="community-goal__meta">
          <strong>{communityProgress}% completado</strong>
          <span>360 de 500 reportes</span>
        </div>
      </section>

      <section className="rewards-panel">
        <div className="rewards-panel__header">
          <div>
            <span className="section-intro__eyebrow">Ranking</span>
            <h3>Competencia sana</h3>
          </div>
          <Trophy size={20} />
        </div>

        <div className="leaderboard">
          {LEADERBOARD.map((user, index) => (
            <div
              key={user.name}
              className={`leaderboard-row ${user.name === 'Tú' ? 'leaderboard-row--self' : ''}`}
            >
              <span className="leaderboard-row__rank">
                {index === 0 ? <Medal size={16} /> : index + 1}
              </span>
              <span className="leaderboard-row__copy">
                <strong>{user.name}</strong>
                <small>{user.area}</small>
              </span>
              <strong>{user.points.toLocaleString('es-MX')} pts</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="impact-ledger">
        <div className="impact-ledger__header">
          <span className="impact-ledger__icon">
            <ShieldCheck size={18} />
          </span>
          <div>
            <span className="section-intro__eyebrow">Transparencia</span>
            <h3>Impacto visible</h3>
          </div>
        </div>

        <div className="impact-ledger__grid">
          {TRANSPARENCY_ITEMS.map((item) => (
            <div key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>

        <button type="button" className="impact-link">
          <Landmark size={16} />
          <span>Ver destino de recursos</span>
          <ArrowRight size={16} />
        </button>
      </section>
    </div>
  );
}

export default RewardsView;
