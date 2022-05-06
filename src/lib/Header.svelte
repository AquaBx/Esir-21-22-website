<script>
    import Header from "$lib/Header.svelte"
    export let menu
    export let path = [menu] 
    export let i = 0

    export let base_url

    function hide(e){
        let display = e.target.parentNode.querySelectorAll("ul")

        if (display.length == 0) return

        display = display[0]

        if ( display.style.display == "none"){
            display.style.display = "block"
        }
        else {
            display.style.display = "none"
        }
    } 
    function change_cours(e){
        document.querySelector("#iframe_cours").src = base_url + e
    }

    function change_menu(e){
        i+=1
        path[i] = e
        if (e.index){
            document.querySelector("#iframe_cours").src = base_url + e.index
        }
    }

    function retour(){
        delete path[i]
        i-=1
    }

</script>
{#key path}
<div class="transition">
    {#if i > 0}
        <a class="p-5 block hover:bg-[#F7AE50] transition" on:click={retour}>
            <img class="inline-block align-bottom" src="/svg/arrow.svg">
            Retour
        
        </a>
    {/if}
    <ul class="w-48" >
        { #each Object.keys(path[i]) as categorie }
            {#if categorie == "links"}
                { #each Object.keys(path[i][categorie]) as chapitre }
                    <li class="p-5 hover:bg-[#F7AE50] transition" on:click={change_cours(path[i][categorie][chapitre])}>{chapitre}</li>
                {/each}
            {:else if categorie == "categories"}
                { #each Object.keys(path[i][categorie]) as chapitre }
                    <li class="p-5 hover:bg-[#F7AE50] transition" on:click={change_menu(path[i][categorie][chapitre])}>{chapitre}</li>
                {/each}
            {/if}
        { /each }
    </ul>
</div>
{/key}
