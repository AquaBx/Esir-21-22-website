<script>
    import Convert from "$lib/Convert.svelte";
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
    <Convert/>
</div>

<svelte:head>
    <title>Cours ESIR</title>
    <meta name="description" content="Site de cours pour L'Esir">
</svelte:head>