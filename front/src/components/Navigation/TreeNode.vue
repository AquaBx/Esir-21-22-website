<script lang="ts" setup>
import { Tree } from '@/types/Tree';

let props = defineProps<{
    data: Tree.File|Tree.Folder,
    kind: Tree.NodeKind,
    path: string[],
    children?: Tree.TreeNode[],
}>();

function isFolder(): boolean {
    return props.kind === Tree.NodeKind.Folder;
}
</script>

<template>
    <template v-if="isFolder()">
        <div>{{ props.data.name }}</div>
    </template>
    <template v-else>
        <div @click="">{{ props.data.name }}</div>
    </template>
</template>

<style>
TreeNode {
    display: block;
    position: relative;
    padding: 0.5em;
    margin: 0;
    border: 1px solid #ccc;
    background-color: #f5f5f5;
    cursor: pointer;
}
</style>
