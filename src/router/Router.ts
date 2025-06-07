import { HomePage } from '../pages/HomePage';
import { ProductsPage } from '../pages/ProductsPage';
import { ProductDetailPage } from '../pages/ProductDetailPage';

export class Router {
  private routes: { [key: string]: () => void } = {
    '/': () => this.renderPage(() => HomePage.render()),
    '/products': () => this.renderPage(() => ProductsPage.render()),
  };

  init(): void {
    this.handleRouteChange();
  }

  navigate(path: string): void {
    window.history.pushState({}, '', window.location.origin + window.location.pathname + '#' + path);
    this.handleRouteChange();
  }

  handleRouteChange(): void {
    const hash = window.location.hash.slice(1) || '/';
    
    // Handle product detail routes
    const productMatch = hash.match(/^\/product\/(\d+)$/);
    if (productMatch) {
      const productId = parseInt(productMatch[1], 10);
      this.renderPage(() => ProductDetailPage.render(productId));
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

  private renderPage(pageRenderer: () => void): void {
    pageRenderer();
    window.scrollTo(0, 0);
  }
}