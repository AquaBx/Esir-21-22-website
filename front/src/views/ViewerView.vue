<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import FileContent from '@/components/Main/FileContent.vue';

const file_name = ref("");
const folder_path = ref("");

onMounted(async () => {
    let url = new URLSearchParams(window.location.search);
    let folder = url.get('folder');
    let file = url.get('file');
    if(file === null || folder === null) return;
    folder_path.value = folder;
    file_name.value = file;
})

</script>

<template>
    <FileContent :path="folder_path + '/' + file_name" />
</template>

<style scoped>
</style>