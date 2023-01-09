


const blog=document.querySelector('.blogs');

function createCard([img,title,desc,author,date]){
    let code=`<div class="card" onclick="location.href=('view.html');">
    <img src="${img}" alt="pICTURE">
    <h4>${title}</h4>
    <p>${desc}</p>
    <h5><span>Published by <em>${author}</em> on </span><span>${date}</span></h5>
    </div> `;

    blog.innerHTML+=code;

}
let blog1=[
    "file:///C:/Users/HP/Desktop/Andela/My%20Brand/images/portfolio/gallery/g-beetle.jpg",
    "My first bLog",
    "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. ",
    "Aubin Ntwali",
    "12/12/22"
];
createCard(blog1);
createCard(blog1);
createCard(blog1);
createCard(blog1);
createCard(blog1);
createCard(blog1);







