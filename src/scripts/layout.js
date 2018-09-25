
export const createPageElements = () => {
    // main div
    let main = document.createElement('div')
    main.className = 'main-content'
    document.body.appendChild(main)

    let header = document.createElement('div')
    header.className = 'header-area'
    main.appendChild(header)

    headerAreaContent(header)

    let search_container = document.createElement('div')
    search_container.className = 'search-container'
    header.appendChild(search_container)

    createDogSearch(search_container)
    createCatSearch(search_container)

    petList(main)
}
export const headerAreaContent = (node) => {

    let nav = document.createElement('nav')
    nav.className = 'app-nav'
    node.appendChild(nav)

    let ul = document.createElement('ul')
    nav.appendChild(ul)

    let li1 = document.createElement('li')
    ul.appendChild(li1)

    let label1 = document.createElement('label')
    label1.id = 'Pas'
    label1.textContent = 'Find A Dog'
    li1.appendChild(label1)

    let li2 = document.createElement('li')
    ul.appendChild(li2)

    let label2 = document.createElement('label')
    label2.id = 'Macka'
    label2.textContent = 'Find A Cat'
    li2.appendChild(label2)

    let li3 = document.createElement('li')
    ul.appendChild(li3)

    let label3 = document.createElement('label')
    label3.id = 'other'
    label3.textContent = 'Other Pets'
    li3.appendChild(label3)

}
export const removeContent = () => {
    let myNode = document.getElementsByClassName('pet-list-container')[0]
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild)
    }
}
export const createDogSearch = (node) => {
    let doggo = document.createElement('div')
    doggo.className = 'doggo-search'
    node.appendChild(doggo)

    let s1 = document.createElement('div')
    s1.className = 'search-item'
    doggo.appendChild(s1)

    let h1 = document.createElement('h6')
    h1.className = 'search-item-title'
    h1.innerHTML = 'POL'
    s1.appendChild(h1)

    let menu = document.createElement('div')
    menu.className = 'catagories-menu'
    s1.appendChild(menu)

    let ul = document.createElement('ul')
    menu.appendChild(ul)

    let li1 = document.createElement('li')
    ul.appendChild(li1)

    let a1 = document.createElement('a')
    a1.textContent = 'MUSKI'
    a1.id = 'Muski'
    li1.appendChild(a1)

    let li2 = document.createElement('li')
    ul.appendChild(li2)

    let a2 = document.createElement('a')
    a2.textContent = 'ZENSKI'
    a2.id = 'Zenski'
    li2.appendChild(a2)


    s1 = document.createElement('div')
    s1.className = 'search-item'
    doggo.appendChild(s1)

    h1 = document.createElement('h6')
    h1.className = 'search-item-title'
    h1.innerHTML = 'UZRAST'
    s1.appendChild(h1)

    menu = document.createElement('div')
    menu.className = 'catagories-menu'
    s1.appendChild(menu)

    ul = document.createElement('ul')
    menu.appendChild(ul)

    li1 = document.createElement('li')
    ul.appendChild(li1)

    let checkbox = document.createElement('input')
    checkbox.type = "checkbox"
    checkbox.name = "cbUzrast"
    checkbox.value = "value"
    checkbox.id = 'stene'
    li1.appendChild(checkbox)

    let label = document.createElement('label')
    label.htmlFor = "id"
    label.innerHTML = 'STENE'
    li1.appendChild(label)


    li2 = document.createElement('li')
    ul.appendChild(li2)

    checkbox = document.createElement('input')
    checkbox.type = "checkbox"
    checkbox.name = "cbUzrast"
    checkbox.value = "value"
    checkbox.id = 'mlad pas'
    li2.appendChild(checkbox)

    label = document.createElement('label')
    label.innerHTML = 'MLAD PAS'
    li2.appendChild(label)

    let li3 = document.createElement('li')
    ul.appendChild(li3)

    checkbox = document.createElement('input')
    checkbox.type = "checkbox"
    checkbox.name = "cbUzrast"
    checkbox.value = "value"
    checkbox.id = 'odrastao pas'
    li3.appendChild(checkbox)

    label = document.createElement('label')
    label.innerHTML = 'ODRASTAO PAS'
    li3.appendChild(label)
}

