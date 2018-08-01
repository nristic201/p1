import * as Rx from 'rxjs'
import { Pet } from '../classes/pet'
const url='http://localhost:3000/pets'
export class PetService {

    static getDataFromApi() {
        return Rx.from(
            fetch(url)
            .then(res=>res.json()))
    }
}