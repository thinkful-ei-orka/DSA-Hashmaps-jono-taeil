const HashMap = require('./HashMap');
const HashMapSeparate = require('./HashMapSeparate');

function main() {
    const lotr = new HashMap;
    HashMap.MAX_LOAD_RATIO = 0.5;
    HashMap.SIZE_RATIO = 3;
    lotr.set('Hobbit', 'Bilbo')
    lotr.set('Hobbit', 'Frodo')
    lotr.set('Wizard', 'Gandalf')
    lotr.set('Human', 'Aragorn')
    lotr.set('Elf', 'Legolas')
    lotr.set('Maiar', 'The Necromancer')
    lotr.set('Maiar', 'Sauron')
    lotr.set('RingBearer', 'Gollum')
    lotr.set('LadyOfLight', 'Galadriel')
    lotr.set('HalfElven', 'Arwen')
    lotr.set('Ent', 'Treebeard')
    // Maiar: Sauron,  Hobbit: Frodo
    // capacity 24
};
main();


// What is the output of the code?
const WhatDoesThisDo = function(){
    let str1 = 'Hello World.';
    let str2 = 'Hello World.';
    let map1 = new HashMap();
    map1.set(str1,10);
    map1.set(str2,20);
    let map2 = new HashMap();
    let str3 = str1;
    let str4 = str2;
    map2.set(str3,20);
    map2.set(str4,10);

    console.log(map1.get(str1));
    console.log(map2.get(str3));
}
// 20, 10


// 1) Show your hash map after the insertion of keys 10, 22, 31, 4, 15, 28, 17, 88, 59
// into a hash map of length 11 using open addressing and a hash function k mod m,
// where k is the key and m is the length.

// 2) Show your hash map after the insertion of the keys 5, 28, 19, 15, 20, 33, 12, 17, 10
// into the hash map with collisions resolved by separate chaining. Let the hash table
// have a length m = 9, and let the hash function be k mod m.

// hashes: 10, 0, 9, 4, 4, 6, 17, 22, 26
// Map: 22, _, _, _, 4, 15, 28, _, _, 31, 10, _, _, _, _, _, _, 17, _, _, _, _, 88, _, _, _, 59, _, _, _, _, _, _,

// hashes: 5, 1, 6, 2, 3, 17, 10
//            1  6
// Map: _, 28, 20, 12, _, 5, 15, _, _, _, 10, _, _, _, _, _, _, 17, _, _, _, _, _, _, _, _, _,
//         19                33

function deleteDuplicates(string) {
    let noDup = new HashMap;
    for (let i = 0; i < string.length; i++) {
        try {
            noDup.get(string[i])
        }
        catch {
            noDup.set(string[i], i)
        }
    }
};

// deleteDuplicates('google')

function palindromePermutation(string) {
    let palindromeHash = new HashMap;
    let numOdds = 0;

    for (let i = 0; i < string.length; i++) {
        try {
            let appearances = palindromeHash.get(string[i]);
            palindromeHash.set(string[i], appearances + 1);
        } catch {
            palindromeHash.set(string[i], 1);
        }
    }

    for (let j = 0; j < palindromeHash._hashTable.length; j++) {
        let keyValue = palindromeHash._hashTable[j];
        if (keyValue !== undefined){
            if (keyValue.value % 2 !== 0){
                numOdds += 1;
            }
        }
    }

    if (numOdds > 1) {
        return false;
    } else {
        return true;
    }
}

function anagramGrouping(stringArray) {
    let output = [];
    const wordMap = new HashMap;
    let counter = 0;

    for (let i = 0; i < stringArray.length; i++) {
        let letters = stringArray[i].split('');
        let sortedLetters = letters.sort();
        let sortedWord = sortedLetters.join('');

        try {
            let position = wordMap.get(sortedWord);
            output[position].push(stringArray[i]);
        } catch {
            wordMap.set(sortedWord, counter);
            output.push([stringArray[i]]);
            counter++;
        }
    }

    return output;
}

// console.log(anagramGrouping(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']));
