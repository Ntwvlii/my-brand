const reply=document.querySelector('.comments');
function display(author,comment){
    let code=`
    <div class="cards">
       
        <div class="comment">
            
            <h5>${author}</h5>
            <h7>${comment}</h7>
                <hr>
        </div>
        
    </div>`;
reply.innerHTML+=code;
};
let blog=[
    "Aubin Ntwali",
    "My new bLog",
];
display(blog);
display(blog);

