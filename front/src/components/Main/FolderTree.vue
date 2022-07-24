<script lang="ts" setup>
import { ref } from 'vue';
import { Tree } from '@/types/Tree';
import router from '@/router';
import usePath from '@/commposable/PathComposable';

const path = usePath();

const props = defineProps<{
    root: Tree.TreeNode,
}>();

const currentNode = ref<Tree.TreeNode>(Tree.getNodeFromPath(props.root, path.path));

function pushChild(child: Tree.TreeNode): void {
    if(child.kind === Tree.NodeKind.File) {
        console.info(`#${path.getFullPath()}/${child.data.name}`);
        router.push({
            path: '/viewer',
            query: {
                folder: path.getFullPath(),
                file: child.data.name + '.md',
            }
        });
        return;
    }
    path.path.push(child.data.name);
    currentNode.value = Tree.getNodeFromPath(props.root, path.path);
}

function getIcon(kind: Tree.NodeKind): string {
    return (kind === Tree.NodeKind.Folder) ? 'gg-folder' : 'gg-file';
}

function getCategory(kind: Tree.NodeKind): string {
    return (kind === Tree.NodeKind.Folder) ? 'folder' : 'file';
}
</script>

<template>
    <main class="folder-grid">
        <template v-for="child in currentNode.children">
            <div @click="pushChild(child)" :class="getCategory(child.kind)">
                <i :class="getIcon(child.kind)"></i>
                <p class="node-text">{{ child.data.name }}</p>
            </div>
        </template>
    </main>
</template>

<style scoped>

.return {
    display: grid;
    place-items: center;
    height:50px;
    width:50px;

}

.node-text{
    margin:0;
    text-overflow: ellipsis;
    overflow:hidden;
    max-width:100%;
}

.folder-grid {
    display: grid;
    grid-gap: 20px;
    grid-auto-rows: minmax(100px, 100px);

    grid-template-columns: repeat(5, calc( ( 100% - 4 * 20px ) / 5 ));

    overflow: auto;
    height: 100%;
}

.folder,.file {
    border-radius: 1.5rem;
    padding: 12px;
    display: grid;
    place-items: center;
    transition: 0.3s;
}

.folder{
    border: solid 3px var(--blue);
}
.file {
    border: solid 3px var(--green);
}

.file:hover {
    background-color:var(--green);
}

.folder:hover {
    background-color:var(--blue);
}

.folder:hover * , .file:hover * {
    color:var(--text-reverse) !important;
}

@media screen and (max-width:1000px) {
    .folder-grid{
        grid-template-columns: repeat(3, calc( ( 100% - 2 * 20px ) / 3 ));
    }
}


@media screen and (max-width:500px) {
    .folder-grid{
        grid-template-columns: repeat(1, 100%);
    }
}

</style>
