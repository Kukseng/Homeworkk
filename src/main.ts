import './style.css';
import { Router } from './router/Router';
import { ThemeManager } from './utils/ThemeManager';

// Initialize theme manager
const themeManager = new ThemeManager();
themeManager.init();

// Initialize router
const router = new Router(); // Constructor calls initialize()

// Handle navigation clicks
document.addEventListener('click', (e) => {
  const target = e.target as HTMLElement;
  const link = target.closest('[data-route]') as HTMLElement;

  if (link) {
    e.preventDefault();
    const route = link.getAttribute('data-route');
    if (route) {
      router.navigate(route);
    }
  }
});

// Handle browser back/forward buttons
window.addEventListener('popstate', () => {
  router.handleRouteChange();
});