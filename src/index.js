import { PetService } from './services/pet-service'
import * as Rxjs from 'rxjs'
import { switchMap, mapTo, tap } from 'rxjs/operators'
import * as Layout from './scripts/layout'
import { mergeById } from './scripts/customFuntions'
window.onload = () => {
    Layout.createPageElements()
    $('.navbar-brand').click(function () {
        $('#main-content').fadeIn(800)
    })
    $('.search-container').hide()
    $('#Pas').click(function () {
        $('.app-nav li').removeClass("active")
        $(this).parent().addClass('active')
        $('.search-container').show()
        $('.cat-search').hide()
        $('.doggo-search').show()
    })
    $('#Macka').click(function () {
        $('.app-nav li').removeClass("active")
        $(this).parent().addClass('active')
        $('.doggo-search').hide()
        $('.search-container').show()
        $('.cat-search').show()
    })
    $('.polChoose').click(function () {
        $('.polChoose').removeClass("clicked")
        $(this).addClass("clicked")
    })
    let polFilter;
    let uzrastFilter = []
    let petlist
    let uzrastResultList
    let polResultList

    PetService.getDataFromApi()
        .subscribe(res => {
            res.forEach(element => {
                Layout.createPetView(element)
            })
        })
    let btnMacka = document.getElementById('Macka')
    let btnPas = document.getElementById('Pas')
    const events = Rxjs.merge(
        Rxjs.fromEvent(btnPas, 'click').pipe(mapTo(btnPas.id)),
        Rxjs.fromEvent(btnMacka, 'click').pipe(mapTo(btnMacka.id))
    )
    events.pipe(
        switchMap(text => PetService.getDataByType(text))
    )
        .subscribe(res => {
            petlist = res
            Layout.removeContent()
            res.forEach(el => Layout.createPetView(el))
        })

    let btnPolMuski = document.querySelector('.cat-search #Muski')
    let btnPolZenski = document.querySelector('.cat-search #Zenski')

    const polEvents = Rxjs.merge(
        Rxjs.fromEvent(btnPolMuski, 'click').pipe(mapTo(btnPolMuski.id)),
        Rxjs.fromEvent(btnPolZenski, 'click').pipe(mapTo(btnPolZenski.id))
    )
    polEvents.pipe(
        tap(res => polFilter = res),
        switchMap(text => PetService.getDataByGender(text))
    )
        .subscribe(res => {
            polResultList = res
            let data = mergeById(petlist, res)
            if (uzrastFilter.length !== 0) {
                data = mergeById(data, uzrastResultList)
            }
            Layout.removeContent()
            data.forEach(el => Layout.createPetView(el))
        })

    let cbMace = document.getElementById('Mace')
    let cbMM = document.getElementById('Mlada macka')
    let cbOM = document.getElementById('Odrasla macka')

    let catCheckboxes = Rxjs.merge(
        Rxjs.fromEvent(cbMace, 'change').pipe(mapTo(cbMace.id)),
        Rxjs.fromEvent(cbMM, 'change').pipe(mapTo(cbMM.id)),
        Rxjs.fromEvent(cbOM, 'change').pipe(mapTo(cbOM.id))
    )
    catCheckboxes.pipe(
        tap(value => {
            let num = uzrastFilter.findIndex(el => el === value)
            if (num === -1) {
                uzrastFilter.push(value)
            } else {
                uzrastFilter = uzrastFilter.filter(el => el !== value)
            }
        }),
        switchMap(() => PetService.getDataByAge(uzrastFilter))
    )
        .subscribe((res) => {
            uzrastResultList = res
            let data = res
            if (polFilter !== undefined) {
                data = data.filter(el => el.pol === polFilter)
            }
            if(uzrastFilter.length===0){
                data=mergeById(petlist,polResultList)
            }
            Layout.removeContent()
            data.forEach(el => Layout.createPetView(el))
        })
}
