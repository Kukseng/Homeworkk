import { Product } from '../types/Product';
import { ApiService } from '../services/ApiService';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ProductCard } from '../components/ProductCard';


export class ProductsPage {
  private products: Product[] = [];
  private filteredProducts: Product[] = [];
  private categories: string[] = [];
  private currentCategory = 'all';
  private currentSort = 'default';
  private searchQuery = '';
  private loading = true;
  private error: string | null = null;

  constructor() {
    this.init();
  }

  private async init(): Promise<void> {
    await this.loadData();
    this.render();
    this.addEventListeners();
  }

  private async loadData(): Promise<void> {
    try {
      this.loading = true;
      this.error = null;

      const [productsData, categoriesData] = await Promise.all([
        ApiService.fetchProducts(),
        ApiService.fetchCategories(),
      ]);

      this.products = productsData;
      this.filteredProducts = [...this.products];
      this.categories = categoriesData;
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
          <!-- Header -->
          <div class="mb-8 text-center">
            <h1 class="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100">
              All Products
            </h1>
            <p class="mt-2 text-base text-gray-500 dark:text-gray-400">
              Discover our curated selection
            </p>
          </div>

          ${this.loading ? this.renderLoading() : ''}
         
          ${!this.loading && !this.error ? this.renderContent() : ''}
        </div>
      </main>
      
      ${Footer.render()}
    `;

    Header.addEventListeners();
    this.addEventListeners();
  }

  private renderLoading(): string {
    return `
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        ${Array(8).fill(0).map(() => ProductCard.renderSkeleton()).join('')}
      </div>
    `;
  }

  // private renderError(): string {
  //   return ErrorMessage.render(this.error!, () => {
  //     this.loadData().then(() => this.render());
  //   });
  // }

  private renderContent(): string {
    return `
      <!-- Filters and Search -->
      <div class="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
        <div class="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <!-- Search -->
          <div class="relative w-full max-w-xs">
            <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.35-4.35m0-2.65a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
            <input
              id="search-input"
              type="text"
              placeholder="Search products"
              value="${this.searchQuery}"
              class="w-full pl-9 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-1 focus:ring-gray-500 dark:focus:ring-gray-400 focus:border-gray-500 dark:focus:border-gray-400 transition-all duration-200 text-sm"
            />
          </div>

          <!-- Category Filter -->
          <select
            id="category-filter"
            class="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-1 focus:ring-gray-500 dark:focus:ring-gray-400 focus:border-gray-500 dark:focus:border-gray-400 transition-all duration-200 text-sm"
          >
            <option value="all">All Categories</option>
            ${this.categories.map(category => `
              <option value="${category}" ${this.currentCategory === category ? 'selected' : ''}>
                ${category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            `).join('')}
          </select>
        </div>

        <div class="flex items-center gap-3">
          <!-- Sort -->
          <select
            id="sort-filter"
            class="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-1 focus:ring-gray-500 dark:focus:ring-gray-400 focus:border-gray-500 dark:focus:border-gray-400 transition-all duration-200 text-sm"
          >
            <option value="default">Sort By</option>
            <option value="price-low" ${this.currentSort === 'price-low' ? 'selected' : ''}>Price: Low to High</option>
            <option value="price-high" ${this.currentSort === 'price-high' ? 'selected' : ''}>Price: High to Low</option>
            <option value="rating" ${this.currentSort === 'rating' ? 'selected' : ''}>Highest Rated</option>
            <option value="name" ${this.currentSort === 'name' ? 'selected' : ''}>Name A-Z</option>
          </select>

          <!-- Results Count -->
          <span class="text-sm text-gray-500 dark:text-gray-400">
            ${this.filteredProducts.length} items
          </span>
        </div>
      </div>

      <!-- Products Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        ${this.filteredProducts.length > 0
          ? this.filteredProducts.map(product => ProductCard.render(product)).join('')
          : this.renderNoResults()
        }
      </div>
    `;
  }

  private renderNoResults(): string {
    return `
      <div class="col-span-full text-center py-12">
        <div class="w-20 h-20 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg class="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.35-4.35m0-2.65a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
        <h3 class="text-lg font-medium text-gray-800 dark:text-gray-100 mb-2">No Products Found</h3>
        <p class="text-gray-500 dark:text-gray-400 mb-4 text-sm">Try adjusting your filters or search</p>
        <button id="clear-filters" class="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-200 text-sm">
          Clear Filters
        </button>
      </div>
    `;
  }

  private addEventListeners(): void {
    // Search input
    const searchInput = document.getElementById('search-input') as HTMLInputElement;
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchQuery = (e.target as HTMLInputElement).value;
        this.applyFilters();
      });
    }

    // Category filter
    const categoryFilter = document.getElementById('category-filter') as HTMLSelectElement;
    if (categoryFilter) {
      categoryFilter.addEventListener('change', (e) => {
        this.currentCategory = (e.target as HTMLSelectElement).value;
        this.applyFilters();
      });
    }

    // Sort filter
    const sortFilter = document.getElementById('sort-filter') as HTMLSelectElement;
    if (sortFilter) {
      sortFilter.addEventListener('change', (e) => {
        this.currentSort = (e.target as HTMLSelectElement).value;
        this.applyFilters();
      });
    }

    // Clear filters
    const clearFilters = document.getElementById('clear-filters');
    if (clearFilters) {
      clearFilters.addEventListener('click', () => {
        this.clearFilters();
      });
    }

    // Error retry
    
  }

  private applyFilters(): void {
    let filtered = [...this.products];

    // Apply search filter
    if (this.searchQuery) {
      const query = this.searchQuery.toLowerCase();
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
      );
    }

    // Apply category filter
    if (this.currentCategory !== 'all') {
      filtered = filtered.filter(product => product.category === this.currentCategory);
    }

    // Apply sorting
    switch (this.currentSort) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating.rate - a.rating.rate);
        break;
      case 'name':
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
    }

    this.filteredProducts = filtered;
    this.updateProductsGrid();
  }

  private updateProductsGrid(): void {
    const grid = document.querySelector('.grid.grid-cols-1.sm\\:grid-cols-2.md\\:grid-cols-3.lg\\:grid-cols-4');
    if (grid) {
      grid.innerHTML = this.filteredProducts.length > 0
        ? this.filteredProducts.map(product => ProductCard.render(product)).join('')
        : this.renderNoResults();

      // Re-add event listeners for new content
      this.addEventListeners();
    }

    // Update results count
    const resultsCount = document.querySelector('.text-sm.text-gray-500.dark\\:text-gray-400');
    if (resultsCount) {
      resultsCount.textContent = `${this.filteredProducts.length} items`;
    }
  }

  private clearFilters(): void {
    this.searchQuery = '';
    this.currentCategory = 'all';
    this.currentSort = 'default';
    this.filteredProducts = [...this.products];
    this.render();
  }

  static render(): void {
    new ProductsPage();
  }
}