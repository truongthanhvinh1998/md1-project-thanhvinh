let contents = JSON.parse(localStorage.getItem("content"));

// massage
// let data = [
//   {
//     cmtName: "vinh",
//     comment: "noi dung cmt",
//   },
//   {
//     cmtName: "thanh ",
//     comment: "noi dung cmt 2",
//   },
// ];
// localStorage.setItem("coments", JSON.stringify(data));

let currentUser = JSON.parse(localStorage.getItem("currentUser")) || [];
// console.log(currentUser);
// sua ten theo ten dang nhap

let fname = document.getElementById("use-name");
let fname1 = document.getElementById("use-name1");
checkUsername = true;

fname.innerHTML = currentUser.name;
fname1.innerHTML = currentUser.name;

//
let closeBtn = document.getElementById("close-btn");
let messageModal = document.getElementById("message-modal");
let msgBtn = document.getElementById("msg");
// console.log(msgBtn);

closeBtn.onclick = function () {
  if ((messageModal.style.display = "block")) {
    messageModal.style.display = "none";
  }
};
msgBtn.onclick = function () {
  if ((messageModal.style.display = "none")) {
    messageModal.style.display = "block";
  }
};
//phan story
let tinOnclick = document.getElementById("taotin");
let story = document.getElementById("container");
let reelsonclick = document.getElementById("reels");
let taotin = document.getElementById("newcontent1");

reelsonclick.onclick = function () {
  if ((story.style.display = "none")) {
    story.style.display = "block";
    taotin.style.display = "none";
  }
};
tinOnclick.onclick = function () {
  if ((taotin.style.display = "none")) {
    taotin.style.display = "block";
    taotin.style.display = "flex";
    story.style.display = "none";
  }
};

// noi dung bai viet

// let content = [
//   {
//     fname: " VTV24",
//     status:
//       "Sáng 24/4, ông Phùng Huy Vinh, Trưởng phòng Kinh tế thị xã Sơn Tây (Hà Nội) xác nhận con rùa mai mềm thuộc loài giải Swinhoe (còn gọi là rùa Hoàn Kiếm) đã chết, nổi lên mặt nước ở hồ Đồng Mô, thị xã Sơn Tây",
//     : "https://scontent.fhan3-1.fna.fbcdn.net/v/t39.30808-6/343403523_808800660607080_7026012675302702247_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=FRrWNNr7_nIAX-g8UB_&_nc_ht=scontent.fhan3-1.fna&oh=00_AfCfVo9DGrtSt3qsn0Y5fWV9c9T4LprKccIfV32qb6tsJg&oe=644AA9DA",
//   },
//   {
//     fname: " VTV24",
//     status:
//       "Sáng 24/4, ông Phùng Huy Vinh, Trưởng phòng Kinh tế thị xã Sơn Tây (Hà Nội) xác nhận con rùa mai mềm thuộc loài giải Swinhoe (còn gọi là rùa Hoàn Kiếm) đã chết, nổi lên mặt nước ở hồ Đồng Mô, thị xã Sơn Tây",
//     img: "https://scontent.fhan3-1.fna.fbcdn.net/v/t39.30808-6/343403523_808800660607080_7026012675302702247_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=FRrWNNr7_nIAX-g8UB_&_nc_ht=scontent.fhan3-1.fna&oh=00_AfCfVo9DGrtSt3qsn0Y5fWV9c9T4LprKccIfV32qb6tsJg&oe=644AA9DA",
//   },
//   {
//     fname: " VTV24",
//     status:
//       "Sáng 24/4, ông Phùng Huy Vinh, Trưởng phòng Kinh tế thị xã Sơn Tây (Hà Nội) xác nhận con rùa mai mềm thuộc loài giải Swinhoe (còn gọi là rùa Hoàn Kiếm) đã chết, nổi lên mặt nước ở hồ Đồng Mô, thị xã Sơn Tây",
//     img: "https://scontent.fhan3-1.fna.fbcdn.net/v/t39.30808-6/343403523_808800660607080_7026012675302702247_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=FRrWNNr7_nIAX-g8UB_&_nc_ht=scontent.fhan3-1.fna&oh=00_AfCfVo9DGrtSt3qsn0Y5fWV9c9T4LprKccIfV32qb6tsJg&oe=644AA9DA",
//   },
//   {
//     fname: " VTV24",
//     status:
//       "Sáng 24/4, ông Phùng Huy Vinh, Trưởng phòng Kinh tế thị xã Sơn Tây (Hà Nội) xác nhận con rùa mai mềm thuộc loài giải Swinhoe (còn gọi là rùa Hoàn Kiếm) đã chết, nổi lên mặt nước ở hồ Đồng Mô, thị xã Sơn Tây",
//     img: "https://scontent.fhan3-1.fna.fbcdn.net/v/t39.30808-6/343403523_808800660607080_7026012675302702247_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=FRrWNNr7_nIAX-g8UB_&_nc_ht=scontent.fhan3-1.fna&oh=00_AfCfVo9DGrtSt3qsn0Y5fWV9c9T4LprKccIfV32qb6tsJg&oe=644AA9DA",
//   },
// ];
// localStorage.setItem("content", JSON.stringify(content));
// hien thi tong so like
let resultsLikes = localStorage.getItem("likes");

