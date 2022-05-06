<script>
    import Header from "$lib/Header.svelte"
    let matieres ={}

    fetch("https://raw.githubusercontent.com/Astri2/CoursKatex/main/cours.json").then(response => {
		return response.json()
    }).then(response => {
		matieres = response 
    })
     
</script>
<div class="flex bg-[#ebebeb]">
    <div class="shadow h-[100vh] block" id="menu">
        {#key matieres}
            <Header  menu={matieres}></Header>
        {/key}
    </div>
    <iframe id="iframe_cours" class="w-[100%]"></iframe>

</div>

<svelte:head>
    <title>Tom Chauvel</title>
    <meta name="description" content="Site de cours pour L'Esir">

</svelte:head>
