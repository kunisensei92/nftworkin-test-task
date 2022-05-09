<template>
	<NavBar />
	<router-view />
	<Footer />

</template>

<script>
import Footer from './components/Footer.vue'
import NavBar from "./components/NavBar.vue"

export default {
	components: {
    NavBar,
		Footer,
},
	setup () {
		

		return {}
	}
}
</script>

<style lang="scss">

#app {
	max-width: 1440px;
	margin: 0 auto;
}

@media screen and (min-width: 976px){
	#app {
		background-image: url("../src/assets/hero.svg");
		background-repeat: no-repeat;
		background-position: top -1.4rem right -0.75rem;
	}
}

.stack-list li::before {
  content: "\2022";  
  color: #489AFF; 
  font-weight: bold;
  display: inline-block; 
  width: 1em;
  margin-left: 0em; 
}

input[type=range] {
  --range: calc(var(--max) - var(--min));
  --ratio: calc((var(--value) - var(--min)) / var(--range));
  --sx: calc(0.5 * 1em + var(--ratio) * (100% - 1em));
}

input[type=range]::-moz-range-progress {
	-webkit-appearance: none;
	height: 0.4rem;
	background: linear-gradient(0.25turn, #BFA4FF,#FF4F72, #FFC359) no-repeat !important;
	border-radius: 0.5em;
}

input[type=range]::-webkit-slider-runnable-track {
	-moz-appearance: none;
  background: linear-gradient(0.25turn, #BFA4FF,#FF4F72, #FFC359) 0/var(--sx) 0.4rem no-repeat;
	border-radius: 0.5rem;
}

input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  background-color: #fff !important;

}

input[type=range]::-moz-range-thumb { 
  -moz-appearance: none;
  background-color: #fff !important;
}

.radial-progress {
	-webkit-box-shadow:inset 0px 0px 0px 5px #283C54;
	-moz-box-shadow:inset 0px 0px 0px 5px #283C54;
	box-shadow:inset 0px 0px 0px 5px #283C54;
}

</style>