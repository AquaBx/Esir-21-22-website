<script>
    export let menu
    export let path = [menu] 
    export let i = 0
    export let base_url

    export let transition_direction = 0

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
        let url = base_url + e
        let content = document.querySelector("#iframe_content")
        fetch(url).then(response => {return response.text()}).then(response => {content.innerHTML = response })
    }

    function change_menu(e){
        i+=1
        path[i] = e
        if (e.index){
            let url = base_url + e
            let content = document.querySelector("#iframe_content")
            fetch(url).then(response => {return response.text()}).then(response => {content.innerHTML = response })
        }
        transition_direction = 200
    }
    let display = "none"
    let on = true
    function reduce(){
        if (on) {
            display = "block"
            document.querySelector("#menu-logo").style.display = "none"
        }
        else{
            display = "none"
            document.querySelector("#menu-logo").style.display = "block"
        }
        on = !on
    }

    function retour(){       
        path[i] = ""
        i-=1
        transition_direction = -200
    }

    import { fade, fly } from 'svelte/transition';
</script>
<div>
    <p id="menu-logo" class="p-5 fixed hover:bg-[#F7AE50] transition select-none cursor-pointer" on:click={reduce}>
        <img alt="" class="inline-block align-bottom" src="/svg/menu.svg">
    </p>

    {#key path}

    <div id="menu" class="shadow h-[100%] fixed w-48" style="display:{display}">
        <div class="flex justify-between">
            {#if i > 0}
            <div class="p-5 hover:bg-[#F7AE50] transition select-none cursor-pointer inline-block" on:click={retour}>
                <img alt="" class="inline-block align-bottom" src="/svg/arrow.svg">Retour
            </div>
            {/if}
            <div id="menu-logo" class="p-5 hover:bg-[#F7AE50] transition select-none cursor-pointer inline-block" on:click={reduce}>
                <img alt="" class="inline-block align-bottom" src="/svg/close.svg">
            </div>
        </div>
        <ul in:fly="{{ x: transition_direction, duration: 500, opacity:-1 }}">
            { #each Object.keys(path[i]) as categorie }
                {#if categorie == "links"}
                    { #each Object.keys(path[i][categorie]) as chapitre }
                        <li class="p-5 hover:bg-[#F7AE50] transition select-none cursor-pointer" on:click={change_cours(path[i][categorie][chapitre])}>{chapitre}</li>
                    {/each}
                {:else if categorie == "categories"}
                    { #each Object.keys(path[i][categorie]) as chapitre }
                        <li class="p-5 hover:bg-[#F7AE50] transition select-none cursor-pointer" on:click={change_menu(path[i][categorie][chapitre])}>{chapitre}</li>
                    {/each}
                {/if}
            { /each }
        </ul>
    </div>
    {/key}
</div>