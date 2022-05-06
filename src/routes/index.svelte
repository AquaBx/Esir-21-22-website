<script>
    import Header from "$lib/Header.svelte"

    let matieres = {
        "categories": {
            "Prépa 1":{
                "index":"",
                "categories":{
                    "Physique":{
                        "index":"",
                        "categories":{
                        },
                        "links":{}
                    },
                    "Numérique":{
                        "index":"",
                        "categories":{},
                        "links":{}
                    },
                    "Mathématiques":{
                        "index":"",
                        "categories":{},
                        "links":{
                            "Chapitre 1":"https://raw.githubusercontent.com/Astri2/CoursKatex/main/html/MathsS2-ExoInt.html"
                        }
                    }
                }
            }
        }        
    }
</script>
<div class="flex bg-[#ebebeb]">
    <div class="shadow h-[100vh] block" id="menu">
        <Header  menu={matieres}></Header>
    </div>
    <iframe id="iframe_cours" class="w-[100%]"></iframe>


</div>

<svelte:head>
    <title>Tom Chauvel</title>
    <meta name="description" content="Site de Tom Chauvel / AquaBx, étudiant à l'ESIR à Rennes.">

</svelte:head>