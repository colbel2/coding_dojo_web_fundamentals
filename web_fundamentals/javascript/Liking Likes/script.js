var like = document.querySelector("#heart_likes");

var likecount = 0;

function changeText() {
    likecount = likecount + 1;
    like.innerText = likecount;
}
