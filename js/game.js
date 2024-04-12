const grid = document.querySelector('.grid')

const characters = [
    'amelie',
    'Arthur',
    'kaiser',
    'joui',
    'dante',
    'karina',
    'diabo',
    'erin',
    'thiago fritz',
    'rubens',

]

const createElement = (tag, className) =>{
    const element = document.createElement(tag);
    element.className = className;
    return element;

}

const revealCard = ({target}) => {
    target.parentNode.classList.add('reveal-card')
}

const createCard = (character) => {
    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url('../images/${character}.jpg')`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealCard)

    return card;
}

const loadGamer = () =>{

    const duplicateCharacters = [ ...characters, ...characters ];

    const shuffledArry = duplicateCharacters.sort(() => Math.random() - 0.5);
    

    shuffledArry.forEach((character) =>{
        const card = createCard(character);
        grid.appendChild(card);
    })
}

loadGamer()