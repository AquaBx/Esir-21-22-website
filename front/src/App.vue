<script lang="ts" setup>
import { ref } from 'vue';
import { RouterView } from 'vue-router'
import Menu from '@/components/Navigation/Menu.vue';

let items = ref([
	{
		title: 'Accueil',
		route: '/',
		class: 'gg-home'
	},
	{
		title: 'Recherche',
		route: '/search',
		class: 'gg-search'
	},
	{
		title: 'Modification',
		route: '/edit',
		class: 'gg-pen'
	},
	{
		title: 'Informations',
		route: '/about',
		class: 'gg-info'
	}
]);

</script>

<template>
  <RouterView id="router" />
  <Menu id="menu" :menu-items="items"></Menu>
</template>

<style>

@import "style/main.css";

#app {
  	display: flex;
	flex-direction: row-reverse
}

#router {
  	flex: auto;
  	height: 100vh;
}

#menu {
  	width: 250px;
  	height: 100vh;
	float:left;
}

@media screen and (max-width: 800px) {
	#app {
  		display: block;
	}

  	#router {
    	width: 100vw;
    	height: calc(100vh - 70px);
	}

  	#menu {
    	width: 100vw;
		height: 70px;
  	}
}

</style>