<template>
	<div class="flex">
		<div class="carousel-controls px-[20px] sm:px-0 lg:ml-[120px] basis-1/6 z-10 pt-[50px] text-center">
			<div class="arrow mx-auto" @click="next()">
				<img class="arrow-icon" src="../assets/right-arrow.svg" alt="Arrow Right">
			</div>
			<div class="arrow mx-auto" @click="previous()">
				<img class="arrow-icon" src="../assets/left-arrow.svg" alt="Arrow Left">
			</div>
			<div class="pagination pt-[115px]">
				<p class="font-normal"><span id="slideNum" class="text-5xl sm:text-7xl text-white">{{'0' + (slideNum + 1) }}</span><span id="slidesCount" class="text-3xl sm:text-4xl text-[#47678B]"> / {{'0' +  slidesCount }}</span></p>
			</div>
		</div>
		<div class="basis-5/6">
			<flickity ref="flickity" :options="flickityOptions">
				<div class="carousel-cell" v-for="item in items" :key="item.id">
					<img class="absolute right-3 top-3" src="../assets/heart.svg" alt="Heart">
					<div class="item-image pt-[45px] px-6">
						<img class="fill-grey-200" :src="require(`@/assets/${item.image}`)" alt="Item Image">
					</div>
					<div class="border-l-[3px] border-[#51BCF8]">
						<h3 class="text-xl px-4 mt-8 text-gray-700">{{ item.title }}</h3>
					</div>
					<div class="min-h-[80px]">
						<p class="text-[#818D9C] text-[13px] px-5 leading-[1rem] mt-[10px] font-thin tracking-wide">{{ item.description }}</p>
					</div>
					<div class="px-5 mt-2">
						<span class="text-xl text-gray-700">{{ item.price }} ₽</span>
						<span class="text-sm pl-3 text-gray-400 font-light line-through">{{ item.priceOff }} ₽</span>
					</div>
					<div class="flex flex-wrap px-5 mt-[20px]">
						<p class="text-[15px] text-gray-500">Цвет:</p>
						<div class="flex items-center mr-4 ml-1">
							<button v-for="color in item.colors" :key="color.id" type="button" class="ml-3 text-white bg-gray-600 ring-offset-[5px] focus:ring-[1px] focus:outline-none focus:ring-[#CDCDCD] font-medium rounded-full text-sm p-1.5 text-center inline-flex items-center mr-2" :style="`background-color: ${color.hex} `"></button>
						</div>
						<div class="absolute bg-[#51BCF8] w-[50px] h-[50px] bottom-0 right-0 rounded-tl-[10px] rounded-br-[10px]">
							<img class="p-4" src="../assets/plus.svg" alt="Plus">
						</div>
					</div>
				</div> 
			</flickity>
		</div>
	</div>
</template>

