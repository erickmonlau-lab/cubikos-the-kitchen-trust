export function renderErrorPage(): string {
  return `<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <title>Esta página no ha cargado | CUBIKOS</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      body { font: 15px/1.5 system-ui, -apple-system, sans-serif; background: #0c0a09; color: #f5f5f4; display: grid; place-items: center; min-height: 100vh; margin: 0; padding: 1.5rem; }
      .card { max-width: 28rem; width: 100%; text-align: center; padding: 2.5rem; background: #1c1917; border-radius: 1rem; border: 1px solid #292524; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5); }
      h1 { font-size: 1.5rem; font-weight: 700; margin: 0 0 0.75rem; color: #d8a843; }
      p { color: #a8a29e; margin: 0 0 1.5rem; line-height: 1.6; }
      .actions { display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap; }
      a, button { padding: 0.65rem 1.25rem; border-radius: 0.5rem; font: inherit; font-weight: 600; cursor: pointer; text-decoration: none; border: 1px solid transparent; transition: all 0.2s; }
      .primary { background: #d8a843; color: #0c0a09; }
      .primary:hover { background: #b88d30; }
      .secondary { background: transparent; color: #e7e5e4; border-color: #44403c; }
      .secondary:hover { background: #292524; }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>Esta página no ha cargado</h1>
      <p>Ha ocurrido un problema momentáneo. Puedes intentar recargar la página o volver al inicio.</p>
      <div class="actions">
        <button class="primary" onclick="location.reload()">Reintentar</button>
        <a class="secondary" href="/">Volver al inicio</a>
      </div>
    </div>
  </body>
</html>`;
}