// Lấy đối tượng button hoặc icon
let modalToggle = document.getElementById("modal-toggle-chitiet2");

// Lấy đối tượng modal
let modals = document.querySelector("#modal"); // modal chi tiet
// console.log('modals: ', modals);
let btnClose = document.getElementById("btn-close");
// console.log('btnClose: ', btnClose);
let body = document.body;
// console.log('body: ', body);

modalToggle.onclick = function () {
  console.log("Modal opened");
  modals.style.display = "block";
  body.style.backgroundColor = "rgba(0,0,0,0.4)";
};
btnClose.onclick = function () {
  console.log("Modal closed");
  modals.style.display = "none";
  body.style.backgroundColor = "white";
};
window.onclick = function(event) {
    if (event.target == body) {
      console.log("Clicked outside modal");
      modals.style.display = "none";
      body.style.backgroundColor = "white";
    }
};
