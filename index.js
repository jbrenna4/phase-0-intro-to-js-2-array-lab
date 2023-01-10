const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(Ralph) {
    cats.push(Ralph);
};

function destructivelyPrependCat(Bob) {
    cats.unshift(Bob);
};

function destructivelyRemoveLastCat() {
    cats.pop();
};

function destructivelyRemoveFirstCat() {
    cats.shift();
};

function appendCat() {
    let copyOfCats = [...cats, "Broom"];
    return copyOfCats;
}

function prependCat(cat) {
    let copyOfCats = ["Arnold", ...cats];
    return copyOfCats;
}

function removeLastCat() {
    let copyOfCats = cats.slice(0, cats.length - 1)
    return copyOfCats;
}

function removeFirstCat() {
    let copyOfCats = cats.slice(1);
    return copyOfCats;
}