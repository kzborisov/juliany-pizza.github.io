// Pizza menu
const card_pizza = document.querySelector('#btn-pizza .flip-card');
const modal_pizza = document.querySelector('#modal-pizza');
const span_pizza = document.querySelector('#menu .modal-pizza .close');
const card_pasta = document.querySelector('#btn-pasta .flip-card');
const modal_pasta = document.querySelector('#modal-pasta');
const span_pasta = document.querySelector('#menu .modal-pasta .close');
const card_salad = document.querySelector('#btn-salad .flip-card');
const modal_salad = document.querySelector('#modal-salad');
const span_salad = document.querySelector('#menu .modal-salad .close');


card_pizza.addEventListener('click', () => {
    modal_pizza.style.display = "block";
});

// Close when clicked on close(x)
span_pizza.onclick = function() {
    modal_pizza.style.display = "none";
};

card_pasta.addEventListener('click', () => {
    modal_pasta.style.display = "block";
});

// Close when clicked on close(x)
span_pasta.onclick = function() {
    modal_pasta.style.display = "none";
};

card_salad.addEventListener('click', () => {
    modal_salad.style.display = "block";
});

// Close when clicked on close(x)
span_salad.onclick = function() {
    modal_salad.style.display = "none";
};


// Close the modal if clicked outside
window.onclick = function(event) {
    if (event.target == modal_pizza) {
        modal_pizza.style.display = "none";
    }
    else if (event.target == modal_pasta) {
        modal_pasta.style.display = "none";
    }
    else if (event.target == modal_salad) {
        modal_salad.style.display = "none";
    }
}