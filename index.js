// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield']


function destructivelyAppendCat(Ralph) {
cats.push(Ralph)
}

function destructivelyPrependCat(Bob) {
    cats.unshift(Bob)
}
function destructivelyRemoveLastCat() {
    cats.pop()
}
function destructivelyRemoveFirstCat() {
    cats.shift()
}
function appendCat(Broom){
    const copyCats = cats.slice()
    copyCats.push(Broom)
    return copyCats; 
}
function prependCat(Arnold) {
    const copyCats = cats.slice()
    copyCats.unshift(Arnold);
    return copyCats;
}
function removeFirstCat() {
    const copyCats = cats.slice()
    copyCats.shift();
    return copyCats;
}
function removeLastCat() {
    const copyCats = cats.slice()
    copyCats.pop();
    return copyCats;
}
console.log(cats)
