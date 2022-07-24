export namespace Tree {

    export enum NodeKind { File, Folder };


    export interface TreeNode {
        data: {
            name: string;
            url?: string;
        };
        kind: NodeKind;
        children?: TreeNode[];
    };

    export function getNodeFromPath(root: TreeNode, relPath: string[]): TreeNode {
        let node: TreeNode|undefined = root;
        for (let part of relPath) {
            node = node?.children?.find(n => n.data.name == part);
        }
        return node ?? root;
    }
}
