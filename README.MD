# Fix City - Frontend Demo

Fix City es una web app frontend mobile-first inspirada en una app de reportes ciudadanos. La interfaz simula una app móvil dentro del navegador e incluye mapa, formulario de reporte, seguimiento de incidencias y perfil de usuario.

## Tecnologías

- React
- Vite
- JavaScript
- CSS
- lucide-react

## Cómo ejecutar

```bash
npm install
npm run dev
```

## Estructura

```bash
src/
  assets/
    map-surface.svg
  components/
    BottomNav.jsx
    FloatingActionButton.jsx
    Header.jsx
    MapView.jsx
    ProfileView.jsx
    ReportCard.jsx
    ReportSheet.jsx
  data/
    mockReports.js
    reportTypes.js
  App.jsx
  main.jsx
  styles.css
```

## Demo incluida

- Vista principal con mapa simulado y pines de colores
- Botón flotante `+ NUEVO REPORTE`
- Pantalla de reporte con panel inferior y categorías
- Pantalla `Mis Reportes` con tarjetas limpias
- Pantalla `Perfil` con opciones visuales
- Navegación inferior mock sin backend
