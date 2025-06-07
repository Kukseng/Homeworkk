export class Router {
  private routes: { [key: string]: () => Promise<void> | void } = {
    '/': () => this.renderPage(() => import('../pages/HomePage').then(m => m.HomePage.render())),
    '/products': () => this.renderPage(() => import('../pages/ProductsPage').then(m => m.ProductsPage.render())),
  };

  constructor() {
    this.initialize();
  }

  // Public method to initialize router
  public initialize(): void {
    this.handleRouteChange();
    window.addEventListener('hashchange', () => this.handleRouteChange());
  }

  public navigate(path: string): void {
    window.history.pushState({}, '', `#${path}`);
    this.handleRouteChange();
  }

  public handleRouteChange(): void {
    const hash = window.location.hash.slice(1) || '/';

    // Handle product detail routes
    const productMatch = hash.match(/^\/product\/(\d+)$/);
    if (productMatch) {
      const productId = parseInt(productMatch[1], 10);
      this.renderPage(() => import('../pages/ProductDetailPage').then(m => m.ProductDetailPage.render(productId)));
      return;
    }

    // Handle other routes
    const route = this.routes[hash];
    if (route) {
      route();
    } else {
      // Default to home page for unknown routes
      this.routes['/']();
    }
  }

  private renderPage(pageRenderer: () => Promise<void> | void): void {
    const app = document.getElementById('app');
    if (app) {
      app.innerHTML = ''; // Clear previous content
      const result = pageRenderer();
      if (result instanceof Promise) {
        result.then(() => window.scrollTo(0, 0));
      } else {
        window.scrollTo(0, 0);
      }
    }
  }

  // Method to add new routes dynamically
  public addRoute(path: string, renderer: () => Promise<void> | void): void {
    this.routes[path] = () => this.renderPage(renderer);
  }
}