import {PetService} from './services/pet-service'

window.onload = () => {
    createPageElements()
    $('.navbar-brand').click(function () {
        $('#main-content').fadeIn(800)
    })
    $('.search-container').hide()
    $('#doggo').click(function () {

        $('.search-container').show()
        $('.cat-search').hide()
        $('.doggo-search').show()
        $('.pet-list-container').addClass('promenio').removeClass('pet-list-container');
    })
    $('#meow').click(function () {
        $('.doggo-search').hide()
        $('.search-container').show();
        $('.cat-search').show()
        $('.pet-list-container').addClass('promenio').removeClass('pet-list-container');
    })

    PetService.getDataFromApi()
        .subscribe(res=>{
            res.forEach(element => {
                createPetView(element)
            });
        })
    
}

function createPageElements() {
    // main div
    let main = document.createElement('div')
    main.className = 'main-content'
    document.body.appendChild(main)

    headerArea(main)
    searchContainer(main)
    petList(main)
}
function headerArea(node) {
    let header = document.createElement('div')
    header.className = 'header-area'
    node.appendChild(header)

    let nav = document.createElement('nav')
    nav.className = 'app-nav'
    header.appendChild(nav)

    let ul = document.createElement('ul')
    nav.appendChild(ul)

    let li1 = document.createElement('li')
    ul.appendChild(li1)

    let label1 = document.createElement('label')
    label1.id = 'doggo'
    label1.textContent = 'Find A Dog'
    li1.appendChild(label1)

    let li2 = document.createElement('li')
    ul.appendChild(li2)

    let label2 = document.createElement('label')
    label2.id = 'cat'
    label2.textContent = 'Find A Cat'
    li2.appendChild(label2)

    let li3 = document.createElement('li')
    ul.appendChild(li3)

    let label3 = document.createElement('label')
    label3.id = 'other'
    label3.textContent = 'Other Pets'
    li3.appendChild(label3)

    let social = document.createElement('div')
    social.className = 'social-container'
    header.appendChild(social)

    let a1 = document.createElement('a')
    social.appendChild(a1)

    let i1 = document.createElement('i')
    i1.className = 'fab fa-facebook-square'
    a1.appendChild(i1)

    let a2 = document.createElement('a')
    social.appendChild(a2)

    let i2 = document.createElement('i')
    i2.className = 'fab fa-instagram'
    a2.appendChild(i2)

    let a3 = document.createElement('a')
    social.appendChild(a3)

    let i3 = document.createElement('i')
    i3.className = 'fab fa-twitter-square'
    a3.appendChild(i3)
}

function searchContainer(node) {
    let search_container = document.createElement('div')
    search_container.className = 'search-container'
    node.appendChild(search_container)

    let doggo=document.createElement('div')
    doggo.className='doggo-search'
    search_container.appendChild(doggo)

    let s1=document.createElement('div')
    s1.className='search-item'
    search_container.appendChild(s1)

    let h1=document.createElement('h6')
    h1.className='search-item-title'
    h1.innerHTML='POL'
    s1.appendChild(h1)

    let menu=document.createElement('div')
    menu.className='catagories-menu'
    s1.appendChild(menu)

    let ul = document.createElement('ul')
    menu.appendChild(ul)

    let li1 = document.createElement('li')
    ul.appendChild(li1)

    let a1 = document.createElement('a')
    a1.textContent='MUSKI'
    li1.appendChild(a1)

    let li2 = document.createElement('li')
    ul.appendChild(li2)

    let a2 = document.createElement('a')
    a2.textContent='ZENSKI'
    li2.appendChild(a2)


    s1=document.createElement('div')
    s1.className='search-item'
    search_container.appendChild(s1)

    h1=document.createElement('h6')
    h1.className='search-item-title'
    h1.innerHTML='UZRAST'
    s1.appendChild(h1)

    menu=document.createElement('div')
    menu.className='catagories-menu'
    s1.appendChild(menu)

    ul = document.createElement('ul')
    menu.appendChild(ul)

    li1 = document.createElement('li')
    ul.appendChild(li1)

    a1 = document.createElement('a')
    a1.textContent='STENE'
    li1.appendChild(a1)

    li2 = document.createElement('li')
    ul.appendChild(li2)

    a2 = document.createElement('a')
    a2.textContent='MLAD PAS'
    li2.appendChild(a2)

    let li3 = document.createElement('li')
    ul.appendChild(li3)

    let a3 = document.createElement('a')
    a3.textContent='ODRASTAO PAS'
    li3.appendChild(a3)

}

function petList(node) {

    let pet_list = document.createElement('div')
    pet_list.className = 'pet-list-container'
    node.appendChild(pet_list)
}
function createPetView(obj){
    let div=document.createElement('div')
    div.className='single-pet'
    
    let petlist=document.getElementsByClassName('pet-list-container')[0]
    petlist.appendChild(div)

    let a= document.createElement('a')
    div.appendChild(a)
    let img = document.createElement('img')
    img.src=obj.img_path
    a.appendChild(img)

    let hover= document.createElement('div')
    hover.className='hover-content'
    a.appendChild(hover)

    let line = document.createElement('div')
    line.className='line'
    hover.appendChild(line)

    let p = document.createElement('p')
    p.innerHTML=obj.uzrast
    hover.appendChild(p)

    let h4= document.createElement('h4')
    h4.textContent=obj.vlasnik + obj.mesto
    hover.appendChild(h4)
}