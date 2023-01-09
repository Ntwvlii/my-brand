const form=document.getElementById('login-form');
const mail=document.getElementById('email');
const password=document.getElementById('pass');

form.addEventListener('submit',e =>{
    e.preventDefault();
    validateInputs();
});
const setError=(element,message)=>
{
    const inputControl=element.parentElement;
    const errorDisplay=inputControl.querySelector('.error');
    errorDisplay.innerText=message;
    inputControl.classList.add('error');
    inputControl.classList.remove('Success');
}
const validateInputs=()=>{
    const mailValue=mail.value.trim();
    const passValue=password.value.trim();
};
