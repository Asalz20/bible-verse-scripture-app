// DOM Objects
document.querySelector('#rotate').addEventListener('click', btnAnimate);
document.querySelector('.generate__button').addEventListener('click', getFetch);
document.querySelector('#expand').addEventListener('click', writeTextBox)
document.querySelector('#close').addEventListener('click',closeTextBox)
let btnSave = document.getElementsByClassName('save__button');

const CLOSE = document.querySelector('#text-box')
const ROTATE = document.querySelector('#rotate');
const EXPAND = document.querySelector('#text-box');
const PASSAGE = document.querySelector('.card__passage');
const VERSE = document.querySelector('.card_scripture');
// onLoad randomizer
const newTestament = [
    {'Matthew': {
        1: ["1-17", "18-25",],
        2: ["1-12", "13-15", "16-18", "19-23"],
        3: ["1-12", "13-17"],
        4: ["1-11", "12-17", "18-22", "23-25"],
        5: ["1-12", "13-16", "17-20", "21-26", "27-30", "31-32", "33-37", "38-42", "43-48"],
        6: ["1-4", "5-15", "16-18", "19-21", "22-23", "24", "25-34"],
        7: ["1-5", "6", "7-11", "12", "13-14", "15-20", "21-23", "24-29"],
        8: ["1-4", "5-13", "14-17", "18-22", "23-27", "28-34"],
        9: ["1", "2-8", "9-13", "14-17", "18-26", "27-31", "32-34", "35-38"],
        10: ["1-4", "5-15", "16-25", "26-33", "34-39", "40-42"],
        11: ["1", "2-6", "7-19", "20-24", "25-30"],
        12: ["1-8", "9-14", "15-21", "22-32", "33-37", "38-42", "43-45", "47-50"],
        13: ["1-9", "10-17", "18-23", "24-30", "31-32", "33", "34-35","36-43", "44-50", "51-53", "54-58"],
        14: ["1-12", "13-21", "22-33", "34-36"],
        15: ["1-9", "10-20", "21-28", "29-31", "32-39"],
        16: ["1-4", "5-12", "13-20", "21-23", "24-28"],
        17: ["1-13", "14-20", "22-23", "24-27"],
        18: ["1-5", "6-9", "10-14", "15-20", "21-22", "23-35"],
        19: ["1-12", "13-14", "16-30"],
        20: ["1-16", "17-19", "20-28", "29-34"],
        21: ["1-11", "12-17", "18-22", "28-32", "33-46"],
        22: ["1-14", "15-22", "23-33", "34-40", "41-46"],
        23: ["1-36", "37-39"],
        24: ["1-2", "3-8", "9-14", "15-28", "29-31", "32-35", "36-44", "45-51"],
        25: ["1-13", "14-30", "31-46"],
        26: ["1-5", "6-13", "14-16", "17-25", "26-30", "31-35", "36-46", "47-56", "57-68", "69-75"],
        27: ["1-2", "3-10", "11-14", "15-23", "24-26", "27-31", "32-44", "45-56", "57-61", "62-66"],
        28: ["1-10", "11-15", "16-20"],
    }},
    {'Mark': {
        1: ["1-8", "9-11", "12-13", "14-15", "16-20", "21-28", "29-34", "35-39", "40-45"],
        2: ["1-12", "13-17", "18-22", "23-28"],
        3: ["1-6", "7-12", "13-19", "20-30", "31-35"],
        4: ["1-9", "10-20", "21-25", "26-29", "30-34", "35-41"],
        5: ["1-20", "21-43"],
        6: ["1-6", "7-13", "14-29", "30-44", "45-52", "53-56"],
        7: ["1-23", "24-30", "31-37"],
        8: ["1-10", "11-13", "14-21", "22-26", "27-30", "31-38"],
        9: ["1", "2-8", "9-13", "14-29", "30-32", "33-37", "38-41", "42-50"],
        10: ["1-12", "13-16", "17-31", "32-34", "35-45", "46-52"],
        11: ["1-11", "12-14", "15-19", "20-26", "27-33"],
        12: ["1-12", "13-17", "18-27", "28-34", "35-37", "38-40", "41-44"],
        13: ["1-8", "9-13", "14-23", "24-27", "28-31", "32-37"],
        14: ["1-2", "3-9", "10-11", "12-21", "22-25", "26-31", "32-42", "43-52", "53-65", "66-72"],
        15: ["1-5", "6-15", "16-20", "21-32", "33-41", "42-47"],
        16: ["1-8", "9-11", "12-13", "14-18", "19-20"],
    }},
    {'Luke': {
        1: ["1-4", "5-25", "26-38", "39-45", "46-56", "57-66", "67-80"],
        2: ["1-7", "8-20", "21", "22-38", "39-40", "41-52"],
        3: ["1-19", "21-22", "23-38"],
        4: ["1-13", "14-15", "16-30", "31-37", "38-44"],
        5: ["1-11", "12-16", "17-26", "27-32", "33-39"],
        6: ["1-5", "6-11", "17-119", "20-26", "37-42", "43-45", "46-49"],
        7: ["1-10", "11-17", "18-35", "36-50"],
        8: ["1-3", "4-8", "9-10", "11-15", "16-18", "19-21", "22-25", "26-39", "40-56"],
        9: ["1-6", "7-9", "10-17", "18-20", "21-27", "28-36", "37-43", "44-45", "46-48", "49-56", "57-62"],
        10: ["1-6", "7-12", "13-19", "20-30", "31-35"],
        11: ["1-13", "14-26", "27-36", "37-54"],
        12: ["1-7", "8-12", "13-21", "22-34", "35-48", "49-53", "54-59"],
        13: ["1-9", "10-17", "18-21", "22-30", "31-35"],
        14: ["1-6", "7-24", "25-35"],
        15: ["1-32"],
        16: ["1-13", "14-31"],
        17: ["1-10", "11-19", "20-37"],
        18: ["1-8", "9-14", "15-17", "18-30", "31-34", "35-43"],
        19: ["1-10", "11-28", "29-40", "41-44", "45-48"],
        20: ["1-8", "9-19", "20-26", "27-44", "45-47"],
        21: ["1-4", "5-28", "29-38"],
        22: ["1-6", "7-13", "14-23", "24-30", "31-34", "35-38", "39-46", "47-53", "54-62", "63-65", "66-71"],
        23: ["1-5", "6-12", "13-25", "26-31", "32-43", "44-49", "50-56"],
        24: ["1-12", "13-35", "36-49", "50-53"],
    }},
    {'John': {
        1: ["1-18", "19-34", "35-51"],
        2: ["1-12", "13-25"],
        3: ["1-21", "22-36"],
        4: ["1-3", "4-42", "43-45", "46-54"],
        5: ["1-18", "19-30", "31-47"],
        6: ["1-15", "16-25", "26-71"],
        7: ["1-13", "14-53"],
        8: ["1-11", "12-30", "31-51", "52-59"],
        9: ["1-7", "8-17", "18-34", "35-38", "39-41"],
        10: ["1-6", "7-10", "11-21", "22-39", "40-42"],
        11: ["1-16", "17-37", "38-46", "47-53", "54-57"],
        12: ["1-11", "12-19", "20-36", "37-43", "44-50"],
        13: ["1-20", "21-30", "31-38"],
        14: ["1-14", "15-31"],
        15: ["1-8", "9-17", "18-27"],
        16: ["1-4", "5-11", "12-16", "17-24", "25-33"],
        17: ["1-26"],
        18: ["1-14", "15-18", "19-24", "25-27", "28-32", "33-37", "38-40"],
        19: ["1-7", "8-15", "16-30", "31-37", "38-24"],
        20: ["1-10", "11-18", "19-23", "24-31"],
        21: ["1-14", "15-19", "20-25"],
    }},
    {'Acts of the Apostles': {
        1: ["1-11", "12-14", "15-26"],
        2: ["1-15", "16-25", "26-41", "42-47"],
        3: ["1-10", "11-26"],
        4: ["1-22", "23-31", "32-37"],
        5: ["1-11", "12-16", "17-32", "33-42"],
        6: ["1-7", "8-15"],
        7: ["1-22", "23-38", "39-60"],
        8: ["1-3", "4-25", "26-40"],
        9: ["1-14", "15-25", "26-31", "32-43"],
        10: ["1-15", "16-26", "27-38", "39-48"],
        11: ["1-18", "19-30"],
        12: ["1-12", "13-25"],
        13: ["1-3", "4-12", "13-29", "30-39", "40-52"],
        14: ["1-7", "8-20", "21-28"],
        15: ["1-21", "22-35", "36-41"],
        16: ["1-5", "6-10", "11-15", "16-24", "25-40"],
        17: ["1-15", "16-34"],
        18: ["1-23", "24-28"],
        19: ["1-20", "21-41"],
        20: ["1-6", "7-12", "13-38"],
        21: ["1-17", "18-26", "27-40"],
        22: ["1-21", "22-29", "30"],
        23: ["1-11", "12-24", "25-35"],
        24: ["1-23", "24-27"],
        25: ["1-12", "13-27"],
        26: ["1-18", "19-32"],
        27: ["1-22", "22-44"],
        28: ["1-10", "11-16", "17-28", "30-31"],
    }},
    {'Romans': {
        1: ["1-7", "8-14", "15-17", "18-32"],
        2: ["1-16", "17-29"],
        3: ["1-8", "9-20", "21-31"],
        4: ["1-12", "13-25"],
        5: ["1-11", "12-21"],
        6: ["1-14", "15-23"],
        7: ["1-6", "7-12", "13-25"],
        8: ["1-17", "18-39"],
        9: ["1-5", "6-29", "30-33"],
        10: ["1-10", "11-21"],
        11: ["1-12", "13-24", "25-36"],
        12: ["1-2", "3-21"],
        13: ["1-10", "11-14"],
        14: ["1-11", "12-23"],
        15: ["1-13", "14-21", "22-33"],
        16: ["1-2", "3-16", "17-20", "21-23", "25-27"],
    }},
    {'1 Corinthians': {
        1: ["1-3", "4-9", "10-17", "18-31"],
        2: ["1-5", "6-16"],
        3: ["1-10", "11-23"],
        4: ["1-10", "11-21"],
        5: ["1-13"],
        6: ["1-11", "12-20"],
        7: ["1-19", "20-40"],
        8: ["1-13"],
        9: ["1-15", "16-27"],
        10: ["1-13", "14-33"],
        11: ["1-16", "17-34"],
        12: ["1-13", "14-31"],
        13: ["1-13"],
        14: ["1-17", "18-28", "29-40"],
        15: ["1-21", "22-38", "39-58"],
        16: ["1-4", "5-12", "13-24"],
    }},
    {'2 Corinthians': {
        1: ["1-2", "3-11", "12-24"],
        2: ["1-2", "3-11", "13-17"],
        3: ["1-6", "7-18"],
        4: ["1-6", "7-18"],
        5: ["1-10", "11-21"],
        6: ["1-10", "11-18"],
        7: ["1-4", "5-16"],
        8: ["1-15", "16-24"],
        9: ["1-15"],
        10: ["1-18"],
        11: ["1-15", "16-33"],
        12: ["1-13", "14-21"],
        13: ["1-10", "11-13"],
    }},
    {'Galatians': {
        1: ["1-5", "6-9", "10-24"],
        2: ["1-10", "11-21"],
        3: ["1-5", "6-18", "19-24", "25-29"],
        4: ["1-7", "8-20", "21-31"],
        5: ["1-15", "16-26"],
        6: ["1-9", "10-18"],
    }},
    {'Ephesians': {
        1: ["1-2", "3-14", "15-23"],
        2: ["1-10", "11-22"],
        3: ["1-13", "14-21"],
        4: ["1-16", "17-32"],
        5: ["1-5", "6-14", "15-33"],
        6: ["1-9", "10-20", "21-24"],
    }},
    {'Philippians': {
        1: ["1-2", "3-11", "12-26", "27-30"],
        2: ["1-11", "12-18", "19-30"],
        3: ["1-16", "17-21"],
        4: ["1-9", "10-20", "21-23"],
    }},
    {'Colossians': {
        1: ["1-2", "3-14", "15-23", "24-29"],
        2: ["1-5", "6-23"],
        3: ["1-12", "13-25"],
        4: ["1-6", "7-18"],
    }},
    {'1 Thessalonians': {
        1: ["1-10"],
        2: ["1-12", "13-16", "17-20"],
        3: ["1-5", "6-13"],
        4: ["1-12", "13-18"],
        5: ["1-11", "12-24", "25-28"],
    }},
    {'2 Thessalonians': {
        1: ["1-12"],
        2: ["1-12", "13-17"],
        3: ["1-5", "6-15", "16-18"],
    }},
    {'1 Timothy': {
        1: ["1-11", "12-17", "18-20"],
        2: ["1-7", "8-15"],
        3: ["1-7", "8-13", "14-16"],
        4: ["1-6", "7-16"],
        5: ["1-16", "17-25"],
        6: ["1-2", "3-16", "17-19", "20-21"],
    }},
    {'2 Timothy': {
        1: ["1-7", "8-18"],
        2: ["1-13", "14-21", "22-26"],
        3: ["1-9", "10-17"],
        4: ["1-8", "9-18", "19-22"],
    }},
    {'Titus': {
        1: ["1-4", "5-9", "10-16"],
        2: ["1-15"],
        3: ["1-8", "9-15"],
    }},
    {'Philemon': {
        1: ["1-3", "4-7", "8-22", "23-25"],
    }},
    {'Hebrews': { 
        1: ["1-4", "5-14"],
        2: ["1-4", "5-9", "10-18"],
        3: ["1-6", "7-19"],
        4: ["1-10", "11-16"],
        5: ["1-14"],
        6: ["1-8", "9-12", "13-20"],
        7: ["1-3", "4-17", "18-28"],
        8: ["1-13"],
        9: ["1-14", "15-28"],
        10: ["1-18", "19-25", "26-31", "32-39"],
        11: ["1-2", "3-24", "25-40"],
        12: ["1-2", "3-17", "18-29"],
        13: ["1-16", "17-25"],
    }},
    {'James': {
        1: ["1", "2-12", "13-18", "19-27"],
        2: ["1-13", "14-26"],
        3: ["1-12", "13-18"],
        4: ["1-12", "13-17"],
        5: ["1-6", "7-11", "12-20"],
    }},
    {'1 Peter': {
        1: ["1-2", "3-12", "13-25"],
        2: ["1-10", "11-25"],
        3: ["1-11", "12-22"],
        4: ["1-11", "12-19"],
        5: ["1-11", "12-14"],
    }},
    {'2 Peter': {
        1: ["1-2", "3-11", "12-15", "16-21"],
        2: ["1-3", "4-9", "10-22"],
        3: ["1-13", "14-16", "17-18"],
    }},
    {'1 John': {
        1: ["1-4", "5-10"],
        2: ["1-6", "7-17", "18-28", "29"],
        3: ["1-10", "11-24"],
        4: ["1-6", "7-21"],
        5: ["1-5", "6-12", "13-17", "18-21"],
    }},
    {'2 John': {
        1: ["1-3", "4-11", "12-13"],
    }},
    {'3 John': {
        1: ["1", "2-8", "9-12", "13-15"],
    }},
    {'Jude': {
        1: ["1-2", "3-4", "5-16", "17-23", "24-25"],
    }},
    {'Revelation (Apocalypse)': {
        1: ["1-8", "9-20"],
        2: ["1-7", "8-11", "12-17", "18-29"],
        3: ["1-6", "7-13", "14-22"],
        4: ["1-11"],
        5: ["1-14"],
        6: ["1-17"],
        7: ["1-8", "9-17"],
        8: ["1-13"],
        9: ["1-21"],
        10: ["1-11"],
        11: ["1-14", "15-19"],
        12: ["1-6", "7-12", "13-17"],
        13: ["1-18"],
        14: ["1-5", "6-13", "14-20"],
        15: ["1-4", "5-8"],
        16: ["1-21"],
        17: ["1-18"],
        18: ["1-24"],
        19: ["1-10", "11-21"],
        20: ["1-3", "4-6", "7-10", "11-15"],
        21: ["1-8", "9-27"],
        22: ["1-5", "6-21"],

    }}
];

