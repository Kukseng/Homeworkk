import { Product } from '../types/Product';
import { ApiService } from '../services/ApiService';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';


export class ProductDetailPage {
  private product: Product | null = null;
  private loading = true;
  private error: string | null = null;
  private productId: number;

  constructor(productId: number) {
    this.productId = productId;
  }

  async init(): Promise<void> {
    await this.loadProduct();
    this.render();
    this.addEventListeners();
  }

  private async loadProduct(): Promise<void> {
    try {
      this.loading = true;
      this.error = null;
      this.product = await ApiService.fetchProduct(this.productId);
      this.loading = false;
    } catch (error) {
      this.error = error instanceof Error ? error.message : 'An unexpected error occurred';
      this.loading = false;
    }
  }

  private render(): void {
    const app = document.getElementById('app');
    if (!app) return;

    app.innerHTML = `
      ${Header.render()}
      
      <main class="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <div class="container mx-auto px-4 py-10">
          ${this.loading ? this.renderLoading() : ''}
        
          ${!this.loading && !this.error && this.product ? this.renderProduct() : ''}
        </div>
      </main>
      
      ${Footer.render()}
    `;

    Header.addEventListeners();
    this.addEventListeners();
  }

  private renderLoading(): string {
    return `
      <div class="max-w-5xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-gray-200 dark:bg-gray-700 rounded-md h-64"></div>
          <div class="space-y-3">
            <div class="bg-gray-200 dark:bg-gray-700 h-6 w-1/2 rounded"></div>
            <div class="bg-gray-200 dark:bg-gray-700 h-8 w-3/4 rounded"></div>
            <div class="bg-gray-200 dark:bg-gray-700 h-4 w-1/4 rounded"></div>
            <div class="bg-gray-200 dark:bg-gray-700 h-16 w-full rounded"></div>
            <div class="bg-gray-200 dark:bg-gray-700 h-10 w-1/3 rounded"></div>
          </div>
        </div>
      </div>
    `;
  }

 

  private renderProduct(): string {
    if (!this.product) return '';

    return `
      <!-- Breadcrumb -->
      <nav class="mb-6 flex items-center text-sm text-gray-500 dark:text-gray-400">
        <a href="#" data-route="/" class="hover:text-gray-700 dark:hover:text-gray-200">Home</a>
        <svg class="w-4 h-4 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
        <a href="#" data-route="/products" class="hover:text-gray-700 dark:hover:text-gray-200">Products</a>
        <svg class="w-4 h-4 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
        <span>${this.product.category.charAt(0).toUpperCase() + this.product.category.slice(1)}</span>
      </nav>

      <!-- Product Details -->
      <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Product Image -->
        <div class="bg-gray-100 dark:bg-gray-800 rounded-md p-6">
          <img 
            src="${this.product.image}" 
            alt="${this.product.title}"
            class="w-full h-64 object-contain"
          />
        </div>

        <!-- Product Info -->
        <div class="space-y-4">
          <!-- Category -->
          <span class="inline-block px-2 py-1 text-xs font-medium bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded">
            ${this.product.category.charAt(0).toUpperCase() + this.product.category.slice(1)}
          </span>

          <!-- Title -->
          <h1 class="text-2xl font-semibold text-gray-800 dark:text-gray-100">
            ${this.product.title}
          </h1>

          <!-- Rating -->
          <div class="flex items-center gap-3">
            ${this.renderStars(this.product.rating.rate)}
            <span class="text-sm text-gray-500 dark:text-gray-400">
              ${this.product.rating.rate.toFixed(1)} (${this.product.rating.count} reviews)
            </span>
          </div>

          <!-- Price -->
          <div class="flex items-center gap-3">
            <span class="text-2xl font-semibold text-gray-800 dark:text-gray-100">
              $${this.product.price.toFixed(2)}
            </span>
            <span class="text-sm text-gray-500 dark:text-gray-400 line-through">
              $${(this.product.price * 1.25).toFixed(2)}
            </span>
            <span class="text-xs font-medium text-red-600 dark:text-red-400">
              20% OFF
            </span>
          </div>

          <!-- Description -->
          <div>
            <h3 class="text-base font-medium text-gray-800 dark:text-gray-100 mb-2">Details</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              ${this.product.description}
            </p>
          </div>

          <!-- Actions -->
          <div class="flex flex-col sm:flex-row gap-3">
            <button class="flex-1 px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white dark:text-gray-100 rounded-md hover:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-200 text-sm">
              <svg class="w-4 h-4 mr-1 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
              Add to Cart
            </button>
            <button class="flex-1 px-4 py-2 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-md hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-200 text-sm">
              <svg class="w-4 h-4 mr-1 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
              Add to Wishlist
            </button>
          </div>

          <!-- Features -->
          <div class="border-t border-gray-200 dark:border-gray-700 pt-4">
            <h3 class="text-base font-medium text-gray-800 dark:text-gray-100 mb-2">Features</h3>
            <ul class="text-sm text-gray-600 dark:text-gray-400 space-y-2">
              <li class="flex items-center">
                <svg class="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                Free Shipping
              </li>
              <li class="flex items-center">
                <svg class="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                30-Day Returns
              </li>
              <li class="flex items-center">
                <svg class="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                Quality Guaranteed
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Back to Products -->
      <div class="mt-8 text-center">
        <a href="#" data-route="/products" class="inline-flex items-center px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">
          <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
          Back to Products
        </a>
      </div>
    `;
  }

  private renderStars(rating: number): string {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    let stars = '';

    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars += '<svg class="w-4 h-4 text-yellow-500 dark:text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>';
    }

    // Half star
    if (hasHalfStar) {
      stars += '<svg class="w-4 h-4 text-yellow-500 dark:text-yellow-400" viewBox="0 0 20 20"><defs><linearGradient id="half"><stop offset="50%" stop-color="currentColor"/><stop offset="50%" stop-color="transparent"/></linearGradient></defs><path fill="url(#half)" d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>';
    }

    // Empty stars
    for (let i = 0; i < emptyStars; i++) {
      stars += '<svg class="w-4 h-4 text-gray-300 dark:text-gray-600 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>';
    }

    return stars;
  }

  private addEventListeners(): void {
    
  }

  static render(productId: number): void {
    const page = new ProductDetailPage(productId);
    page.init();
  }
}