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
                        name: 'Prépa L1'
                    },
                    children: [
                        {
                            kind: Tree.NodeKind.Folder,
                            data: {
                                name: '2021-2022'
                            },
                            children: [
                                {
                                    kind: Tree.NodeKind.Folder,
                                    data: {
                                        name: 'Info'
                                    },
                                    children: [
                                        {
                                            kind: Tree.NodeKind.File,
                                            data: {
                                                name: 'python - boucles',
                                                url: 'https://raw.githubusercontent.com/Cours-ESIR/Cours/main/Pr%C3%A9pa%20L1/2021-2022/Info/python%20-%20boucles.md'
                                            }
                                        },
                                        {
                                            kind: Tree.NodeKind.File,
                                            data: {
                                                name: 'uno',
                                                url: 'https://raw.githubusercontent.com/Cours-ESIR/Cours/main/Pr%C3%A9pa%20L1/2021-2022/Info/uno.md'
                                            }
                                        }
                                    ]
                                },
                                {
                                    kind: Tree.NodeKind.Folder,
                                    data: {
                                        name: 'MathsS2'
                                    },
                                    children: [
                                        {
                                            kind: Tree.NodeKind.File,
                                            data: {
                                                name: '06-05-22',
                                                url: 'https://raw.githubusercontent.com/Cours-ESIR/Cours/main/Pr%C3%A9pa%20L1/2021-2022/MathsS2/06-05-22.md'
                                            }
                                        },
                                        {
                                            kind: Tree.NodeKind.File,
                                            data: {
                                                name: 'Ex-Int-Impropre',
                                                url: 'https://raw.githubusercontent.com/Cours-ESIR/Cours/main/Pr%C3%A9pa%20L1/2021-2022/MathsS2/Ex-Int-Impropre.md'
                                            }
                                        },
                                        {
                                            kind: Tree.NodeKind.File,
                                            data: {
                                                name: 'ExoInt_TD4',
                                                url: 'https://raw.githubusercontent.com/Cours-ESIR/Cours/main/Pr%C3%A9pa%20L1/2021-2022/MathsS2/ExoInt_TD4.md'
                                            }
                                        },
                                        {
                                            kind: Tree.NodeKind.File,
                                            data: {
                                                name: 'Int-Impropres',
                                                url: 'https://raw.githubusercontent.com/Cours-ESIR/Cours/main/Pr%C3%A9pa%20L1/2021-2022/MathsS2/Int-Impropres.md'
                                            }
                                        },
                                        {
                                            kind: Tree.NodeKind.File,
                                            data: {
                                                name: 'IntCurvi',
                                                url: 'https://raw.githubusercontent.com/Cours-ESIR/Cours/main/Pr%C3%A9pa%20L1/2021-2022/MathsS2/IntCurvi.md'
                                            }
                                        },
                                        {
                                            kind: Tree.NodeKind.File,
                                            data: {
                                                name: 'MathsS2_',
                                                url: 'https://raw.githubusercontent.com/Cours-ESIR/Cours/main/Pr%C3%A9pa%20L1/2021-2022/MathsS2/MathsS2_.md'
                                            }
                                        },
                                        {
                                            kind: Tree.NodeKind.File,
                                            data: {
                                                name: 'Suites_et_Séries_numériques',
                                                url: 'https://raw.githubusercontent.com/Cours-ESIR/Cours/main/Pr%C3%A9pa%20L1/2021-2022/MathsS2/Suites_et_Series_numeriques.md'
                                            }
                                        },
                                        {
                                            kind: Tree.NodeKind.File,
                                            data: {
                                                name: 'ThmOstrogradsky',
                                                url: 'https://raw.githubusercontent.com/Cours-ESIR/Cours/main/Pr%C3%A9pa%20L1/2021-2022/MathsS2/ThmOstrogradsky.md'
                                            }
                                        },
                                        {
                                            kind: Tree.NodeKind.File,
                                            data: {
                                                name: 'onrefaitlecoursapreslecours',
                                                url: 'https://raw.githubusercontent.com/Cours-ESIR/Cours/main/Pr%C3%A9pa%20L1/2021-2022/MathsS2/onrefaitlecoursapreslecours.md'
                                            }
                                        },
                                        {
                                            kind: Tree.NodeKind.File,
                                            data: {
                                                name: 'rev',
                                                url: 'https://raw.githubusercontent.com/Cours-ESIR/Cours/main/Pr%C3%A9pa%20L1/2021-2022/MathsS2/rev.md'
                                            }
                                        }
                                    ]
                                }
                            ]
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