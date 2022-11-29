// 1. Napisati funkciju u JavaScript-u koja na osnovu niza 6 različitih citata i autora,
// ispisuje na stranici po jedan citat, ali tako da se citat promeni kada se program
// pokrene.

var radnArr = ["When you reach the end of your rope, tie a knot in it and hang on. - Franklin D. Roosevelt", 
"Always remember that you are absolutely unique. Just like everyone else. -Margaret Mead", 
"Don't judge each day by the harvest you reap but by the seeds that you plant. -Robert Louis Stevenson", 
"The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt", 
"Tell me and I forget. Teach me and I remember. Involve me and I learn. -Benjamin Franklin", 
"It is during our darkest moments that we must focus to see the light. -Aristotle"]

function displayRandomString(givenArr) {
    return givenArr[Math.floor(Math.random() * givenArr.length)]
}
console.log(displayRandomString(radnArr))

// 2. Napisati funkciju koja za godinu (kao ceo pozitivan broj) proverava da li je
// prestupna. Godina je prestupna ako je deljiva sa 4 i nije godina veka (znači ako
// nije deljiva sa 100 - 1900. nije bila prestupna). Od toga odstupa svaka četvrta
// godina veka (znači ako je deljiva sa 400, onda je ipak prestupna - npr. 2000. je
// prestupna).

var year = "It is not a leap year"

function isYearLeap(givenyear){
    if (givenyear % 4 === 0 && (givenyear % 4 === 0 && givenyear % 100 !== 0 || givenyear % 400 === 0)){
        year = "it is a leap year"
    }
    return year
}
console.log(isYearLeap(2000))

// 3. Napisati funkciju koja za zadatu reč (ili rečenicu) proverava koliko ima
// samoglasnika i koliko suglasnika.

var string1 = "Sada radi"

function sumOfConsonantsAndVowels(givenString){
    var string2 = givenString.replaceAll(" ", "")
    var consonants = 0;
    var vowels = 0;
    for (var i = 0; i < string2.length; i++){
        if (string2[i] === "a" || 
            string2[i] === "e" || 
            string2[i] === "i" || 
            string2[i] === "o" || 
            string2[i] === "u"){
            vowels++
        } else {
            consonants++
        }
    }
    return [vowels, consonants]
}
console.log(sumOfConsonantsAndVowels(string1))

// 4. Kreirati funkciju koja prihvata array, a na izlazu ispisuje niz koji sadrži tipove
// podataka pojedinačnih elemenata ulaznog niza.

var arr1 = ["M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A", NaN, Infinity]

function typesOfData(givenArr){
    var newArr = []
    for (var i = 0; i < givenArr.length; i++){
        newArr += typeof givenArr[i] + ", "
    }
    return newArr
}
console.log(typesOfData(arr1))

// 5. Kreirati funkciju koja prihvata niz stringova kao ulazni parametar, a na izlazu
// ispisuje samo stringove koji u sebi ne sadrže brojeve. Primer: ulazni niz [“12bb”,
// “pp”, “as23s”, “00sd”] => rezultat [“pp”].


var arr2 = ["12bb", "pp", "as23s", "00sd"];


function isStringOfAlpha (givenArr){
    var alphaOnly = []
    for (var i = 0; i < givenArr.length; i++){
        if(!/\d/.test(givenArr[i])) {
            alphaOnly.push(givenArr[i])
        }
        
    }
    return alphaOnly
}
console.log(isStringOfAlpha(arr2))


// 6. Kreirati funkciju koja prima string a kao rezultat ispisuje niz koji u sebi ima:
// dužinu stringa, prvi karakter stringa, poslednji karakter, središnji karakter ako
// string ima neparan broj znakova odnosno središnja dva karaktera ako ima paran
// broj znakova, indeks drugog ponavljanja drugog karaktera u formatu “@ Index # ”
// ili “not found” ako nema ponavljanja.
// Primer 1: "Computer" => [8, "C", "r", "pu", "not found"] ,
// Primer 2: "Science" => [7, "S", "e", "e", "@ index 5"]

function checkString (givenString){
    var stringLength = 0;
    var firstCharackter = 0;
    var lastCharackter = 0;
    var middleChrackter = 0;
    var index = "not found";
    var result = [];

    for (var i = 0; i < givenString.length; i++){
        stringLength = givenString.length;
        firstCharackter = givenString[0];
        lastCharackter = givenString[givenString.length - 1];
        if (givenString.length % 2 === 0){
            middleChrackter = givenString[givenString.length / 2 - 1] + givenString[givenString.length / 2];
        } else middleChrackter = givenString[givenString.length / 2 - 0.5];
        if (i !== 1 && givenString[1] === givenString[i]){
            index = "@ index " + i
        } 
    }
    result = stringLength + ", " + firstCharackter + ", " + lastCharackter + ", " + middleChrackter + ", " + index
    return result
}
console.log(checkString("Computer"))

// 7. Dat je ulazni niz [9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8] gde se svaki element ponavlja
// bar jednom osim dva elementa. Kreirati funkciju koja ispisuje dva elementa koja
// se ne ponavljaju.


function isElementRepeating(givenArr){
    var sorted = givenArr.sort()
    var noRepeat = []
    for (var i = 0; i < sorted.length; i++){

        if(i === 0 && sorted[i] !== sorted[i+1]) {
            noRepeat.push(sorted[i])
        } else if (i === sorted.length - 1 && sorted[i] !== sorted[i - 1]) {
                noRepeat.push(sorted[i])
        } else {
            if(sorted[i] != sorted[i-1] && sorted [i] != sorted[i+1]) {
                noRepeat.push(sorted[i])
            }
        }
    }
    return noRepeat
}
console.log(isElementRepeating([9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8]))

// 8. Kreirati funkciju koja ulazni niz deli u podnizove duzine N i ispisuje ih.
// Primer 1: ([2, 3, 4, 5], N=2) => [[2, 3], [4, 5]]
// Primer 2: ([2, 3, 4, 5, 6], N=3) => [[2, 3, 4], [5, 6]]



function arraySplitter(givenArr, subArrLength){
    var result = []
    var subArrPlaceholder = []
for (var i = 0; i < givenArr.length; i++){
    subArrPlaceholder.push(givenArr[i])
    if (subArrPlaceholder.length === subArrLength || (subArrPlaceholder.length < subArrLength && givenArr[i] === givenArr[givenArr.length - 1]) ){
        result.push(subArrPlaceholder)
        subArrPlaceholder = []
    }
}
return result
}
console.log(arraySplitter([2, 3, 4, 5], 2))