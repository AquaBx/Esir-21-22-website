<script>
    import Header from "$lib/Header.svelte"
    let matieres ={}
    let base_url = "https://raw.githubusercontent.com/Astri2/CoursKatex/main/"
    fetch(base_url+"cours.json").then(response => {
		return response.json()
    }).then(response => {
		matieres = response 
    })
     
</script>
<script type="module" src="https://unpkg.com/x-frame-bypass"></script>

<div class="flex bg-[#ebebeb]">
    <div class="shadow h-[100vh] block" id="menu">
        {#key matieres}
            <Header base_url={base_url}  menu={matieres}></Header>
        {/key}
    </div>
    <iframe is="x-frame-bypass" id="iframe_cours" class="w-[100%]"></iframe>

</div>

<svelte:head>
    <title>Tom Chauvel</title>
    <meta name="description" content="Site de cours pour L'Esir">
</svelte:head>
