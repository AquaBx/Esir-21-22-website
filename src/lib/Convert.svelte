<svelte:head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.15.3/dist/katex.css" crossorigin="anonymous">
    <script src="/prism.js"></script>
    <link href="/prism.css" rel="stylesheet" />
</svelte:head>

<script>
    import katex from "katex";
    import marked from "snarkdown";
    import { md } from '$lib/stores.js';

    const options = {
        displayMode: true,
        throwOnError: false,
        macros: {
            "\\(": "\\lparen",
            "\\)": "\\rparen",
            "\\{": "\\lbrace",
            "\\}": "\\rbrace",
            "\\[": "\\lbrack",
            "\\]": "\\rbrack",

            "\\n": "\\\\ \\ \\\\",
            "\\vec": "\\overrightarrow{#1}",
            "\\embrace": "\\left#2\\begin{split} #1 \\end{split}\\right#3",
            "\\aembrace": "\\embrace{#1}{\\{}{\\}}",
            "\\pembrace": "\\embrace{#1}{\\(}{\\)}",
            "\\cembrace": "\\embrace{#1}{\\[}{\\]}"
        }
    }

    let html = ""

    md.subscribe(value => {
        get(value)
    });

    function get(url) {
        if (url !== "" && url !== undefined) {
            fetch(url).then( response => {
                return response.text()
            }).then( response => {
                page(response)
                return
            })
        }
    }

    function code(text){
        let lang = text.split("\r\n")[0]
        let code = text.split("\r\n").slice(1).join("\r\n")

        return "<pre class='language-"+lang+"'>" + Prism.highlight(code, Prism.languages[lang], lang) + "</pre>"
    }

    function math(text){
        return katex.renderToString(text, options)
    }

    function allindexof(caracters, text) {
        let indices = [];
        let last;
        while (last != -1) {
            last = text.indexOf(caracters, (last + 1));
            if (last != -1) {
                indices.push(last);
            }
        }
        return indices;
    }

    function dico_add(text,char,dico,indices,func) {
        let codechar = allindexof(char,text).reverse()

        let t = char.length

        for ( let i in codechar) {
            if (i%2 == 0) {codechar[i] +=t; continue;}

            let y0 = codechar[i]
            let y1 = codechar[i-1]

            let content = text.substring(y0+t, y1-t)
            dico[y0] = func(content)
        }

        return indices.concat(codechar)
    }

    function page(text){
        let dico = {}
        let indices = []

        indices = dico_add(text,"$$",dico,indices,math)
        indices = dico_add(text,"```",dico,indices,code)

        let mark = indices

        for ( let i in mark ) {
            let limit = mark.length-1
            if (i%2 == 1 && i!=limit) continue;

            let y0 = mark[i]
            let y1 = mark[i-1]
            let content

            if (y1 == undefined) {
                content = text.substring(y0)
            }
            else if (i == limit) {
                content = text.substring(0, y0)
                
            }
            else{
                content = text.substring(y0, y1)
            }
            dico[y0] = marked(content).replaceAll("---","<hr dir='auto'/>")
        }

        html = ""

        for ( let i in dico) {
            html += dico[i]
        }
    }
</script>

<div id="iframe_content">
    {@html html}
</div>
