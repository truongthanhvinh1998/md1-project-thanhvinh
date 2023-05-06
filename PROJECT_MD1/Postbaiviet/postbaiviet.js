let modalPost = document.getElementById("createPostModal");

let btn = document.getElementById("createPostBtn");

let span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modalPost.style.display = "block";
};

span.onclick = function () {
  modalPost.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modalPost) {
    modalPost.style.display = "none";
  }
};
