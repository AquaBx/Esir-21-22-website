<svelte:head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.15.3/dist/katex.css" crossorigin="anonymous">
    <link href="/prism.css" rel="stylesheet" />
    <script src="/prism.js"></script>
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

    function code (text){
        let lang = text.split("\n")[0]
        let code = text.split("\n").slice(1).join("\n")

        return "<pre class='language-" + lang + "'>" + code + "</pre>"
    }

    function page(text){
        html = ""
        let splited = text.split("$$")

        for (let i in splited) {
            let content = splited[i]
            if (i%2 == 0) {
                let splited2 = content.split("```")
                for (let j in splited) {
                    let content2 = splited2[i]
                    if (j%2 == 0) {
                        html += marked(content2).replaceAll("---",'<hr dir="auto">')
                    }
                    else{
                        html += code(content2)
                    }
                }
            }
            else {
                html += katex.renderToString(content, options);
            }
        }
    }

</script>

<div id="iframe_content">
    {@html html}
</div>
