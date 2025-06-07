var u=Object.defineProperty;var h=(i,e,r)=>e in i?u(i,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):i[e]=r;var s=(i,e,r)=>h(i,typeof e!="symbol"?e+"":e,r);import{A as n}from"./ApiService-BaP9vsO9.js";import{H as c,F as y}from"./Footer-CtBV8ZT6.js";class d{static render(e){return`
      <div class="relative group bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-none border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-lg dark:hover:shadow-blue-500/20 hover:-translate-y-1">
        <!-- Image Container -->
        <div class="relative aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-gray-900">
          <img 
            src="${e.image}" 
            alt="${e.title}"
            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
            loading="lazy"
          />
          <!-- Category Tag -->
          <span class="absolute top-4 left-4 px-3 py-1 text-sm font-medium bg-blue-600 dark:bg-blue-500 text-white rounded-full animate-fade-in">
            ${e.category.charAt(0).toUpperCase()+e.category.slice(1)}
          </span>
        </div>
        
        <!-- Content -->
        <div class="p-6 flex flex-col">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
            ${e.title}
          </h3>
          
          <!-- Rating -->
          <div class="flex items-center mb-4">
            ${this.renderStars(e.rating.rate)}
            <span class="ml-3 text-sm text-gray-500 dark:text-gray-400">
              (${e.rating.count})
            </span>
          </div>
          
          <!-- Price and Button -->
          <div class="flex items-center justify-between mt-auto">
            <span class="text-xl font-bold text-blue-600 dark:text-blue-400">
              $${e.price.toFixed(2)}
            </span>
            <a 
              href="#"
              data-route="/product/${e.id}" 
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
    `}static renderSkeleton(){return`
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
    `}static renderStars(e){const r=Math.floor(e),t=e%1>=.5,l=5-r-(t?1:0);let a="";for(let o=0;o<r;o++)a+='<svg class="w-5 h-5 text-yellow-500 dark:text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>';t&&(a+='<svg class="w-5 h-5 text-yellow-500 dark:text-yellow-400" viewBox="0 0 20 20"><defs><linearGradient id="half"><stop offset="50%" stop-color="currentColor"/><stop offset="50%" stop-color="transparent"/></linearGradient></defs><path fill="url(#half)" d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>');for(let o=0;o<l;o++)a+='<svg class="w-5 h-5 text-gray-300 dark:text-gray-600 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>';return a}}class g{constructor(){s(this,"products",[]);s(this,"filteredProducts",[]);s(this,"categories",[]);s(this,"currentCategory","all");s(this,"currentSort","default");s(this,"searchQuery","");s(this,"loading",!0);s(this,"error",null);this.init()}async init(){await this.loadData(),this.render(),this.addEventListeners()}async loadData(){try{this.loading=!0,this.error=null;const[e,r]=await Promise.all([n.fetchProducts(),n.fetchCategories()]);this.products=e,this.filteredProducts=[...this.products],this.categories=r,this.loading=!1}catch(e){this.error=e instanceof Error?e.message:"An unexpected error occurred",this.loading=!1}}render(){const e=document.getElementById("app");e&&(e.innerHTML=`
      ${c.render()}
      
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

          ${this.loading?this.renderLoading():""}
         
          ${!this.loading&&!this.error?this.renderContent():""}
        </div>
      </main>
      
      ${y.render()}
    `,c.addEventListeners(),this.addEventListeners())}renderLoading(){return`
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        ${Array(8).fill(0).map(()=>d.renderSkeleton()).join("")}
      </div>
    `}renderContent(){return`
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
            ${this.categories.map(e=>`
              <option value="${e}" ${this.currentCategory===e?"selected":""}>
                ${e.charAt(0).toUpperCase()+e.slice(1)}
              </option>
            `).join("")}
          </select>
        </div>

        <div class="flex items-center gap-3">
          <!-- Sort -->
          <select
            id="sort-filter"
            class="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-1 focus:ring-gray-500 dark:focus:ring-gray-400 focus:border-gray-500 dark:focus:border-gray-400 transition-all duration-200 text-sm"
          >
            <option value="default">Sort By</option>
            <option value="price-low" ${this.currentSort==="price-low"?"selected":""}>Price: Low to High</option>
            <option value="price-high" ${this.currentSort==="price-high"?"selected":""}>Price: High to Low</option>
            <option value="rating" ${this.currentSort==="rating"?"selected":""}>Highest Rated</option>
            <option value="name" ${this.currentSort==="name"?"selected":""}>Name A-Z</option>
          </select>

          <!-- Results Count -->
          <span class="text-sm text-gray-500 dark:text-gray-400">
            ${this.filteredProducts.length} items
          </span>
        </div>
      </div>

      <!-- Products Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        ${this.filteredProducts.length>0?this.filteredProducts.map(e=>d.render(e)).join(""):this.renderNoResults()}
      </div>
    `}renderNoResults(){return`
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
    `}addEventListeners(){const e=document.getElementById("search-input");e&&e.addEventListener("input",a=>{this.searchQuery=a.target.value,this.applyFilters()});const r=document.getElementById("category-filter");r&&r.addEventListener("change",a=>{this.currentCategory=a.target.value,this.applyFilters()});const t=document.getElementById("sort-filter");t&&t.addEventListener("change",a=>{this.currentSort=a.target.value,this.applyFilters()});const l=document.getElementById("clear-filters");l&&l.addEventListener("click",()=>{this.clearFilters()})}applyFilters(){let e=[...this.products];if(this.searchQuery){const r=this.searchQuery.toLowerCase();e=e.filter(t=>t.title.toLowerCase().includes(r)||t.description.toLowerCase().includes(r)||t.category.toLowerCase().includes(r))}switch(this.currentCategory!=="all"&&(e=e.filter(r=>r.category===this.currentCategory)),this.currentSort){case"price-low":e.sort((r,t)=>r.price-t.price);break;case"price-high":e.sort((r,t)=>t.price-r.price);break;case"rating":e.sort((r,t)=>t.rating.rate-r.rating.rate);break;case"name":e.sort((r,t)=>r.title.localeCompare(t.title));break}this.filteredProducts=e,this.updateProductsGrid()}updateProductsGrid(){const e=document.querySelector(".grid.grid-cols-1.sm\\:grid-cols-2.md\\:grid-cols-3.lg\\:grid-cols-4");e&&(e.innerHTML=this.filteredProducts.length>0?this.filteredProducts.map(t=>d.render(t)).join(""):this.renderNoResults(),this.addEventListeners());const r=document.querySelector(".text-sm.text-gray-500.dark\\:text-gray-400");r&&(r.textContent=`${this.filteredProducts.length} items`)}clearFilters(){this.searchQuery="",this.currentCategory="all",this.currentSort="default",this.filteredProducts=[...this.products],this.render()}static render(){new g}}export{g as ProductsPage};
