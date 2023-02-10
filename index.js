const cats = [
    "Milo",
    "Otis",
    "Garfield"
]
function destructivelyAppendCat(Ralph) {
    cats.push ("Ralph")
}
function destructivelyPrependCat(Bob) {
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat (){
    cats.pop()
}
function destructivelyRemoveFirstCat () {
    cats.shift()
}
function appendCat(Broom) {
    const copyCat = [...cats, "Broom"]
    return copyCat
}
function prependCat(Arnold) {
    const copyCat = ["Arnold", ...cats]
    return copyCat
}
function removeLastCat() { 
    const copyOfCat = cats.slice(cats, -1)
    return copyOfCat
}
function removeFirstCat() { //ughhhh
    const copyTheCat = cats.slice(1)
    return copyTheCat
}
