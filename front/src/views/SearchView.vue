<script lang="ts" setup>
import { ref, getCurrentInstance } from 'vue';
import TreeHierarchyService from '@/services/TreeHierarchyService';
import NavigationTree from '@/components/Navigation/NavigationTree.vue';
import FileContent from '@/components/Main/FileContent.vue';


const currentFile = ref('');

function changeFile(test: string) {
    currentFile.value = test;
}

</script>

<template>
    <div id="flexcontent">
        <NavigationTree @selected-file="changeFile" :root="TreeHierarchyService.fetch()" :path="getCurrentInstance()?.appContext.config.globalProperties.currentPath ?? []" />
        <FileContent :url="currentFile" />
    </div>
</template>

<style scoped>
#flexcontent {
    display: flex;
}

</style>
