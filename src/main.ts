import { createApp } from 'vue';
import router from './router/index';
import App from './App.vue';
import useGithub from '@/composable/GithubComposable';

(async() => {
	
	await useGithub().load;



	const app = createApp(App);

	app.use(router);
	app.mount('#app');

	const appResize = () => {
		document.documentElement.style.setProperty(
			'--vh',
			`${window.innerHeight}px`
		);
	};

	window.addEventListener('resize', appResize);

	appResize();

	let css = [
		'https://cdn.jsdelivr.net/npm/katex/dist/katex.min.css',
		'https://fonts.googleapis.com/css2?family=Poppins&family=Ubuntu+Mono&display=swap',
		'https://css.gg/all.css',
	];

	for (let item of css) {
		let lib = document.createElement('link');
		lib.href = item;
		lib.setAttribute('rel', 'stylesheet');
		document.querySelector('head')?.appendChild(lib);
	}
	
	function sleep(ms: number) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	let a = document.querySelector('#loader') as any;
	if (a) {
		a.style.opacity = '0';
		await sleep(1000);
		a.style.display = 'none';
	}
})()