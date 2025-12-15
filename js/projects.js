document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const projectCards = document.querySelectorAll(".project-card");

  searchInput.addEventListener("keyup", () => {
    const value = searchInput.value.toLowerCase();

    projectCards.forEach(card => {
      const title = card.querySelector("h2").innerText.toLowerCase();
      card.style.display = title.includes(value) ? "block" : "none";
    });
  });
});
