import * as Rx from 'rxjs'
import { Pet } from '../classes/pet'
const url = 'http://localhost:3000/pets'

export class PetService {

    static getDataFromApi() {
        return Rx.from(
            fetch(url)
                .then(res => res.json()))
    }
    static getDataByType(type) {
        return Rx.from(
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    return data.filter(el => el.tip === type)
                })
        )
    }
    static getDataByGender(pol) {
        return Rx.from(
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    return data.filter(el => el.pol === pol)
                })
        )
    }
    static getDataByAge(niz) {
        return Rx.from(
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    if (niz.length > 0) {
                        let pomocni = []
                        niz.forEach(el => {
                            data.forEach(element => {
                                if (element.uzrast === el)
                                    pomocni.push(element)
                            })
                        })
                        return pomocni
                    } else {
                        return data
                    }
                })
        )
    }
}