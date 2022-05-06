<script>
    import Header from "$lib/Header.svelte"
    let matieres = {}
    let base_url = "https://raw.githubusercontent.com/Astri2/CoursKatex/main/"
    
    fetch(base_url+"cours.json").then(response => {
		return response.json()
    }).then(response => {
		matieres = response 
    })



</script>

<div class="flex">
    {#key matieres}
        <Header base_url={base_url} menu={matieres}></Header>
    {/key}
    <div id="iframe_content">
    </div>
</div>

<svelte:head>
    <title>Tom Chauvel</title>
    <meta name="description" content="Site de cours pour L'Esir">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/4.0.0/github-markdown.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release/build/styles/default.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex/dist/katex.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/markdown-it-texmath/css/texmath.min.css">
</svelte:head>