function getFetch() {
    // This is the object within newTestament array containing the actual books
    const book = newTestament[Math.floor(Math.random() * newTestament.length)];
    console.log(book)

    // This is the name of the book at the index 0
    const randomBook = Object.keys(book)[0];
    console.log(randomBook)


    // These are the values (chapters) of the keys (book)
    const chapters = Object.keys(book[randomBook]);
    console.log('chapters:', chapters)

    // This is getting a random chapter from the values (chapters) array
    let randomChapter = Math.floor(Math.random() * chapters.length);
    console.log('random chapter:', randomChapter)
    if (randomChapter == 0)  randomChapter = 1;

    const verses = book[randomBook][randomChapter];
    console.log('verses:', verses)
    
    let randomVerse = Math.floor(Math.random() * verses.length);
    console.log('random verse:', verses[randomVerse])

    // if(randomVerse == 0 || typeof randomVerse === NaN) randomVerse = 1;
    
    
    const url = `https://bible-api.com/${randomBook} ${randomChapter}:${verses[randomVerse]}`
    console.log(url);
    
    fetch(url)
    .then(res => res.json())
    .then(data => {
        let h5 = document.querySelector('h5');
        h5.textContent = data.reference;
        let p = document.querySelector('p');
        p.textContent = `${data.text}`;
    })
    .catch(err => {
        console.log(`error: ${err}`);
    })
    
}

// Button Animate function
function btnAnimate () {
    ROTATE.classList.add('diceRotate')
    setTimeout(removeBtnAnimate, 380)
};
// Button remove function
function removeBtnAnimate () {
    ROTATE.classList.remove('diceRotate')
}
// write text-box function
function writeTextBox () {
    EXPAND.classList.remove('hide')
}

// close text-box function
function closeTextBox () {
    CLOSE.classList.add('hide')
}