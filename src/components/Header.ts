// export class Header {
//   static render(): string {
//     return `
//       <header class="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
//         <nav class="container mx-auto px-4 py-4">
//           <div class="flex items-center justify-between">
//             <div class="flex items-center space-x-2">
//               <div class="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
//                 <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
//                   <path fill-rule="evenodd" d="M10 2L3 7v11a1 1 0 001 1h12a1 1 0 001-1V7l-7-5zM10 1l8 6v12a2 2 0 01-2 2H4a2 2 0 01-2-2V7l8-6z" clip-rule="evenodd"></path>
//                 </svg>
//               </div>
//               <h1 class="text-xl font-bold text-gray-900 dark:text-white">Modern Shop</h1>
//             </div>
            
//             <div class="hidden md:flex items-center space-x-8">
//               <a href="#" data-route="/" class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium">Home</a>
//               <a href="#" data-route="/products" class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium">Products</a>
//             </div>
            
//             <div class="flex items-center space-x-4">
//               <button id="theme-toggle" class="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
//                 <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
//                   <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
//                 </svg>
//               </button>
              
//               <div class="md:hidden">
//                 <button id="mobile-menu-toggle" class="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
//                   <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
//                     <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
//                   </svg>
//                 </button>
//               </div>
//             </div>
//           </div>
          
//           <div id="mobile-menu" class="hidden md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-700 pt-4">
//             <div class="flex flex-col space-y-3">
//               <a href="#" data-route="/" class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium">Home</a>
//               <a href="#" data-route="/products" class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium">Products</a>
//             </div>
//           </div>
//         </nav>
//       </header>
//     `;
//   }

//   static addEventListeners(): void {
//     const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
//     const mobileMenu = document.getElementById('mobile-menu');

//     if (mobileMenuToggle && mobileMenu) {
//       mobileMenuToggle.addEventListener('click', () => {
//         mobileMenu.classList.toggle('hidden');
//       });
//     }
//   }
// }

export class Header {
  static render(): string {
    return `
      <header class="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-neon-blue/30">
        <nav class="container mx-auto px-8 py-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-4">
              <div class="relative w-12 h-12 flex items-center justify-center">
                <div class="absolute inset-0 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple animate-glow"></div>
                <svg class="w-8 h-8 text-white relative z-10" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a8 8 0 00-8 8c0 4.418 3.582 8 8 8s8-3.582 8-8a8 8 0 00-8-8zm0 14a6 6 0 110-12 6 6 0 010 12z"></path>
                </svg>
              </div>
              <span class="text-3xl font-extrabold text-white tracking-wider">FutureMart</span>
            </div>

            <div class="hidden lg:flex items-center space-x-16">
              <a href="#" data-route="/" class="text-white font-semibold text-lg hover:text-neon-blue transition-colors duration-300 relative group">
                Home
                <span class="absolute -bottom-1 left-0 w-full h-0.5 bg-neon-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
              <a href="#" data-route="/products" class="text-white font-semibold text-lg hover:text-neon-blue transition-colors duration-300 relative group">
                Shop
                <span class="absolute -bottom-1 left-0 w-full h-0.5 bg-neon-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
              <a href="#" data-route="/contact" class="text-white font-semibold text-lg hover:text-neon-blue transition-colors duration-300 relative group">
                Contact
                <span class="absolute -bottom-1 left-0 w-full h-0.5 bg-neon-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
            </div>

            <div class="flex items-center space-x-8">
              <button id="theme-toggle" class="p-3 rounded-full bg-black/50 border border-neon-blue/50 text-white hover:bg-neon-blue/20 transition-all duration-300 group">
                <svg class="w-6 h-6 transform group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
              </button>

              <div class="lg:hidden">
                <button id="mobile-menu-toggle" class="p-3 rounded-full bg-black/50 border border-neon-blue/50 text-white hover:bg-neon-blue/20 transition-all duration-300">
                  <svg id="hamburger-icon" class="w-6 h-6 transform transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                  </svg>
                  <svg id="close-icon" class="w-6 h-6 transform transition-transform duration-300 hidden" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div id="mobile-menu" class="hidden lg:hidden mt-6 bg-black/70 backdrop-blur-md rounded-full shadow-2xl shadow-neon-blue/30 mx-auto w-3/4 transform transition-all duration-500 ease-in-out scale-0 origin-center">
            <div class="flex flex-col p-6 space-y-4 items-center">
              <a href="#" data-route="/" class="text-white font-semibold text-xl hover:text-neon-blue transition-colors duration-300 py-3 px-6 rounded-full hover:bg-neon-blue/10">Home</a>
              <a href="#" data-route="/shop" class="text-white font-semibold text-xl hover:text-neon-blue transition-colors duration-300 py-3 px-6 rounded-full hover:bg-neon-blue/10">Shop</a>
              <a href="#" data-route="/contact" class="text-white font-semibold text-xl hover:text-neon-blue transition-colors duration-300 py-3 px-6 rounded-full hover:bg-neon-blue/10">Contact</a>
            </div>
          </div>
        </nav>
      </header>

      <style>
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 10px rgba(59, 130, 246, 0.5), 0 0 20px rgba(236, 72, 153, 0.3); }
          50% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.8), 0 0 30px rgba(236, 72, 153, 0.5); }
        }
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
      </style>
    `;
  }

  static addEventListeners(): void {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const closeIcon = document.getElementById('close-icon');

    if (mobileMenuToggle && mobileMenu && hamburgerIcon && closeIcon) {
      mobileMenuToggle.addEventListener('click', () => {
        const isHidden = mobileMenu.classList.contains('hidden');
        mobileMenu.classList.toggle('hidden');
        if (isHidden) {
          mobileMenu.classList.remove('scale-0');
          mobileMenu.classList.add('scale-100');
          hamburgerIcon.classList.add('hidden');
          closeIcon.classList.remove('hidden');
          mobileMenuToggle.classList.add('rotate-45');
        } else {
          mobileMenu.classList.remove('scale-100');
          mobileMenu.classList.add('scale-0');
          hamburgerIcon.classList.remove('hidden');
          closeIcon.classList.add('hidden');
          mobileMenuToggle.classList.remove('rotate-45');
        }
      });
    }
  }
}