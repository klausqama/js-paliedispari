//chiediamo all'utente di inserire una parola
const parola= prompt('inserisci una parola')
console.log(parola)

//se la parola è palindroma
// - diciamo che la parola e palindroma
// ALITRIMENTI
// - diciamo che non lo è 

if(isPalindrome(parola)){
console.log(`la parola '${parola}' è palindroma`)
} else {
    console.log(`la parola '${parola}' non è palindroma`)
}

function isPalindrome(word){
console.log(word)
word = word.toLowerCase()
const reversedWord = stringReverse(word)
if( word === reversedWord){
return true 
}else{
    return false
}

}

function stringReverse(text){
    let newText = ''
    for (let i = 0; i < text.length; i++){
        const char = text.at(-i - 1)
        newText += char
    }
    return newText
}

