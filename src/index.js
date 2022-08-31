// write your code here
const init =()=>{

    fetchImages();
    fetchComments();


//declare your html tags from here
let likeBtn= document.querySelector('#like-button');
let likeCount=document.querySelector('#like-count')
let form=document.querySelector('form')
let imageDisp = document.getElementById("card-image")
let title=document.getElementById("card-title")





//code to fetch comments from the forms
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    addComments(e.target.comment.value)
    form.reset()
    })

let likes=1;
likeBtn.addEventListener("click",()=>{
        likesCounter();
       
});

//function for adding likes
function likesCounter(){
    likeCount.innerHTML=`${likes++} likes`
}

//a method to add the comments
function addComments(addComments){
    // console.log(`${addComments}`)
    let comment=document.createElement('li')
    comment.textContent= addComments 
    document.querySelector('#comments-list').appendChild(comment)
}


//function to fetch images from the server
function fetchImages(){
    fetch(`http://localhost:3000/images/1`)
    .then(res=>res.json())
    .then(function( data){
        // 
        let imageSrc = data.image;
        imageDisp.src = imageSrc;
        let imgTitle = data.title;
        title.textContent = imgTitle;
    })   
}
///fetch comments from the server 
function fetchComments(){
    fetch(`http://localhost:3000/comments`)
    .then(res=>res.json())
    .then(function(data){
              
       
        data.forEach(comment =>{

        let commentList=document.getElementById("comments-list")
        let li=document.createElement('li')
        li.textContent=comment.content

        commentList.appendChild(li)
                     
        })       
    })   
}

//method to display fetched image from the server
}
document.addEventListener('DOMContentLoaded',init)