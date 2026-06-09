# Guias del Sistema de Seguimiento de Aprendices

Landing estatica para publicar en GitHub y Vercel durante la exposicion del proyecto.

## Contenido

- `index.html`: pagina principal con guia de usuarios, guia tecnica y videos.
- `styles.css`: estilos responsivos.
- `app.js`: busqueda y cambio de roles.
- `assets/brand`: logo e iconos del proyecto.
- `assets/videos`: carpeta preparada para videos de demostracion.
- `assets/screenshots`: carpeta preparada para capturas reales del sistema.

## Publicar en Vercel

1. Sube esta carpeta a GitHub.
2. En Vercel selecciona **Add New Project**.
3. Si el repositorio contiene solo esta landing, no cambies nada.
4. Si el repositorio contiene mas carpetas, selecciona como root directory: `sena_guias_landing`.
5. Framework preset: **Other**.
6. Build command: vacio.
7. Output directory: vacio o `.`.

## Agregar videos

Puedes subir videos a `assets/videos` o pegar enlaces de YouTube/Drive modificando los enlaces de la seccion `Videos` en `index.html`.

## Agregar capturas

Guarda capturas reales del sistema en `assets/screenshots` con estos nombres para que aparezcan automaticamente en la guia por rol:

- `admin-dashboard.png`
- `instructor-acciones.png`
- `aprendiz-pendientes.png`
- `gestor-expediente.png`
- `coordinador-instancias.png`
