document.addEventListener("DOMContentLoaded", function () {
  const accordionBtns = document.querySelectorAll(".accordion-btn");

  accordionBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const isActive = this.classList.contains("active");

      // Toggle active class on button
      this.classList.toggle("active");

      // Toggle accordion description visibility
      const accordionDescription = this.nextElementSibling;
      const plusIcon = this.querySelector(".bg-plus");
      const minusIcon = this.querySelector(".bg-minus");

      if (isActive) {
        // Close accordion
        accordionDescription.style.maxHeight = null;

        // Show plus icon, hide minus icon
        plusIcon.style.display = "flex";
        minusIcon.style.display = "none";
      } else {
        // Open accordion
        accordionDescription.style.maxHeight =
          accordionDescription.scrollHeight + "px";

        // Show minus icon, hide plus icon
        plusIcon.style.display = "none";
        minusIcon.style.display = "flex";
      }
    });
  });
});
