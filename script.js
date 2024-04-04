let currentlyOpenId = null;

function toggleContent(id) {
  const content = document.getElementById(`content${id}`);
  const icon = document.getElementById(`icon${id}`);

  if (currentlyOpenId && currentlyOpenId !== id) {
    document.getElementById(`content${currentlyOpenId}`).classList.remove("show-text");
    document.getElementById(`icon${currentlyOpenId}`).src = "./assets/images/icon-plus.svg";
  }

  currentlyOpenId = currentlyOpenId === id ? null : id;

  content.classList.toggle("show-text");
  icon.src = content.classList.contains("show-text") ? "./assets/images/icon-minus.svg" : "./assets/images/icon-plus.svg";
}
