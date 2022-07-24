<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import FileContent from '@/components/Main/FileContent.vue';

const path = ref("");

onMounted(async () => {
    path.value = '/README.md'
})

</script>

<template>
    <FileContent :path="path" />
</template>

<style scoped>
</style>