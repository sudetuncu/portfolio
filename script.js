function showSection(id) {
  document.querySelectorAll(".content").forEach(sec => {
    sec.classList.add("hidden");
  });
  document.getElementById(id).classList.remove("hidden");
}
