document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });

  var modal = document.getElementById("modal");
  var imgModal = document.getElementById("imgModal");

  if (modal && imgModal) {
    document.querySelectorAll(".card img").forEach(img => {
      img.addEventListener("click", function () {
        modal.style.display = "block";
        imgModal.src = this.src;
      });
    });

    document.querySelector(".close").onclick = function () {
      modal.style.display = "none";
    };
  }


  var contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      let name = document.getElementById("name").value;
      let email = document.getElementById("email").value;
      let message = document.getElementById("message").value;

      if (name && email && message) {
        alert("Mensagem enviada com sucesso!");
        this.reset();
      } else {
        alert("Por favor, preencha todos os campos.");
      }
    });
  }
});
