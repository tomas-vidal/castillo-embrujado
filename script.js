const buttons = document.querySelectorAll('.game__card__option');
const cardsBackFace = document.querySelectorAll('.game__card__img--backface');
const cardsTotal = document.querySelectorAll('.game__card');
let clicked = false;

const last = document.querySelectorAll('.game__card__option2');

const audio = new Audio();
audio.src = "./sound/multimedia1.mp3"




buttons.forEach( button => {
   button.addEventListener('click', checkIfCorrect)
})

cardsBackFace.forEach( card => {
     card.addEventListener('click', flipCard)
})

 function checkIfCorrect() {
        if (clicked) {
            return
        } else {
        const card = this.parentElement.parentElement;
        const removeEventListener = card.querySelectorAll('.game__card__option');
        if (this.innerText == card.dataset.last) {
            card.classList.add('green');
            addGreenBG(removeEventListener);
        } else {
            card.classList.add('red');
            addRedBG(removeEventListener);
        }
        removeEventListener.forEach(button => {
            button.removeEventListener('click', checkIfCorrect);
        })
    }
}

function addGreenBG(buttons) {
    buttons.forEach( button => {
        button.classList.add('greenbutton')
    })
}

function addRedBG(buttons) {
    buttons.forEach( button => {
        button.classList.add('redbutton');
        audio.play();
    })
}

 function reset() {
    buttons.forEach( button => {
        let randomNumber = Math.floor(Math.random()*4)
        button.style.order = randomNumber
    })
    cardsTotal.forEach ( card => {
        let randomNumber = Math.floor(Math.random()* 4 );
        card.style.order = randomNumber;
    })
 }

 reset();

function flipCard() {
        clicked = true;   
        const parentElement = this.parentElement
        parentElement.classList.add('flip');
        const child = parentElement.parentElement.querySelector('.game__card__choice');
        child.classList.add('show');
        setTimeout( () => {clicked = false}, 500)
}

function generateRandomSyllabe() {
    let randomNumber = Math.floor(Math.random()*5)
    switch(randomNumber) {
        case 0: 
            return 'DA';
            break
        case 1:
            return 'RA';
            break
        case 2:
            return 'LA';
            break
        case 3:
            return 'SA';
            break
        case 4:
            return 'ZA';
            break
    }
}

setTimeout( () => {
    for (i = 0; i < last.length; i++) {
        let syllabeGenerated = generateRandomSyllabe();
        let siblingLast = document.getElementById(`${i}`);
        while (siblingLast.textContent == syllabeGenerated) {
            syllabeGenerated = generateRandomSyllabe();
        }
        last[i].innerText = syllabeGenerated;
    }
}, 1)