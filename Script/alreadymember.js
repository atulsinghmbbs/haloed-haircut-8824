
  let form = document.querySelector("form");
    let signupLS = JSON.parse(localStorage.getItem("signup")) || [];

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        if (signupLS.length === 0) {
            alert("No user till Now")
            return;
        }
        let obj = {
            email: form.email.value,
            password: form.password.value,
        }
        let isSignedin = false;
        signupLS.forEach(function (ele) {
            if (ele.email === obj.email && ele.password === obj.password) {
                isSignedin = true;
                localStorage.setItem("signin", JSON.stringify(ele));
                alert("Sign up Successful")
                window.location.href = "navbar.html"
            }
        })

        if (isSignedin == false) {
            alert("User Doesnot Exist")
        }

    })

