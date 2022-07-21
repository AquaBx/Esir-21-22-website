<script lang="ts" setup>
import { ref, onUpdated } from 'vue';
import { marked } from 'marked';

const props = defineProps<{
    url: string,
}>();

const content = ref('');

onUpdated(() => {
    if(props.url !== '') {
        fetch(props.url).then(response => response.text()).then((text) => {
            content.value = marked.parse(text);
        });
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