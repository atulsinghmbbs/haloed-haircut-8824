let form = document.querySelector("form");
let signupLS = JSON.parse(localStorage.getItem("signup"))||[];

form.addEventListener("submit",function(event) {
    event.preventDefault();

    let obj = {
        email: form.email.value,
        password: form.password.value,
    }

    if ( obj.email == "" || obj.password == "") {
        alert("field empty")
        return;
    }
    else {
        signupLS.push(obj);
        localStorage.setItem("signup", JSON.stringify(signupLS))
        alert("sign up successful")
       window.location.href="Alreadymember.html"
    }
 
})

// function saveData(event){
//     event.preventDefault();
//     console.log("inside")
//     let obj = {
//         email: form.email.value,
//         password: form.password.value,
//     }

//     if ( obj.email == "" || obj.password == "") {
//         alert("field empty")
//         return;
//     }
//     else {
//         signupLS.push(obj);
//         localStorage.setItem("signup", JSON.stringify(signupLS))
//     }
// }