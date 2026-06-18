// Welcome Message

console.log(
"Children's Creative Art Showcase Portal Loaded"
);

// Like Artwork

function likeArtwork(button){

let count =
button.querySelector(".like-count");

count.innerText =
parseInt(count.innerText)+1;

}

// Share Artwork

function shareArtwork(title){

navigator.clipboard.writeText(
window.location.href
);

alert(
title + " shared successfully!"
);

}

// Competition Registration

function registerCompetition(name){

alert(
"You have successfully registered for " +
name
);

}

// Notification Popup

function showNotification(message){

const notification =
document.createElement("div");

notification.innerHTML = message;

notification.style.position = "fixed";
notification.style.top = "20px";
notification.style.right = "20px";
notification.style.background = "#6c63ff";
notification.style.color = "white";
notification.style.padding = "15px";
notification.style.borderRadius = "10px";
notification.style.zIndex = "9999";

document.body.appendChild(
notification
);

setTimeout(()=>{

notification.remove();

},3000);

}

// Forum Post

function addPost(){

const content =
document.getElementById(
"forumPost"
).value;

if(content === ""){

alert("Enter discussion");

return;

}

const post =
document.createElement("div");

post.className = "post";

post.innerHTML = `

<h5>New Discussion</h5>

<p>${content}</p>

<div>
👍 0 Likes |
💬 0 Comments
</div>

`;

document.getElementById(
"forumContainer"
).prepend(post);

document.getElementById(
"forumPost"
).value="";

showNotification(
"Discussion Posted Successfully"
);

}

// Logout

function logout(){

localStorage.removeItem(
"token"
);

window.location.href =
"login.html";

}

// Authentication Check

function checkLogin(){

const token =
localStorage.getItem("token");

if(!token){

alert("Please Login");

window.location.href =
"login.html";

}

}

// Artwork Upload Preview

function previewImage(event){

const image =
document.getElementById(
"preview"
);

image.src =
URL.createObjectURL(
event.target.files[0]
);

image.style.display="block";

}

// Certificate Download

function downloadCertificate(){

window.print();

}

// Winner Announcement

function announceWinner(name){

showNotification(
"🏆 Congratulations " +
name +
"!"
);

}

// Page Load

window.onload = ()=>{

console.log(
"Portal Ready"
);

};
function previewPost(event){

const file =
event.target.files[0];

if(!file) return;

const reader =
new FileReader();

reader.onload = function(e){

const preview =
document.getElementById("preview");

preview.src =
e.target.result;

preview.style.display =
"block";

}

reader.readAsDataURL(file);

}

function createPost(){

const caption =
document.getElementById("postCaption").value;

const preview =
document.getElementById("preview");

if(caption === "" && !preview.src){
alert("Add image or caption");
return;
}

const artwork = {
image: preview.src,
caption: caption
};

let artworks =
JSON.parse(localStorage.getItem("artworks")) || [];

artworks.push({
image: preview.src,
caption: caption
});

localStorage.setItem(
"artworks",
JSON.stringify(artworks)
);

alert("Artwork Posted Successfully!");

location.reload();

}