<script>
import Flickity from 'vue-flickity';

	export default {
		components: {
			Flickity
		},
		data() {
			return {
				flickityOptions: {
					initialIndex: 0,
					prevNextButtons: false,
					pageDots: false,
					wrapAround: false,
					groupCells: true    
				},
				slidesCount: 0,
				slideNum: 0,
				items: [
					{
						id: 0,
						title: 'New Balance 840 90s',
						image: 'nb1.svg',
						price: 10990,
						priceOff: 12990,
						description: '840 90s Running объединили в себе спортивную эстетику и необходимый в городском ритме комфорт.',
						colors: [
							{ id: 0, name: 'red', hex: '#D45D5E' },
							{ id: 1, name: 'blue', hex: '#518DD5' },
							{ id: 2, name: 'orange', hex: '#E98D4B' }
						],
					},
					{
						id: 1,
						title: 'New Balance 1500',
						image: 'nb2.svg',
						price: 13990,
						priceOff: 19990,
						description: 'Встречайте новые расцветки бессмертной классики!',
						colors: [
							{ id: 0, name: 'purple', hex: '#9F548C' },
							{ id: 1, name: 'black', hex: '#000000' },
						],
					},
					{
						id: 2,
						title: 'New Balance 997H',
						image: 'nb3.svg',
						price: 10990,
						priceOff: 12990,
						description: 'В 1991 году New Balance представил миру модель 997, которая вывела линейку 99X на совершенно новый уровень технологий и эстетики.',
						colors: [
							{ id: 0, name: 'purple', hex: '#B779DC' },
							{ id: 1, name: 'blue', hex: '#518DD5' },
							{ id: 2, name: 'gray', hex: '#97938F' },
						],
					},
					{
						id: 3,
						title: 'New Balance 247',
						image: 'nb4.svg',
						price: 10990,
						priceOff: 12990,
						description: '840 90s Running объединили в себе спортивную эстетику и необходимый в городском ритме комфорт.',
						colors: [
							{ id: 0, name: 'red', hex: '#D45D5E' },
							{ id: 1, name: 'blue', hex: '#518DD5' },
							{ id: 2, name: 'orange', hex: '#E98D4B' }
						],
					},
					{
						id: 4,
						title: 'New Balance 840 90s',
						image: 'nb1.svg',
						price: 10990,
						priceOff: 12990,
						description: '840 90s Running объединили в себе спортивную эстетику и необходимый в городском ритме комфорт.',
						colors: [
							{ id: 0, name: 'red', hex: '#D45D5E' },
							{ id: 1, name: 'blue', hex: '#518DD5' },
							{ id: 2, name: 'orange', hex: '#E98D4B' }
						],
					},
					{
						id: 5,
						title: 'New Balance 1500',
						image: 'nb2.svg',
						price: 13990,
						priceOff: 19990,
						description: 'Встречайте новые расцветки бессмертной классики!',
						colors: [
							{ id: 0, name: 'purple', hex: '#9F548C' },
							{ id: 1, name: 'black', hex: '#000000' },
						],
					},
					{
						id: 6,
						title: 'New Balance 997H',
						image: 'nb3.svg',
						price: 10990,
						priceOff: 12990,
						description: 'В 1991 году New Balance представил миру модель 997, которая вывела линейку 99X на совершенно новый уровень технологий и эстетики.',
						colors: [
							{ id: 0, name: 'purple', hex: '#B779DC' },
							{ id: 1, name: 'blue', hex: '#518DD5' },
							{ id: 2, name: 'gray', hex: '#97938F' },
						],
					},
					{
						id: 7,
						title: 'New Balance 247',
						image: 'nb4.svg',
						price: 10990,
						priceOff: 12990,
						description: '840 90s Running объединили в себе спортивную эстетику и необходимый в городском ритме комфорт.',
						colors: [
							{ id: 0, name: 'red', hex: '#D45D5E' },
							{ id: 1, name: 'blue', hex: '#518DD5' },
							{ id: 2, name: 'orange', hex: '#E98D4B' }
						],
					},
				]
			}
  	},
  
		methods: {
			next() {
				this.$refs.flickity.next();	
			},
			
			previous() {
				this.$refs.flickity.previous();
			},
		},
		mounted: function() {
			var vm = this;
			this.slidesCount = this.$refs.flickity.$flickity.slides.length;
			this.$refs.flickity.on( 'change', function( index ) {
				let slideId = this.selectedIndex;
				vm.slideNum = slideId;
			});
		}
	}
</script>

<style lang="scss">
$base-height: 398px;

.carousel-cell {
  width: 240px;
  height: $base-height;
  margin-right: 30px;
	background: #fff;
	border-radius: 10px;
	-webkit-box-shadow: 0px 6px 20px 0px rgba(34, 60, 80, 0.1);
	-moz-box-shadow: 0px 6px 20px 0px rgba(34, 60, 80, 0.1);
	box-shadow: 0px 6px 20px 0px rgba(34, 60, 80, 0.1);
}

.flickity-viewport {
  height: calc(#{$base-height} + 50px) !important;
}

.arrow {
	width: 60px;
	height: 60px;
	cursor: pointer;
	border: 2px solid rgba(255, 255, 255, 0.3);
	border-radius: 50%;
	margin-top:22px;
	&-icon {
		position: relative;
		left: 17px;
		top: 20px;
	}
	&:hover {
		border: 2px solid rgba(255, 255, 255, 0.6);
	}
}



</style>