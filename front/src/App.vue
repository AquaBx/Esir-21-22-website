<script lang="ts" setup>
import { ref } from 'vue';
import Menu from '@/components/Navigation/Menu.vue';
import Topbar from '@/components/Header/Topbar.vue';
import type { RouteRecordName } from 'vue-router';

const items = ref([
	{
		title: 'Accueil',
		route: '/',
		class: 'gg-home'
	},
	{
		title: 'Cours',
		route: '/lessons',
		class: 'gg-briefcase'
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

function isRequired(routeName: string|RouteRecordName|null|undefined): boolean {
	if(typeof routeName !== 'string') {
		return false;
	}
	let menus = ['lessons', 'edit', 'viewer'];
	return menus.includes(routeName);
}
</script>

<template>
	<div id="content">
		<Topbar id="topbar" v-if="isRequired($route.name)" class="no-print" />
		<RouterView id="router" />
	</div>
	<Menu class="no-print" id="menu" :menu-items="items"></Menu>
	
</template>

<style>

@import "style/main.css";

#app {
  	display: flex;
	flex-direction: row-reverse;
	width:100vw;
	height:100vh;
}

#rooter{
	overflow:auto;
}

#content {
  	flex: auto;
	padding:20px;
}

#menu {
  	min-width: 200px;
	float:left;
}

@media screen and (max-width: 1200px) {
	#app {
		flex-direction: column;
	}

  	#menu {
		width:unset;
		height: 80px;
  	}
}

</style>