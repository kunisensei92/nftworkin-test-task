<template>
<nav id="navbar" :class="{ 'onScroll': !view.topOfPage}" 
									class="bg-transparent border-gray-200 px-2 sm:px-4 py-2.5 rounded sticky top-0 dark:bg-gray-800">
  <div class="container flex flex-wrap justify-between items-center mx-auto">
		<a href="/" class="flex items-center">
				<img src="../assets/logo.png" class="mr-3 w-[150px] xs:w-auto" alt="Site Logo" />
		</a>
		<div class="flex lg:order-2">
				<button type="button" class="text-white uppercase bg-[#489AFF] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-light rounded-3xl text-sm px-8 py-2.5 text-center mr-3 lg:mr-0" data-modal-toggle="defaultModal">Модалка</button>
				<button data-collapse-toggle="mobile-menu-4" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-4" aria-expanded="false">
				<span class="sr-only">Open main menu</span>
				<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
				<svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
			</button>
		</div>
		<div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-4">
			<ul class="flex flex-col mt-4 lg:flex-row lg:space-x-8 md:mt-0 md:text-[15px] font-light">
				<li v-for="item in navigation" :key="item.name">
					<a href="#" class="block py-2 pr-5 pl-4 rounded md:bg-transparent md:px-1" aria-current="page">{{ item.name}}</a>
				</li>
			</ul>
		</div>
  </div>
</nav>

<div id="defaultModal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
    <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <!-- Modal header -->
            <div class="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                    Это модальное окно
                </h3>
                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                </button>
            </div>
            <!-- Modal body -->
            <div class="p-6 space-y-6">
                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    Древние греки выдумали легенды о циклопах после того, как нашли окаменелость мамонта, и понятия не имели, что это было.
                </p>
                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    Канадцы так много говорят «извините», что в 2009 году был принят Закон об извинениях. Он гласит, что извинения не могут быть использованы в качестве доказательства признания вины.
                </p>
            </div>
            <!-- Modal footer -->
            <div class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                <button data-modal-toggle="defaultModal" type="button" class="text-white bg-[#489AFF] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Нифига себе</button>
                <button data-modal-toggle="defaultModal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">Пфф...</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
	el: '#navbar',
	data() {
		return {
			navigation: [
				{ name: 'Это меню', href: '#'},
				{ name: 'Должно', href: '#'},
				{ name: 'Быть', href: '#'},
				{ name: 'Закрепленным', href: '#'},
				{ name: 'При скролле', href: '#'},
			],
			view: {
        topOfPage: true
      }
		}
	},
	beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
	methods: {
		handleScroll() {
      if(window.pageYOffset>0){
        if(this.view.topOfPage) this.view.topOfPage = false
      } else {
        if(!this.view.topOfPage) this.view.topOfPage = true
      }
    }
	}
}
</script>

<style lang="scss" scoped>
nav {
    z-index: 10
}

nav.onScroll {
    background-color: #fff;
}

</style>