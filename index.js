const defaultCard = document.querySelector("#default-card");
const thankYouCard = document.querySelector("#thank-you-card");
const submitButton = document.querySelector("#submit-button");
const ratingNumberList = document.querySelectorAll(".rating__number");
let selected;

function ratingClickState(e) {
    if (!selected) {
        selected = e.currentTarget;
    } else {
        selected.style.color = null;
        selected.style.background = null;
        selected = e.currentTarget;
    }

    selected.style.color = "white";
    selected.style.background = "hsl(217, 12%, 63%)";
}

function submitRating() {
    if (!selected) {
        return
    }

    let userRatingText = document.querySelector("#thank-you-card__user-rating").children[0];

    userRatingText.textContent = `You selected ${selected.textContent} out of 5`;
    defaultCard.classList.toggle("card--display-none");
    thankYouCard.classList.toggle("card--display-none");
}

ratingNumberList.forEach(element => {
    element.addEventListener("click", ratingClickState)
});

submitButton.addEventListener("click", submitRating);