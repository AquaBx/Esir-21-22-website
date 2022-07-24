<script lang="ts" setup>
import TreeHierarchyService from '@/services/TreeHierarchyService';
import FolderTree from '@/components/Main/FolderTree.vue';
import usePath from '@/commposable/PathComposable';
const path = usePath();
</script>

<template>
        <FolderTree :key="path.getFullPath()" :root="TreeHierarchyService.fetch()" />
</template>

<style scoped>
</style>