let sumLike = document.getElementById("sumlike");
let comments = JSON.parse(localStorage.getItem("comments"));

let contentBox = document.getElementById("container-fluid");
function renderPosts() {
  for (let i = contents.length - 1; i >= 0; i--) {
    // console.log(contents[i].fname);
    // console.log(contents[i].status);
    // console.log(contents[i].img);
    // console.log(contents[i].id);
    contentBox.innerHTML += `
  <div class="container-fluid" id="container-fluid">
    <div class="container-cardtitle">
      <div class="nav-name">
        <span><i class="fa-solid fa-user fa-xl"></i></span>
        <span>
          ${contents[i].fname}
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
        <button class="btn-x" id= "${
          i + 1
        }"><i class="fa-solid fa-x"></i></button>
      </div>
    </div>
    <div>
    ${contents[i].status}
    </div>

    <div class="container-img">
      <img
        src="${contents[i].img}"
        alt=""
      />
    </div>
    <div class="like">
      <div id = "sumlike">
        <i
          class="fa-solid fa-thumbs-up fa-lg"
     
        ></i
        >${resultsLikes} lượt thích
      </div>
      <div>
        <span></span><span> </span>
      </div>
    </div>
    <div class="noidungcmt" id = "noidungcmt">
    <div></div>
    </div>

    <div class="facomment">
      <span class="falike" id = "falike"
        ><i class="fa-solid fa-thumbs-up"></i>Thích</span
      >
      <span class="facommentsms modal-toggle-chitiet2" id="${i}">
        <i class="fa-solid fa-comment" ></i>Bình luận</span
      >
      <span class="fashare"
        ><i class="fa-sharp fa-solid fa-share"></i>Chia sẻ</span
      >
    </div>
  </div>`;

    // let id =  contents[i].id
  }
}

renderPosts();

// isLiked = false;
// console.log(comments.length);

//post bai viet
// Get the modal
let modal = document.getElementById("createPostModal");
let btn = document.getElementById("createPostBtn");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};
span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
let formPost = document.getElementById("form-post");
let button = document.getElementById("submit-post");
let newPosts = document.getElementById("new-posts");
// console.log(newPosts)
let i = 0;
formPost.onsubmit = function (e) {
  e.preventDefault();
  let content1 = formPost.content.value;

  {
    let img = formPost.img.value;

    // console.log(users[key].name)

    newPosts.innerHTML += `<div class="container-cardtitle " >
      <div class="nav-name">
        <span><i class="fa-solid fa-user  fa-xl"></i></span>
        <span>
          ${currentUser.name}
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
        <button class="btn-x" id="${
          i + 1
        }"><i class="fa-solid fa-x" class="btn-x" ></i></button>
      </div>
    </div>
    <div>
      ${content1}
    </div>

    <div class="container-img">
      <img
        src="${img}"
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
        <span></span><span> </span>
      </div>
    </div>
    <div>binh luan cua ban</div>
    <div class="facomment">
      <span class="falike" id= "falike"
        ><i class="fa-solid fa-thumbs-up"></i>Thích</span
      >
      <span class="facommentsms modal-toggle-chitiet2">
        <i class="fa-solid fa-comment"></i>Bình luận
      </span>

      <span class="fashare"
        ><i class="fa-sharp fa-solid fa-share"></i>Chia sẻ</span
      >
    </div>`;

    contents.push({
      fname: `${currentUser.name}`,
      status: `${content1}`,
      img: `${img}`,
      id: `${contents.length + 1}`,
      comment: [],
      likes: [],
      dislikes: [],
    });
    i++;
    // console.log(contents);
    localStorage.setItem("content", JSON.stringify(contents));
    renderPosts();
    location.reload();
  }
};

