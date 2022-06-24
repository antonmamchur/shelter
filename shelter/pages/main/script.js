const modal = document.querySelector(".modal")
const ourFriendsCards = document.querySelectorAll(".our-friends__slider__card")

learnMoreButton.forEach(button => {
    button.addEventListener('click', () => {
        console.log('hello')
        openModal(modal)
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
}