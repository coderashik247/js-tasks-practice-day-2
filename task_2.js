/*
Find the friend with the smallest name.
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
*/

function smallestName(names){
    let smallestWord = names[0];
    for(const name of names){
        if(smallestWord.length > name.length){
            smallestWord = name;
        }
    }
    return smallestWord;
}

const friendName = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
console.log("Smallest Name is: ", smallestName(friendName));