// log out
let logOut = document.getElementById("logout");
logOut.onclick = function () {
  window.location.href = "http://127.0.0.1:5500/Dangki,dangnhap/dangnhap.html";
};

// xoa bai viet
let nav = document.querySelectorAll(".nav-name");

nav.forEach((x) => {
  x.onclick = function (e) {
    if (e.target.classList.contains("btn-x")) {
      contents.splice(e.target.getAttribute("id") - 1, 1);

      localStorage.setItem("content", JSON.stringify(contents));
      alert("Xóa bài viết thành công !!");

      setTimeout(function () {
        location.reload();
      }, 1000);
    }
  };
});

// trang ca nhan
let songPage = document.getElementById("songPage");
songPage.onclick = function () {
  window.location.href = "http://127.0.0.1:5500/trangcanhan/trangcanhan.html";
};
// modal chi tiet bai viet
let modalToggle = document.querySelectorAll(".modal-toggle-chitiet2");

// Lấy đối tượng modal
let modals = document.querySelector("#modal"); // modal chi tiet
// console.log('modals: ', modals);

let overlay = document.getElementById("overlay");
let body = document.body;
let content = JSON.parse(localStorage.getItem("content"));

let modalDetails = document.getElementById("modal");

modalToggle.forEach((x) => {
  x.onclick = function () {
    modals.style.display = "block";
    overlay.style.display = "block";

    modalDetails.innerHTML = ` <div class="header-chitiet">
 <div></div>
 <div>Bài viết của <span> ${content[x.id].fname}</span></div>
 <div>
   <button class="btn-xmodal" id="btn-close"><i class="fa-solid fa-x fa-ml"></i></button>
 </div>
</div>
<div class="box-content-chitiet" id = "box-content-chitiet">
 <div class="container-cardtitle-chitiet">
   <div class="nav-name">
     <div class="name-content">
       <span><i class="fa-solid fa-user  fa-xl"></i></span>
       <span>
       ${content[x.id].fname}
         <i
           class="fa-solid fa-square-check fa-xs"
        
         ></i
       ></span>
     </div>
     <div class="time-content"></div>
   </div>

   <div class="nav-name-chitiet">
     <button class="btn-3cham">
       <i class="fa-solid fa-ellipsis fa-xl"></i>
     </button>
   </div>
 </div>
 <div>
 ${content[x.id].status}
 </div>

 <div class="container-img">
   <img
     src="${content[x.id].img}"
     alt=""
   />
 </div>
 <div class="like">
   <div>
     <i class="fa-solid fa-thumbs-up fa-lg" ></i>
   <span id = "luotThich">${resultsLikes}</span>lượt thích
   </div>
   <div><span></span><span> </span></div>
 </div>
 <div class="facomment-chitiet">
   <span class="falike-chitiet" id="falike-chitiet"><i class="fa-solid fa-thumbs-up"></i>Thích</span>
   <span class="facommentsms-chitiet">
     <i class="fa-solid fa-comment"></i>Bình luận</span
   >
   <span class="fashare-chitiet"
     ><i class="fa-sharp fa-solid fa-share"></i>Chia sẻ</span
   >
 </div>
 <div class="box_content">
   <div class="box-content-avatar">
   
   </div>
   <div class="box-content-comment" id ="${content[x.id].id}" >
     
   </div>

 </div>
</div>
<form id = "addcmt"><div class="footer">
<i class="fa-solid fa-user  fa-xl  "></i>
<span class="comment_content">
  <textarea name="comment" id = "textarea"></textarea>
</span>
</div>
<button class ="dang"> đăng</button></form>
`;


    // coment
    

    let comments = JSON.parse(localStorage.getItem("coments"));
    let noidungcmt = document.getElementById(`${content[x.id].id}`);
 ;
    for (let i =content.length-1 ; i >=0 ; i--) {
      console.log(noidungcmt.id); //
      console.log(content[i].id); //
      if( noidungcmt.id == content[i].id) {
        noidungcmt.innerHTML = "";
        // console.log(comments[0].cmtName);
        for (let i = 0; i < comments.length; i++) {
    
          noidungcmt.innerHTML += `<div  id ="${i}"> <div class="namecmt"> <i class="fa-solid fa-user  fa-xl"></i> ${comments[i].cmtName}</div><div class = "cmt1"> ${comments[i].comment}</div>   <div class="box-content-like">
          <span>thích</span>
          <span>phản hồi</span>
          <span  class = "delete-cmt">xóa</span>
        </div></div>`;
        }
        let addCmt = document.getElementById("addcmt");
        addCmt.onsubmit = function (event) {
          event.preventDefault();
          comments.unshift({
            cmtName: currentUser.name,
            comment: addCmt.comment.value,
          });
          localStorage.setItem("coments", JSON.stringify(comments));
          noidungcmt.innerHTML = "";
          // console.log(comments[0].cmtName);

          for (let i = 0; i < comments.length; i++) {
            noidungcmt.innerHTML += `<div id ="${i}"> <div class="namecmt"> <i class="fa-solid fa-user  fa-xl"></i> ${comments[i].cmtName}</div>  <div class = "cmt1"> ${comments[i].comment} </div>  <div class="box-content-like">
          <span>thích</span>
          <span>phản hồi</span>
          <span class = "delete-cmt">xóa</span>
        </div></div>`;
          }
          let textarea = document.getElementById("textarea");
          // console.log(textarea);
          textarea.value = "";
        };
        noidungcmt.onclick = function (e) {
console.log(comments.cmtName);
console.log(currentUser.name);
//xoa cmt

          if (e.target.classList.contains("delete-cmt") && currentUser.name==comments[i].cmtName) {
            let id = e.target.parentElement.parentElement.id;
            comments.splice(id, 1);
            localStorage.setItem("coments", JSON.stringify(comments));
            noidungcmt.innerHTML = "";
            // console.log(comments[0].cmtName);
            for (let i = 0; i < comments.length; i++) {
              noidungcmt.innerHTML += `<div id ="${i}"> <div class="namecmt"> <i class="fa-solid fa-user  fa-xl"></i> ${comments[i].cmtName}</div>  <div class = "cmt1"> ${comments[i].comment} </div>  <div class="box-content-like">
          <span>thích</span>
          <span>phản hồi</span>
          <span class = "delete-cmt">xóa</span>
        </div></div>`;
            }
          }
         
        };
        let btnClose = document.getElementById("btn-close");
        btnClose.onclick = function () {
          modals.style.display = "none";
          overlay.style.display = "none";
          location.reload();
        };
        window.onclick = function (event) {
          if (event.target == overlay) {
            modals.style.display = "none";
            overlay.style.display = "none";
            location.reload();
          }
        };
      }
      }

    //

    noidungcmt.innerHTML = "";
    // console.log(comments[0].cmtName);
    for (let i = 0; i < comments.length; i++) {
   
      noidungcmt.innerHTML += `<div  id ="${i}"> <div class="namecmt"> <i class="fa-solid fa-user  fa-xl"></i> ${comments[i].cmtName}</div><div class = "cmt1"> ${comments[i].comment}</div>   <div class="box-content-like">
      <span>thích</span>
      <span>phản hồi</span>
      <span  class = "delete-cmt">xóa</span>
    </div></div>`;
    }
    let addCmt = document.getElementById("addcmt");
    addCmt.onsubmit = function (event) {
      event.preventDefault();
      comments.unshift({
        cmtName: currentUser.name,
        comment: addCmt.comment.value,
      });
      localStorage.setItem("coments", JSON.stringify(comments));
      noidungcmt.innerHTML = "";
      console.log(comments[0].cmtName);
      for (let i = 0; i < comments.length; i++) {
        noidungcmt.innerHTML += `<div id ="${i}"> <div class="namecmt"> <i class="fa-solid fa-user  fa-xl"></i> ${comments[i].cmtName}</div>  <div class = "cmt1"> ${comments[i].comment} </div>  <div class="box-content-like">
      <span>thích</span>
      <span>phản hồi</span>
      <span class = "delete-cmt">xóa</span>
    </div></div>`;
      }
      let textarea = document.getElementById("textarea");
      // console.log(textarea);
      textarea.value = "";
    };
    noidungcmt.onclick = function (e) {
      if (e.target.classList.contains("delete-cmt")) {
        let id = e.target.parentElement.parentElement.id;
        comments.splice(id, 1);
        localStorage.setItem("coments", JSON.stringify(comments));
        noidungcmt.innerHTML = "";
        // console.log(comments[0].cmtName);
        for (let i = 0; i < comments.length; i++) {
          noidungcmt.innerHTML += `<div id ="${i}"> <div class="namecmt"> <i class="fa-solid fa-user  fa-xl"></i> ${comments[i].cmtName}</div>  <div class = "cmt1"> ${comments[i].comment} </div>  <div class="box-content-like">
      <span>thích</span>
      <span>phản hồi</span>
      <span class = "delete-cmt">xóa</span>
    </div></div>`;
        }
      }
    };
    let btnClose = document.getElementById("btn-close");
    btnClose.onclick = function () {
      modals.style.display = "none";
      overlay.style.display = "none";
      location.reload();
    };
    window.onclick = function (event) {
      if (event.target == overlay) {
        modals.style.display = "none";
        overlay.style.display = "none";
        location.reload();
      }
    };
    // phan like bai viet trong modal

    // let boxContent = document.getElementById("box-content-chitiet");
    // console.log(boxContent)

    // let likess = document.getElementById("luotThich");
    // let storedLikes = localStorage.getItem("likes");
    // let likes = storedLikes ? parseInt(storedLikes) : 0;

    // // Lấy giá trị của biến isLiked từ localStorage
    // let isLiked = localStorage.getItem("isLiked") === "true";

    // let likeBtn = document.getElementById("falike-chitiet");
    // likeBtn.onclick = function () {
    //   if (isLiked) {
    //     if (likes > 0) {
    //       // Kiểm tra nếu likes còn lớn hơn 0
    //       likes -= 1;
    //       localStorage.setItem("likes", likes);
    //     }
    //     isLiked = false;
    //     likess1.innerHTML = ` <i class="fa-solid fa-thumbs-up"></i>${likes} lượt thích`;
    //     localStorage.setItem("isLiked", isLiked);
    //   } else {
    //     likes += 1;
    //     localStorage.setItem("likes", likes);
    //     isLiked = true;
    //     likess1.innerHTML = ` <i class="fa-solid fa-thumbs-up"></i>${likes} lượt thích`;
    //     localStorage.setItem("isLiked", isLiked);
    //   }

    //   console.log("Số lượt like hiện tại:", likes);

    //   if (likes > 0) {
    //     likeBtn.innerHTML = `<i class="fa-solid fa-thumbs-up"></i> Thích`;
    //   }

    //   if (likes <= 0) {
    //     likeBtn.innerHTML = ` <i class="fa-solid fa-thumbs-up"></i> Đã thích`;
    //   }
    // };
  };
});

