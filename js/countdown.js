// VENTANA MODAL

//ASISTENCIA
const showPopup = document.querySelector('.show-popup');
//REGALO
const showPopupDos = document.querySelector('.show-popup-dos');
//DRESS CODE
const showPopupTres = document.querySelector('.show-popup-tres');


//CONTENEDOR
const popupContainer = document.querySelector('.popup-container');
//CONTENEDOR
const popupContainerDos = document.querySelector('.popup-container-dos');
//BOTON CIERRE
const closeBtn = document.querySelector('.close-btn');
//BOTON CIERRE
const closeBtnDos = document.querySelector('.close-btn-dos');



//ASISTENCIA


//REGALO
showPopupDos.onclick = (e) => {
    e.preventDefault();
    popupContainer.classList.add('active');
}

//DRESS CODE
showPopupTres.onclick = (e) => {
    e.preventDefault();
    popupContainerDos.classList.add('active');
}


//BOTON CIERRE POPUP
closeBtn.onclick = (e) => {
    e.preventDefault();
    popupContainer.classList.remove('active');
}

closeBtnDos.onclick = (e) => {
    e.preventDefault();
    popupContainerDos.classList.remove('active');
}


// This is an example with default parameters

simplyCountdown('#cuenta', {
    year: 2024, // required
    month: 11, // required
    day: 23, // required
    hours: 21, // Default is 0 [0-23] integer
    minutes: 30, // Default is 0 [0-59] integer
    seconds: 0, // Default is 0 [0-59] integer
    words: { //words displayed into the countdown
        days: {
            singular: 'Dia',
            plural: 'Dias'
        },
        hours: {
            singular: 'Hora',
            plural: 'Horas'
        },
        minutes: {
            singular: 'Min',
            plural: 'Min'
        },
        seconds: {
            singular: 'Seg',
            plural: 'Seg'
        }
    },
    plural: true, //use plurals
    inline: false, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
    inlineClass: 'simply-countdown-inline', //inline css span class in case of inline = true
    // in case of inline set to false
    enableUtc: false, //Use UTC or not - default : false
    onEnd: function () {
        document.getElementById('portada').classList.add('oculta');
        return;
    }, //Callback on countdown end, put your own function here


    refresh: 1000, // default refresh every 1s
    sectionClass: 'simply-section', //section css class
    amountClass: 'simply-amount', // amount css class
    wordClass: 'simply-word', // word css class
    zeroPad: false,
    countUp: false
});

// Also, you can init with already existing Javascript Object.
let myElement = document.querySelector('.my-countdown');
simplyCountdown(myElement, {
    /* options */
});

let multipleElements = document.querySelectorAll('.my-countdown');
simplyCountdown(multipleElements, {
    /* options */
});


