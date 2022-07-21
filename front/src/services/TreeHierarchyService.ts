import { Tree } from '@/types/Tree';

export default class TreeHierarchyService
{
    public static fetch(): Tree.TreeNode {
        return {
            kind: Tree.NodeKind.Folder,
            data: {
                name: 'root',
            },
            children: [
                {
                    kind: Tree.NodeKind.Folder,
                    data: {
                        name: 'CUPGE 1'
                    },
                    children: [
                        {
                            kind: Tree.NodeKind.File,
                            data: {
                                name: 'index',
                                url: 'https://raw.githubusercontent.com/Cours-ESIR/Cours/main/Pr%C3%A9pa%20L1/2021-2022/Info/uno.md'
                            }
                        },
                    ]
                },
                {
                    kind: Tree.NodeKind.Folder,
                    data: {
                        name: 'CUPGE 2'
                    },
                },
                {
                    kind: Tree.NodeKind.Folder,
                    data: {
                        name: 'ESIR 1'
                    },
                },
                {
                    kind: Tree.NodeKind.Folder,
                    data: {
                        name: 'ESIR 2'
                    },
                },
                {
                    kind: Tree.NodeKind.Folder,
                    data: {
                        name: 'ESIR 3'
                    },
                },
            ],
        };
    }
}