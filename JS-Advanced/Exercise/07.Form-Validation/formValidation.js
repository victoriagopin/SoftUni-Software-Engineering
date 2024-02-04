function validate() {
    let submitBtnRef = document.getElementById('submit');
    submitBtnRef.addEventListener('click', submit);
    let namePattern = /^[a-zA-Z0-9]{3,20}$/g;
    let passwordPattern = /^[\w]{5,15}$/g;
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g;
    let companyNumberPattern = /^(1000|[1-9]\d{3})$/g;


    let isCompany = document.querySelector('input#company');
    isCompany.addEventListener('change', changeFunc);

    function submit(e) {
        let inputs = [];
        e.preventDefault();
        let userName = document.querySelector('input#username');
        if (!userName.value.match(namePattern)) {
            userName.style.borderColor = 'red';
            inputs.push(userName);
        } else {
            userName.style.borderColor = '';
        }
        let email = document.querySelector('input#email');
        if (!email.value.match(emailPattern)) {
            email.style.borderColor = 'red';
            inputs.push(email);
        } else {
            email.style.borderColor = '';
        }

        let password = document.querySelector('input#password');
        let confirmPassword = document.querySelector('input#confirm-password');
        if (!password.value.match(passwordPattern)) {
            password.style.borderColor = 'red';
            inputs.push(password);
        } else {
            password.style.borderColor = '';
        }
        if (!confirmPassword.value.match(passwordPattern)) {
            password.style.borderColor = 'red';
            inputs.push(confirmPassword);
        } else {
            confirmPassword.style.borderColor = '';
        }

        if (password.value != confirmPassword.value) {
            password.style.borderColor = 'red';
            confirmPassword.style.borderColor = 'red';
            inputs.push(confirmPassword);
        } else {
            password.style.borderColor = '';
            confirmPassword.style.borderColor = '';
        }

        let companyInfo = document.getElementById('companyNumber');
        if (isCompany.checked) {
            if (!companyInfo.value.match(companyNumberPattern)) {
                companyInfo.style.borderColor = 'red';
                inputs.push(companyInfo);
            } else {
                companyInfo.style.borderColor = '';
            }
        }


        let valid = document.getElementById('valid');
        if (inputs.length == 0) {
            valid.style.display = 'block';
        } else {
            valid.style.display = 'none';
        }

    }

    function changeFunc() {
        if (isCompany.checked) {
            let companyInfo = document.getElementById('companyInfo');
            companyInfo.style.display = 'block';

        } else {
            let companyInfo = document.getElementById('companyInfo');
            companyInfo.style.display = 'none';
        }
    }
}
