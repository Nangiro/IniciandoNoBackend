const modalOverlay = document.querySelector('.ModalOverlay')

const cards = document.querySelectorAll('.card')

for (let card of cards){
    card.addEventListener("click", function(){
        const videoId = card.getAttribute("id");
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("iframe").src = `https://www.youtube.com/embed/${videoId}`
    })
}

document.querySelector(".CloseModal").addEventListener("click", function(){
    modalOverlay.classList.remove("active")
    modalOverlay.querySelector("iframe").src = ""
})