//like bai viet ngoai

let likess1 = document.getElementById("sumlike");
let storedLikes = localStorage.getItem("likes");
// console.log("storedLikes: ", storedLikes);
let likes = storedLikes ? JSON.parse(storedLikes) : 0;
// console.log("likes: ", likes);

let storedIsLiked = localStorage.getItem("isLiked");
let isLiked = storedIsLiked ? JSON.parse(storedIsLiked) : false;

// Cập nhật nội dung của phần tử HTML hiển thị số lượng lượt thích
likess1.innerHTML = ` <i class="fa-solid fa-thumbs-up"></i>${likes} lượt thích`;

// Cập nhật nội dung của nút "Thích" hoặc "Đã thích"
let falikeBtn = document.getElementById("falike");
if (likes > 0) {
  falikeBtn.innerHTML = ` <i class="fa-solid fa-thumbs-up"></i> Đã thích`;
} else {
  falikeBtn.innerHTML = `<i class="fa-solid fa-thumbs-up"></i> Thích`;
}

falikeBtn.onclick = function () {
  if (!isLiked) {
    // Nếu chưa thích thì tăng số lượng likes
    likes += 1;
    //va dua len local
 
    isLiked = true;
    likess1.innerHTML = ` <i class="fa-solid fa-thumbs-up"></i>${likes} lượt thích`;
    localStorage.setItem("isLiked", JSON.stringify(isLiked));
    localStorage.setItem("likes", JSON.stringify(likes));
  
  } else {
    // Ngược lại, nếu đã thích thì giảm số lượng likes nếu có likes
    if (likes > 0) {
      likes -= 1;
   
    }
    isLiked = false;
    likess1.innerHTML = ` <i class="fa-solid fa-thumbs-up"></i>${likes} lượt thích`;
    localStorage.setItem("likes", JSON.stringify(Number(likes)));
    localStorage.setItem("isLiked", JSON.stringify(isLiked));
  
  }
  console.log("Số lượt like hiện tại:", likes);
  if (likes > 0) {
    falikeBtn.innerHTML = ` <i class="fa-solid fa-thumbs-up"></i> Đã thích`;
  }
  if (likes <= 0) {
    falikeBtn.innerHTML = `<i class="fa-solid fa-thumbs-up"></i> Thích`;
  }
};
