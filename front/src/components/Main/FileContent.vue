<script lang="ts" setup>
import { ref, onUpdated } from 'vue';
import { marked } from 'marked';

import GithubService from '@/services/GithubService';

const props = defineProps<{
    path: string,
}>();

const content = ref('');

onUpdated(async () => {
    if(props.path !== '') {
        let raw = await GithubService.getFileContent(props.path);
        content.value = marked.parse(raw);
    }
});
</script>

<template>
    <main v-html="content">
    </main>
</template>

<style scoped>
main {
    display: block;
    width: 100%;
    height: 100%;
    left: 0px;
    flex:auto;
}
</style>