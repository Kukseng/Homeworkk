export class ProductCard {
    static render(product) {
        return `
      <div class="relative group bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-none border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-lg dark:hover:shadow-blue-500/20 hover:-translate-y-1">
        <!-- Image Container -->
        <div class="relative aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-gray-900">
          <img 
            src="${product.image}" 
            alt="${product.title}"
            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
            loading="lazy"
          />
          <!-- Category Tag -->
          <span class="absolute top-4 left-4 px-3 py-1 text-sm font-medium bg-blue-600 dark:bg-blue-500 text-white rounded-full animate-fade-in">
            ${product.category.charAt(0).toUpperCase() + product.category.slice(1)}
          </span>
        </div>
        
        <!-- Content -->
        <div class="p-6 flex flex-col">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
            ${product.title}
          </h3>
          
          <!-- Rating -->
          <div class="flex items-center mb-4">
            ${this.renderStars(product.rating.rate)}
            <span class="ml-3 text-sm text-gray-500 dark:text-gray-400">
              (${product.rating.count})
            </span>
          </div>
          
          <!-- Price and Button -->
          <div class="flex items-center justify-between mt-auto">
            <span class="text-xl font-bold text-blue-600 dark:text-blue-400">
              $${product.price.toFixed(2)}
            </span>
            <a 
              href="#"
              data-route="/product/${product.id}" 
              class="inline-flex items-center px-4 py-2 bg-transparent border border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-500 rounded-full hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-white transition-all duration-300"
            >
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12h6m-3-3l3 3-3 3"></path>
              </svg>
              Details
            </a>
          </div>
        </div>
      </div>
    `;
    }
    static renderSkeleton() {
        return `
      <div class="relative bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-none border border-gray-200 dark:border-gray-700 p-6 animate-pulse">
        <!-- Image Placeholder -->
        <div class="aspect-[4/3] bg-gray-200 dark:bg-gray-700 rounded-lg mb-6"></div>
        <!-- Category Placeholder -->
        <div class="h-6 w-24 bg-gray-200 dark:bg-gray-700 rounded-full mb-4"></div>
        <!-- Title Placeholder -->
        <div class="h-5 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mb-3"></div>
        <!-- Rating Placeholder -->
        <div class="flex items-center mb-4">
          <div class="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded"></div>
          <div class="h-4 w-12 bg-gray-200 dark:bg-gray-700 rounded ml-3"></div>
        </div>
        <!-- Price and Button Placeholder -->
        <div class="flex items-center justify-between">
          <div class="h-6 w-16 bg-gray-200 dark:bg-gray-700 rounded"></div>
          <div class="h-8 w-20 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
        </div>
      </div>
    `;
    }
    static renderStars(rating) {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
        let stars = '';
        // Full stars
        for (let i = 0; i < fullStars; i++) {
            stars += '<svg class="w-5 h-5 text-yellow-500 dark:text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>';
        }
        // Half star
        if (hasHalfStar) {
            stars += '<svg class="w-5 h-5 text-yellow-500 dark:text-yellow-400" viewBox="0 0 20 20"><defs><linearGradient id="half"><stop offset="50%" stop-color="currentColor"/><stop offset="50%" stop-color="transparent"/></linearGradient></defs><path fill="url(#half)" d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>';
        }
        // Empty stars
        for (let i = 0; i < emptyStars; i++) {
            stars += '<svg class="w-5 h-5 text-gray-300 dark:text-gray-600 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>';
        }
        return stars;
    }
}
