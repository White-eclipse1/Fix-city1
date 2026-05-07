# Mi Ciudad - Frontend Demo

Mi Ciudad es una web app frontend mobile-first inspirada en una app de reportes ciudadanos. La interfaz simula una app movil dentro del navegador e incluye mapa, formulario de reporte, seguimiento de incidencias y perfil de usuario.

## Tecnologias

- React
- Vite
- JavaScript
- CSS
- lucide-react

## Como ejecutar en local

```bash
npm install
npm run dev
```

Para generar una version de produccion:

```bash
npm run build
npm run preview
```

## GitHub Pages

El proyecto ya esta preparado para publicarse en GitHub Pages usando GitHub Actions.

Pasos:

1. Sube estos cambios a GitHub.
2. Entra a `Settings > Pages` dentro del repositorio.
3. En `Source` selecciona `GitHub Actions`.
4. Haz push a `main` o `master`.
5. GitHub construira y publicara automaticamente el contenido de `dist`.

La configuracion de Vite detecta el nombre del repositorio dentro de GitHub Actions para generar la ruta base correcta en Pages.

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
- Boton flotante `+ NUEVO REPORTE`
- Pantalla de reporte con panel inferior y categorias
- Pantalla `Mis Reportes` con tarjetas limpias
- Pantalla `Perfil` con opciones visuales
- Navegacion inferior mock sin backend
