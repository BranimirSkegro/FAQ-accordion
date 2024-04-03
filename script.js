function toggleContent(id) {
  const content = document.getElementById(`content${id}`);
  const icon = document.getElementById(`icon${id}`);

  content.classList.toggle("show-text");
  icon.src = content.classList.contains("show-text") ? "./assets/images/icon-minus.svg" : "./assets/images/icon-plus.svg";
}
