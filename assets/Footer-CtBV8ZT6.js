class s{static render(){return`
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
    `}static addEventListeners(){const t=document.getElementById("mobile-menu-toggle"),e=document.getElementById("mobile-menu"),a=document.getElementById("hamburger-icon"),o=document.getElementById("close-icon");t&&e&&a&&o&&t.addEventListener("click",()=>{const r=e.classList.contains("hidden");e.classList.toggle("hidden"),r?(e.classList.remove("scale-0"),e.classList.add("scale-100"),a.classList.add("hidden"),o.classList.remove("hidden"),t.classList.add("rotate-45")):(e.classList.remove("scale-100"),e.classList.add("scale-0"),a.classList.remove("hidden"),o.classList.add("hidden"),t.classList.remove("rotate-45"))})}}class n{static render(){return`
      <footer class="bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
        <div class="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div class="container mx-auto px-6 py-16 relative z-10">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div class="flex flex-col items-center md:items-start">
              <div class="flex items-center space-x-3 mb-6">
                <div class="relative w-12 h-12 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple animate-glow">
                  <svg class="w-7 h-7 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a8 8 0 00-8 8c0 4.418 3.582 8 8 8s8-3.582 8-8a8 8 0 00-8-8zm0 14a6 6 0 110-12 6 6 0 010 12z"></path>
                  </svg>
                </div>
                <h3 class="text-2xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">FutureMart</h3>
              </div>
              <p class="text-gray-300 text-center md:text-left max-w-sm mb-6">
                Your gateway to futuristic shopping with premium products, instant delivery, and unmatched support.
              </p>
              <div class="flex space-x-6">
                <a href="#" class="text-gray-400 hover:text-neon-blue transition-all duration-300 transform hover:scale-125">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" class="text-gray-400 hover:text-neon-purple transition-all duration-300 transform hover:scale-125">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.148 3.227-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.148-4.771-1.691-4.919-4.919-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.948-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" class="text-gray-400 hover:text-neon-pink transition-all duration-300 transform hover:scale-125">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.747.095.116.108.219.08.338-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75--1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017 0z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div class="flex flex-col items-center md:items-start">
              <h4 class="text-lg font-semibold text-neon-blue mb-6">Explore</h4>
              <ul class="space-y-4 text-gray-300 text-center md:text-left">
                <li><a href="#" data-route="/" class="hover:text-neon-blue transition-all duration-300 relative group">Home
                  <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-blue group-hover:w-full transition-all duration-300"></span>
                </a></li>
                <li><a href="#" data-route="/shop" class="hover:text-neon-blue transition-all duration-300 relative group">Shop
                  <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-blue group-hover:w-full transition-all duration-300"></span>
                </a></li>
                <li><a href="#" data-route="/blog" class="hover:text-neon-blue transition-all duration-300 relative group">Blog
                  <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-blue group-hover:w-full transition-all duration-300"></span>
                </a></li>
                <li><a href="#" data-route="/about" class="hover:text-neon-blue transition-all duration-300 relative group">About
                  <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-blue group-hover:w-full transition-all duration-300"></span>
                </a></li>
              </ul>
            </div>
            
            <div class="flex flex-col items-center md:items-start">
              <h4 class="text-lg font-semibold text-neon-purple mb-6">Support</h4>
              <ul class="space-y-4 text-gray-300 text-center md:text-left">
                <li><a href="#" class="hover:text-neon-purple transition-all duration-300 relative group">Help Center
                  <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-purple group-hover:w-full transition-all duration-300"></span>
                </a></li>
                <li><a href="#" class="hover:text-neon-purple transition-all duration-300 relative group">Shipping
                  <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-purple group-hover:w-full transition-all duration-300"></span>
                </a></li>
                <li><a href="#" class="hover:text-neon-purple transition-all duration-300 relative group">Returns
                  <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-purple group-hover:w-full transition-all duration-300"></span>
                </a></li>
                <li><a href="#" class="hover:text-neon-purple transition-all duration-300 relative group">Contact
                  <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-purple group-hover:w-full transition-all duration-300"></span>
                </a></li>
              </ul>
            </div>
          </div>
          
          <div class="mt-12 pt-8 border-t border-gray-800/50 text-center text-gray-400">
            <p>© 2025 FutureMart. All rights reserved. Designed for innovation.</p>
          </div>
        </div>

        <style>
          .bg-grid-pattern {
            background-image: linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
            background-size: 30px 30px;
          }
          @keyframes glow {
            0%, 100% { box-shadow: 0 0 8px rgba(59, 130, 246, 0.5), 0 0 16px rgba(236, 72, 153, 0.3); }
            50% { box-shadow: 0 0 16px rgba(59, 130, 246, 0.8), 0 0 24px rgba(236, 72, 153, 0.5); }
          }
          .animate-glow {
            animation: glow 2s ease-in-out infinite;
          }
        </style>
      </footer>
    `}}export{n as F,s as H};
