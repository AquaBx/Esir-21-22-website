<script lang="ts" setup>
type MenuItem = {
	title: string;
	route: string;
	class: string;
};

defineProps<{
	menuItems: MenuItem[];
}>();
</script>

<template>
	<container>
	<template v-for="item of menuItems">
		<a @click="$router.push(item.route)">
			<div><i :class="item.class"></i></div>
			<p>{{ item.title }}</p>
		</a>
	</template>
	</container>
</template>

<style scoped>

container{
	color : var(--text);

	display: grid;
	grid-auto-flow: row;

	background-color: var(--compl);
}

container > a {
	display: flex;
	align-items: center;
}

container > a > div {
	flex:20px;
	display: grid;
	place-items: center;
}

container > a > p {
	flex:auto;
}

container > a:hover *{
	border-color:var(--accent);
	color:var(--accent);
	fill: var(--accent);
}

@media screen and (max-width: 800px) {

	container {
		grid-auto-flow: column;
	}

	container > a > p {
		display: none;
	}

}

</style>