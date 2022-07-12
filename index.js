let path
let sidebar_state = true
let url

function edit() {
    window.open("https://github.dev/Cours-ESIR/Cours/" + url,"_blank")
}

function switch_menu() {
    let sidebar = document.querySelector("#sidebar")
    if (sidebar_state) {
        sidebar.style.transform = "translateY( calc(-50vh - 68px - 16px * 2 ) ) translateX(-50%)"
        sidebar_state = false
    } else {
        sidebar.style.transform = "translateY(0%) translateX(-50%)"
        sidebar_state = true
    }
}

switch_menu()
document.querySelector("#sidebar_button").onclick = () => { switch_menu() }

function share() {
    window.navigator.share({
    title: document.title,
    url: url
});
}

function retour() {
    document.location.hash = path.split("/").slice(0,-1).join("/")
}

async function load_file(file) {
    let req = await fetch("https://raw.githubusercontent.com/Cours-ESIR/Cours/main" + path + "/" + file)
    let data = await req.text()
    document.querySelector("#cours").innerHTML = page(data)
}

async function update_sidebar() {    
    document.querySelector("#sidebar #links").innerHTML = ""  
    let api = await fetch("https://api.github.com/repos/Cours-ESIR/Cours/contents" + path)
    let data = await api.json()
    
    let already_added = []

    for ( let item of data){
        let name =  item.name

        if ( name.toUpperCase() == "README.MD" ){
    url = location.origin + "#" + path
    document.title = "ESIR - Cours | " + path
            load_file(name)
            continue
        }

        let a = document.createElement("a")
        a.href = "#" + path + "/" + name
        a.innerText = name

        document.querySelector("#sidebar #links").appendChild(a)

        already_added.push( a.innerText )
    }
}

window.onhashchange = load

function load() {
    let hash = decodeURI(document.location.hash.substring(1))

    path = hash

    if ( hash.split(".md").length == 2 ) {
        let filename = path.split("/").slice(-1)[0]
        path = path.split("/").slice(0,-1).join("/")
        url = location.origin + "#" + path + "/" + filename
        document.title = "ESIR - Cours | " + filename
        load_file(filename)
    }
    
    update_sidebar()
}

/** Calculate all the Years possible in the form for #year-select */
let select = document.querySelector("#year-select")
let now = new Date()
let current_year = now.getMonth() >= 6 ? now.getFullYear() -1 : now.getFullYear()
for(let period = current_year; period >= current_year - 15; period--) {
    let option = document.createElement("option")
    option.value = period
    option.innerText = `${period}-${period + 1}`
    select.appendChild(option)
}