export const createCatSearch = (node) => {
    let cat = document.createElement('div')
    cat.className = 'cat-search'
    node.appendChild(cat)

    let s1 = document.createElement('div')
    s1.className = 'search-item'
    cat.appendChild(s1)

    let h1 = document.createElement('h6')
    h1.className = 'search-item-title'
    h1.innerHTML = 'POL'
    s1.appendChild(h1)

    let menu = document.createElement('div')
    menu.className = 'catagories-menu'
    s1.appendChild(menu)

    let ul = document.createElement('ul')
    menu.appendChild(ul)

    let li1 = document.createElement('li')
    ul.appendChild(li1)

    let a1 = document.createElement('a')
    a1.textContent = 'MUSKI'
    a1.className='polChoose'
    a1.id = 'Muski'
    li1.appendChild(a1)

    let li2 = document.createElement('li')
    ul.appendChild(li2)

    let a2 = document.createElement('a')
    a2.textContent = 'ZENSKI'
    a2.id = 'Zenski'
    a2.className='polChoose'
    li2.appendChild(a2)


    s1 = document.createElement('div')
    s1.className = 'search-item'
    cat.appendChild(s1)

    h1 = document.createElement('h6')
    h1.className = 'search-item-title'
    h1.innerHTML = 'UZRAST'
    s1.appendChild(h1)

    menu = document.createElement('div')
    menu.className = 'catagories-menu'
    s1.appendChild(menu)

    ul = document.createElement('ul')
    menu.appendChild(ul)

    li1 = document.createElement('li')
    ul.appendChild(li1)

    let checkbox = document.createElement('input')
    checkbox.type = "checkbox"
    checkbox.name = "cbUzrast"
    checkbox.value = "value"
    checkbox.id = 'Mace'
    li1.appendChild(checkbox)

    let label = document.createElement('label')
    label.htmlFor = "id"
    label.innerHTML = 'MACE'
    li1.appendChild(label)


    li2 = document.createElement('li')
    ul.appendChild(li2)

    checkbox = document.createElement('input')
    checkbox.type = "checkbox"
    checkbox.name = "cbUzrast"
    checkbox.value = "value"
    checkbox.id = 'Mlada macka'
    li2.appendChild(checkbox)

    label = document.createElement('label')
    label.innerHTML = 'MLADA MACKA'
    li2.appendChild(label)

    let li3 = document.createElement('li')
    ul.appendChild(li3)

    checkbox = document.createElement('input')
    checkbox.type = "checkbox"
    checkbox.name = "cbUzrast"
    checkbox.value = "value"
    checkbox.id = 'Odrasla macka'
    li3.appendChild(checkbox)

    label = document.createElement('label')
    label.innerHTML = 'ODRASLA MACKA'
    li3.appendChild(label)

}

export const petList = (node) => {
    let pet_list = document.createElement('div')
    pet_list.className = 'pet-list-container'
    pet_list.id='pet-list-container'
    node.appendChild(pet_list)
}

export const createPetView = (obj) => {

    let div = document.createElement('div')
    div.className = 'single-pet'

    let petlist = document.getElementsByClassName('pet-list-container')[0]
    petlist.appendChild(div)

    let a = document.createElement('a')
    div.appendChild(a)
    let img = document.createElement('img')
    img.src = obj.img_path

    a.appendChild(img)

    let hover = document.createElement('div')
    hover.className = 'hover-content'
    a.appendChild(hover)

    let line = document.createElement('div')
    line.className = 'line'
    hover.appendChild(line)

    let text1 = document.createElement('label')
    text1.textContent = "Pol : " +obj.pol// + obj.mesto
    hover.appendChild(text1)

    let p = document.createElement('p')
    p.innerHTML = "Uzrast : "+obj.uzrast
    hover.appendChild(p)

    let text2 = document.createElement('label')
    text2.textContent = "Vlasnik : " +obj.vlasnik// + obj.mesto
    hover.appendChild(text2)

    let text3=document.createElement('label')
    text3.innerHTML='Mesto :'+obj.mesto
    hover.appendChild(text3)
}