
document.getElementById("change-text").addEventListener("click", () => {
  document.getElementById("about-gaming").textContent =
    "Gaming improves reflexes, teaches strategy, and offers endless entertainment!";
});

document.getElementById("add-list-item").addEventListener("click", () => {
  const newGame = document.createElement("li");
  newGame.textContent = "Elden Ring";
  document.getElementById("game-list").appendChild(newGame);
});


document.getElementById("remove-item").addEventListener("click", () => {
  const list = document.getElementById("game-list");
  if (list.lastElementChild) {
    list.removeChild(list.lastElementChild);
  }
});
