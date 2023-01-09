const firebaseConfig = {
    apiKey: "AIzaSyANOQtna0Fb2uPlu9leWwf7X8xb12xoaHU",
    authDomain: "my-brand-24ab1.firebaseapp.com",
    databaseURL: "https://my-brand-24ab1-default-rtdb.firebaseio.com",
    projectId: "my-brand-24ab1",
    storageBucket: "my-brand-24ab1.appspot.com",
    messagingSenderId: "210862322041",
    appId: "1:210862322041:web:57025948a30797b3fcffa8"
  };

  firebase.initializeApp(firebaseConfig);
  var blogDB=firebase.database().ref('blogs');

document.getElementById('publish').addEventListener('submit',publishBlog);
function publishBlog(e){
    e.preventDefault();
    var title=getElementVal("title");
    var desc=getElementVal("desc");
    var name=getElementVal("name");
    var cover=getElementVal("cover");
    var article=getElementVal("article");
    var date=Date();
    console.log(title,desc,name,cover,article,date);
    saveblog(title,desc,name,cover,article,date);
}
const saveblog=(title,desc,name,cover,article,date)=>{
    var newBlog=blogDB.push();
    newBlog.set({
        title:title,
        desc:desc,
        name:name,
        cover:cover,
        article:article,
        date:date

    });
};

const getElementVal= (id)=>{
    return document.getElementById(id).value;
}
