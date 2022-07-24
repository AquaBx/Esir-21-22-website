<script lang="ts" setup>
import usePath from "@/commposable/PathComposable";

const path = usePath();

function share() {
	window.navigator.share({
		title: document.title,
		url: document.location.toString(),
	});
}
</script>

<template>
	<div class="topbar">
		<div @click="path.path.pop()" class="button">
			<i class="gg-chevron-left"></i>
		</div>
		<template v-for="part of path.path">
			<!-- préparer le chemin pour pouvoir clicker sur un élément ? -->
			<!-- @click="/* get the path to go to */" -->
			<!-- <span>{{ part }}</span> -->
		</template>
		<p>{{ path.getFullPath() }}</p>
		<div onclick="window.print()" class="button">
			<i class="gg-printer"></i>
		</div>
		<div @click="share()" class="button">
			<i class="gg-share"></i>
		</div>
	</div>
</template>

<style scoped>
.gg-share {
	transform: translate(-100%);
}
.topbar {
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 40px;
	margin-bottom: 20px;
}

.button {
	display: grid;
	place-items: center;
	aspect-ratio: 1/1;
	height: 100%;
	border-radius: 999px;
	border: 3px solid transparent;
	transition: 0.5s;
}

.button:hover {
	border: 3px solid var(--text);
}
</style>
