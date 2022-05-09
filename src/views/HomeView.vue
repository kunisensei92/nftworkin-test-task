<template>
	<main>
		<div class="container px-[20px] xl:px-0 mx-auto pt-14">
			<div class="pt-3">
				<div class="grid grid-cols-1 lg:grid-cols-2 items-center">
					<div>
						<img src="../assets/hand.png" alt="">
						<h1 class="text-4xl mt-3 text-gray-700 font-normal">Привет!</h1>
						<p class="text-[15px] md:max-w-[60%] lg:max-w-[80%] tracking-wider mt-2.5 text-gray-700 font-thin">Группа компаний Freematiq и MITRA ищет себе клевого верстальщика. На постоянную работу в офисе или периодическую  работу по удаленке. Хотим предложить тебе вместо скучных тестовых заданий – сверстать эту страницу.</p>
						<p class="text-[15px] tracking-wide mt-4 text-gray-700">В своей работе мы используем:</p>
						<ul class="stack-list list-none text-[15px] leading-[1.61rem] list-inside font-light text-gray-700 mt-1.5">
							<li>HTML5, CSS3</li>
							<li>Bootstrap 4</li>
							<li>Jade, Pug</li>
							<li>Less, SCSS</li>
							<li>Иконочные шрифты</li>
							<li>SVG иллюстрации</li>
						</ul>
						<p class="text-[15px] font-thin tracking-wider mt-4 text-gray-700">Не ограничиваем этими технологиями, верстай как удобно.</p>
					</div>
				</div>
			</div>
			<div class="mt-[10.6rem] border-t-[1px] border-[#E3E8EF] mx-auto max-w-[848px]"></div>
			<div class="font-thin pt-6 text-center tracking-wider text-gray-700 max-w-2xl text-[15px] mx-auto">Это твое первое задание в нашей компании. Если оно покажется тебе интересным и его реализация нам понравится – добро пожаловать в команду.</div>
			<div class="md:flex xs:flex-row justify-center pt-7">
				<div class="basis-1/6">
					<img class="mx-auto" src="../assets/pc.svg" alt="PC">
					<p class="text-center font-thin text-[15px] mt-2">Первый блок на<br /> всю высоту экрана</p>
				</div>
				<div class="basis-1/6 mt-6 md:mt-0">
					<img class="mx-auto" src="../assets/devices.svg" alt="Devices">
					<p class="text-center font-thin text-[15px]">Отзывчивая<br /> верстка</p>
				</div>
			</div>
			<div class="mt-7 border-t-[1px] border-[#E3E8EF] mx-auto max-w-[848px]"></div>
			<div class="flex-row md:flex mt-20">
				<div class="basis-1/2 text-center">
					<img class="mx-auto" src="../assets/export.svg" alt="Export Image">
				</div>
				<div class="mt-10 basis-1/2 pl">
					<img src="../assets/rocket.svg" alt="Rocket">
					<h1 class="text-4xl mt-3 text-gray-700 font-normal">Как ускорить процесс</h1>
					<p class="text-[15px] tracking-wider mt-2.5 text-gray-700 font-thin">Чтобы иметь доступ ко всем функциям и возможностям Figma, которые облегчат и ускорят процесс верстки, зарегистрируйся и залогинься в системе.</p>
					<a href="/404"><button type="button" class="text-white mr-0 mt-3 bg-[#489AFF] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-normal rounded-3xl text-[15px] px-[38px] py-3 text-center uppercase">Зарегистрироваться</button></a>
				</div>
			</div>
			<div class="bg-[#354A62] py-[30px] px-[45px] rounded-md mt-[60px]">
				<div class="md:flex">
					<div class="md:basis-4/6 leading-5">
						<img src="../assets/star-eyes.svg" alt="Emoji">
						<h1 class="text-3xl mt-2 text-white font-normal">Оцени себя</h1>
						<p class="text-[#C4CCD6] font-thin mt-[6px] text-[15px] tracking-wider">Попробуй максимально объективно и честно оценить свои знания верстки по следующей шкале. И да, её тоже нужно сверстать.</p>
					</div>
					<div class="md:basis-1/6 mt-6 md:mt-0">
						<div class="radial-progress text-center text-[#C78FF9]" style="--value:75; --size:6.5rem; --thickness: 5px; float: right;">
							<span class="text-[#fff] text-3xl font-light">12</span>
							<span class="text-[#C4CCD6] text-[15px] font-thin">Лет</span>
						</div>
					</div>
					<div class="md:basis-1/6">
						<div class="mr-6 md:mr-0 radial-progress text-center text-[#FFC35A]" style="--value:75; --size:6.5rem; --thickness: 5px; float: right;">
							<span class="text-[#fff] text-3xl font-light">269</span>
							<span class="text-[#C4CCD6] text-[15px] font-thin">Проектов</span>
						</div>
					</div>
				</div>
				<div class="clear-both mt-[20px]">
					<div class="pt-6 md:pt-0">					
						<input id="range" type="range" min="1" max="5" value="2" step="1" class="w-full h-[0.4rem] bg-[#23364C] rounded-lg appearance-none cursor-pointer range-sm dark:bg-gray-700">
					</div>
					<div class="flex mt-[6px]">
						<div class="basis-1/6 text-white"><span><img src="../assets/dot.svg" alt="Dot"></span><p class="font-thin pt-[4px]">Intern</p></div>
						<div class="basis-1/3 pl-[8px] text-center text-white"><span><img class="mx-auto" src="../assets/dot.svg" alt="Dot"></span><p class="font-thin pt-[4px]">Junior</p></div>
						<div class="basis-1/3 text-center text-white"><span><img class="mx-auto" src="../assets/dot.svg" alt="Dot"></span><p class="font-thin pt-[4px]">Middle</p></div>
						<div class="basis-1/3 pr-[8px] text-center text-white"><span><img class="mx-auto" src="../assets/dot.svg" alt="Dot"></span><p class="font-thin pt-[4px]">Senior</p></div>
						<div class="basis-1/6 text-right text-white"><span><img class="float-right" src="../assets/dot.svg" alt="Dot"></span><p class="font-thin clear-right pt-[4px]">Lead</p></div>
					</div>
				</div>
			</div>
			<div class="mt-[88px]">
				<img class="mx-auto" src="../assets/high5.svg" alt="High Five">
				<h1 class="text-3xl mt-4 text-gray-700 font-normal text-center">Сверстаешь такой слайдер?</h1>
				<p class="text-[15px] tracking-wider mt-1 text-gray-700 mx-auto font-thin max-w-2xl text-center">Это не так сложно, на самом деле. Сложнее придумать как он будет адаптироваться. Различные модные эффекты так же будут оценены по достоинству.</p>
			</div>
		</div>
		<div class="container-lg mx-auto overflow-hidden">
			<div>
				<div class="slider mt-8 relative">
					<img class="absolute left-0 max-w-[555px] z-0" src="../assets/slider-bg.svg" alt="Slider BG">
					<div class="pt-[53px]">
						<Carousel />
					</div>
				</div>
			</div>
		</div>
		<div class="container px-[20px] xl:px-0 mx-auto">
			<div class="mt-[88px]">
				<img class="mx-auto" src="../assets/cool-emoij.svg" alt="Cool Image">
				<h1 class="text-3xl mt-4 text-gray-700 font-normal text-center">Время таблиц</h1>
				<p class="text-[15px] tracking-wider mt-3 text-gray-700 font-thin text-center mx-auto max-w-2xl">Какой серьезный проект может обойтись без таблиц? Мы не сомневаемся, что ты умеешь их верстать, попробуй реализовать такую таблицу.</p>
			</div>
			<div class="overflow-auto">
				<table class="w-full mt-5 text-sm text-left text-gray-500 border-[1px]">
					<thead class="text-xs text-gray-700 uppercase">
						<tr>
							<th></th>
							<th class="text-center py-5 px-8 w-[241px] border-[1px] bg-[#F2F8FF]">
								<img class="mx-auto h-[55px]" src="../assets/rocket-1.svg" alt="Rocket 1">
								<p class="text-[20px] normal-case text-[#405063] font-normal mt-3">Стандартный</p>
								<p class="normal-case text-[#818D9C] font-thin mt-3">Это самый стандартный тариф, который подойдет для новых пользователей</p>
							</th>
							<th class="text-center py-5 px-8 w-[241px] border-[1px] bg-[#F7F4FF]">
								<img class="mx-auto h-[55px]" src="../assets/rocket-2.svg" alt="Rocket 2">
								<p class="text-[20px] normal-case text-[#405063] font-normal mt-3">Оптимальный</p>
								<p class="normal-case text-[#818D9C] font-thin mt-3">Это самый стандартный тариф, который подойдет для новых пользователей</p>
							</th>
							<th class="text-center py-5 px-8 w-[241px] border-[1px] bg-[#FFF1F8]">
								<img class="mx-auto h-[55px]" src="../assets/rocket-3.svg" alt="Rocket 3">
								<p class="text-[20px] normal-case text-[#405063] font-normal mt-3">Премиум</p>
								<p class="normal-case text-[#818D9C] font-thin mt-3">Это самый стандартный тариф, который подойдет для новых пользователей</p>
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td class="font-light text-[15px] py-[14.5px] px-4 border-[1px]">Место на диске</td>
							<td class="font-light text-[15px] py-[14.5px] px-4 border-[1px] text-center bg-[#F2F8FF]">1 GB</td>
							<td class="font-light text-[15px] py-[14.5px] px-4 border-[1px] text-center bg-[#F7F4FF]">5 GB</td>
							<td class="font-light text-[15px] py-[14.5px] px-4 border-[1px] text-center bg-[#FFF1F8]">100 GB</td>
						</tr>
						<tr>
							<td class="font-light text-[15px] py-[14.5px] px-4 border-[1px]">Количество проектов</td>
							<td class="font-light text-[15px] py-[14.5px] px-4 border-[1px] text-center bg-[#F2F8FF]">1</td>
							<td class="font-light text-[15px] py-[14.5px] px-4 border-[1px] text-center bg-[#F7F4FF]">10</td>
							<td class="font-light text-[24px] py-[14.5px] px-4 border-[1px] text-center bg-[#FFF1F8]">∞</td>
						</tr>
						<tr>
							<td class="font-light text-[15px] py-[14.5px] px-4 border-[1px]">Пользователей в проекте</td>
							<td class="font-light text-[15px] py-[14.5px] px-4 border-[1px] text-center bg-[#F2F8FF]">2</td>
							<td class="font-light text-[15px] py-[14.5px] px-4 border-[1px] text-center bg-[#F7F4FF]">5</td>
							<td class="font-light text-[24px] py-[14.5px] px-4 border-[1px] text-center bg-[#FFF1F8]">∞</td>
						</tr>
						<tr>
							<td class="font-light text-[15px] py-[14.5px] px-4 border-[1px]">Интерактивное редактирование</td>
							<td class="font-light text-[15px] py-[14.5px] px-4 border-[1px] text-center bg-[#F2F8FF]">—</td>
							<td class="font-light text-[15px] py-[14.5px] px-4 border-[1px] text-center bg-[#F7F4FF]"><img src="../assets/tick.svg" alt="Check" class="mx-auto"></td>
							<td class="font-light text-[15px] py-[14.5px] px-4 border-[1px] text-center bg-[#FFF1F8]"><img src="../assets/tick2.svg" alt="Check" class="mx-auto"></td>
						</tr>
						<tr>
							<td class="font-light text-[15px] py-[14.5px] px-4 border-[1px]">Техническая поддержка (в сутки)</td>
							<td class="font-light text-[15px] py-[14.5px] px-4 border-[1px] text-center bg-[#F2F8FF]">1 час</td>
							<td class="font-light text-[15px] py-[14.5px] px-4 border-[1px] text-center bg-[#F7F4FF]">3 часа</td>
							<td class="font-light text-[15px] py-[14.5px] px-4 border-[1px] text-center bg-[#FFF1F8]">12 часов</td>
						</tr>
						<tr>
							<td class="font-light text-[15px] py-[14.5px] px-4 border-[1px]">Премиум ресурсы</td>
							<td class="font-light text-[15px] py-[14.5px] px-4 border-[1px] text-center bg-[#F2F8FF]">—</td>
							<td class="font-light text-[15px] py-[14.5px] px-4 border-[1px] text-center bg-[#F7F4FF]">—</td>
							<td class="font-light text-[15px] py-[14.5px] px-4 border-[1px] text-center bg-[#FFF1F8]"><img src="../assets/tick2.svg" alt="Check" class="mx-auto"></td>
						</tr>
						<tr>
							<td class="font-light text-[15px] py-[14.5px] px-4 border-[1px]">Отключение рекламы</td>
							<td class="font-light text-[15px] py-[14.5px] px-4 border-[1px] text-center bg-[#F2F8FF]">—</td>
							<td class="font-light text-[15px] py-[14.5px] px-4 border-[1px] text-center bg-[#F7F4FF]"><img src="../assets/tick.svg" alt="Check" class="mx-auto"></td>
							<td class="font-light text-[15px] py-[14.5px] px-4 border-[1px] text-center bg-[#FFF1F8]"><img src="../assets/tick2.svg" alt="Check" class="mx-auto"></td>
						</tr>
						<tr>
							<td class="font-light text-[15px] py-[14.5px] px-4 border-[1px]">Приложения для iOS и Android</td>
							<td class="font-light text-[15px] py-[14.5px] px-4 border-[1px] text-center bg-[#F2F8FF]">—</td>
							<td class="font-light text-[15px] py-[14.5px] px-4 border-[1px] text-center bg-[#F7F4FF]">—</td>
							<td class="font-light text-[15px] py-[14.5px] px-4 border-[1px] text-center bg-[#FFF1F8]"><img src="../assets/tick2.svg" alt="Check" class="mx-auto"></td>
						</tr>
					</tbody>
				</table>
			</div>
			<div class="my-[88px]">
				<img class="mx-auto" src="../assets/envelope.svg" alt="Cool Image">
				<h1 class="text-3xl mt-4 text-gray-700 font-normal text-center">Всё готово? Высылай нам!</h1>
				<p class="text-[15px] tracking-wider mt-3 text-gray-700 font-thin text-center mx-auto max-w-2xl">Когда всё будет готово, высылай архив с версткой или ссылку на облачный файл на нашу почту, указав тему письма “Тестовое задание для верстальщиков”.</p>
			</div>
		</div>
	</main>
</template>

<script>

import Carousel from "@/components/Carousel.vue";

export default {
    name: "HomeView",
    mounted() {
        for (let e of document.querySelectorAll("input[type=\"range\"]")) {
            e.style.setProperty("--value", e.value);
            e.style.setProperty("--min", e.min == "" ? "0" : e.min);
            e.style.setProperty("--max", e.max == "" ? "100" : e.max);
            e.addEventListener("input", () => e.style.setProperty("--value", e.value));
        }
    },
    components: { Carousel }
}
</script>

<style>
@media screen and (min-width: 768px){
	.radial-progress {
		--size:7.5rem !important;
	}
}
</style>