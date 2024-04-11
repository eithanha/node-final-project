window.addEventListener("load", ()=>{
    
    const form = document.getElementById("contactForm");
    const txtFirstName = form.querySelector("[name=firstName]");
    const txtlastName = form.querySelector("[name=lastName]");
    const txtEmail = form.querySelector("[name=email]");
    const txtComments = form.querySelector("[name=comments]");

    console.log(txtComments, txtEmail, txtFirstName, txtlastName);

    txtFirstName.focus();

    const vFirstName = form.querySelector("#vFirstName");
    const vLastName = form.querySelector("#vLastName");
    const vEmail = form.querySelector("#vEmail");
    const vComments = form.querySelector("#vComments");

    console.log(vFirstName, vComments, vEmail, vLastName);

    form.addEventListener("submit", (evt)=>{
        if(validate()){
            console.log("SEND...")
        }else{
            evt.preventDefault();
        }
    })

    const validate = ()=>{
        //debugger;
        let isValid = true;

        let focusOn = null;

        form.querySelectorAll(".validation").forEach((span)=>{span.innerHTML= ""});

        //validate first name
        if(txtFirstName.value == ""){
            isValid = false;
            vFirstName.innerHTML = "First name is required";
            focusOn = txtFirstName;
        }

        if(txtlastName.value == ""){
            isValid = false;
            vLastName.innerHTML = "Last name is required";
            focusOn = focusOn || txtlastName;
        }

        if(!txtEmail.value){
            isValid = false;
            vEmail.innerHTML = "Email is required";
            focusOn = focusOn || txtEmail;
        }else if(validateEmailAddress(txtEmail.value) == false){
            isValid = flase;
            vEmail.innerHTML = "Email address is not valid";
            focusOn = focusOn || txtEmail;
        }

        if(!txtComments.value){
            isValid = false;
            vComments.innerHTML = "Comments are required";
            focusOn = focusOn || txtComments;
        }

        return isValid;

    };

    function validateEmailAddress(email){
        var regExp = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
          return regExp.test(email);
    }
})