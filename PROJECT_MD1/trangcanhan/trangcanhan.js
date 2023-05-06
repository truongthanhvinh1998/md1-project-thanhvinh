let currentUser = JSON.parse(localStorage.getItem("currentUser"));

let fname = document.getElementById("fname");
let container = document.getElementById("container-fluid");
fname.innerHTML = currentUser.name;
let content = JSON.parse(localStorage.getItem("content"));
for (let i = 0; i < content.length; i++){
 if(content[i].fname === currentUser.name ){
    container.innerHTML += `<div class="container-cardtitle">
    <div class="nav-name">
      <span class="avt"><i class="fa-solid fa-user"></i></span>
      <span>
     ${content[i].fname}
        <i
          class="fa-solid fa-square-check fa-xs"
          style="color: #0c84ed"
        ></i
      ></span>
    </div>

    <div class="nav-name">
      <button class="btn-3cham">
        <i class="fa-solid fa-ellipsis"></i>
      </button>
      <button class="btn-x"><i class="fa-solid fa-x"></i></button>
    </div>
  </div>
  <div class="noidungbaiviet">
  ${content[i].status}
  </div>

  <div class="container-img">
    <img
      src="${content[i].img}"
      alt=""
    />
  </div>
  <div class="like">
    <div>
      <i
        class="fa-solid fa-thumbs-up fa-lg"
       
      ></i
      >1 lượt thích
    </div>
    <div>
      <span>1 người đã coment</span><span> 1 lượt share</span>
    </div>
  </div>
  <div class="facomment">
    <span class="falike"
      ><i class="fa-solid fa-thumbs-up"></i>Thích</span
    >
    <span class="facommentsms">
      <i class="fa-solid fa-comment"></i>Bình luận</span
    >
    <span class="fashare"
      ><i class="fa-sharp fa-solid fa-share"></i>Chia sẻ</span
    >
  </div>
  <div><input type="text" class = "text_comment" placeholder="Viết bình luận"></div`
 }
    
}
let home = document.querySelector('.type-home');
home.onclick = function(){
    window.location.href = "http://127.0.0.1:5500/Trangchu/trangchu.html"
}
