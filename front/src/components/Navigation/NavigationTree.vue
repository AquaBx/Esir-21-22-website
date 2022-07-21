<script lang="ts" setup>
import { ref, getCurrentInstance } from 'vue';
import { Tree } from '@/types/Tree';
import TreeNode from '@/components/Navigation/TreeNode.vue';

const props = defineProps<{
    root: Tree.TreeNode,
    path: string[]
}>();

const emit = defineEmits<{
    (e: 'selected-file', url: string): void
}>();

let globals = getCurrentInstance()?.appContext.config.globalProperties ?? { currentPath: ['root'] };
const currentNode = ref<Tree.TreeNode>(Tree.getNodeFromPath(props.root, globals.currentPath));

function getChildPath(path: string[], childName: string): string[] {
    return [...path, childName];
}

function pushChild(child: Tree.TreeNode): void {
    if(child.kind === Tree.NodeKind.File) {
        emit('selected-file', child.data.url);
        return;
    }
    globals.currentPath = [...globals.currentPath, child.data.name];
    currentNode.value = Tree.getNodeFromPath(props.root, globals.currentPath);
}

function popChild(): void {
    globals.currentPath.pop();
    currentNode.value = Tree.getNodeFromPath(props.root, globals.currentPath);
}
</script>

<template>
    <nav>
        <template v-if="currentNode.data.name != 'root'">
            <div @click="popChild()">Retour</div>
        </template>
        <template v-for="child in currentNode.children">
            <div @click="pushChild(child)">
                <TreeNode :data="child.data" :kind="child.kind" :path="getChildPath(props.path, child.data.name)" :children="child.children" />
            </div>
        </template>
    </nav>
</template>

<style scoped>
nav {
    display: block;
    width: 100%;
    height: 100%;
    right: 0px;
    flex:300px;
}

nav > div {
    display: block;
    border: 1px solid black;
    cursor: pointer;
}
</style>
