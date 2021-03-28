const reviewPanel = document.getElementById('review-panel');
const ratingsContainer = document.getElementById('ratings-container');
const ratings = document.querySelectorAll('.rating');
const submitBtn = document.getElementById('submit-btn');
let review ='';

ratingsContainer.addEventListener('click', e => {
    ratings.forEach(rating => {
        if (e.target === rating || e.target.parentElement === rating) {
            setActiveRating(rating);
        }
    })
});

submitBtn.addEventListener('click', () => {
    if (review !== '') {
        reviewPanel.innerHTML = `
            <i class="fas fa-heart"></i>git 
            <p>Thank You!</p>
            <p>Feedback: ${review}</p>
            <p>We'll use your feedback to improve our customer support.</p>`
    }
})

function setActiveRating(rating) {
    ratings.forEach(rating => rating.classList.remove('active'));
    rating.classList.add('active');
    review = rating.querySelector('small').innerHTML;
}
