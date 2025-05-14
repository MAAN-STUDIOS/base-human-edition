const routes = new Map();

export function registerScreen(name, screenFn) {
  routes.set(name, screenFn);
}

export function navigate(name) {
  const screen = routes.get(name);
  if (!screen) {
    console.warn(`No screen registered with name: ${name}`);
    return;
  }

  const root = document.body;
  root.innerHTML = ''; 
  root.appendChild(screen());
}
