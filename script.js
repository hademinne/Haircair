// Initialize Swiper
let swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
});
// when i apply DRY TO THE FIRST CODE
function setupModal(modalId, modalLinkId, closeBtnClass) {
  var modal = document.getElementById(modalId);
  var modalLink = document.getElementById(modalLinkId);
  var closeBtn = document.getElementsByClassName(closeBtnClass)[0];

  modalLink.addEventListener("click", function (event) {
    event.preventDefault();
    modal.style.display = "block";
  });

  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
}

setupModal("modal", "modal-link", "close-btn");
setupModal("modal-", "modal-link-", "close-btn-");
setupModal("modal2", "modal-link2", "close-btn2");
