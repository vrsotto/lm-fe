const modal = document.querySelector("#Modal");
// const modalBtn = document.querySelector(".select-box__option");
const listItem = document.querySelector(".select-box__option");
const closeBtn = document.querySelector(".close");

// Events
// modalBtn.addEventListener("click", openModal);

listItem.addEventListener("mousedown", function (event) {
   event.preventDefault();
   modal.style.display = "block";
});

closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", outsideClick);

function openModal() {
   modal.style.display = "block";
}

function closeModal() {
   modal.style.display = "none";
}

// Close If Outside Click
function outsideClick(e) {
   if (e.target == modal) {
      modal.style.display = "none";
   }
}
