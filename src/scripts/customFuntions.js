export const mergeById = (niz, niz2) => {
    let pomocni = []
    niz.forEach(el => {
        niz2.forEach(element => {
            if (element.id === el.id)
                pomocni.push(element)
        })
    })
    return pomocni
}