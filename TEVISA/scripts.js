function toggleDropdown() {
    const dropdownContent = document.getElementById('dropdown-content');
    if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
    } else {
        dropdownContent.style.display = 'block';
    }
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        const dropdowns = document.getElementsByClassName('dropdown-content');
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.style.display === 'block') {
                openDropdown.style.display = 'none';
            }
        }
    }
    const loginModal = document.getElementById('login-modal');
    const registerModal = document.getElementById('register-modal');
    if (event.target == loginModal) {
        loginModal.style.display = 'none';
    }
    if (event.target == registerModal) {
        registerModal.style.display = 'none';
    }
}// Get modal elements
var loginModal = document.getElementById('loginModal');
var signupModal = document.getElementById('signupModal');
var loginBtn = document.getElementById('loginBtn');
var signupBtn = document.getElementById('signupBtn');
var closeLogin = document.getElementById('closeLogin');
var closeSignup = document.getElementById('closeSignup');

// Open login modal
loginBtn.onclick = function() {
    loginModal.style.display = 'block';
    document.body.classList.add('blur');
}

// Open signup modal
signupBtn.onclick = function() {
    signupModal.style.display = 'block';
    document.body.classList.add('blur');
}

// Close login modal
closeLogin.onclick = function() {
    loginModal.style.display = 'none';
    document.body.classList.remove('blur');
}

// Close signup modal
closeSignup.onclick = function() {
    signupModal.style.display = 'none';
    document.body.classList.remove('blur');
}

// Close modals when clicking outside of them
window.onclick = function(event) {
    if (event.target == loginModal) {
        loginModal.style.display = 'none';
        document.body.classList.remove('blur');
    }
    if (event.target == signupModal) {
        signupModal.style.display = 'none';
        document.body.classList.remove('blur');
    }
}

// Show/Hide password functionality
document.getElementById('showLoginPassword').addEventListener('change', function() {
    var loginPassword = document.getElementById('loginPassword');
    if (this.checked) {
        loginPassword.type = 'text';
    } else {
        loginPassword.type = 'password';
    }
});

document.getElementById('showSignupPassword').addEventListener('change', function() {
    var signupPassword = document.getElementById('signupPassword');
    if (this.checked) {
        signupPassword.type = 'text';
    } else {
        signupPassword.type = 'password';
    }
});

// Form validation
document.getElementById('loginForm').addEventListener('submit', function(event) {
    var isValid = true;
    var loginUsername = document.getElementById('loginUsername');
    var loginPassword = document.getElementById('loginPassword');
    var loginUsernameError = document.getElementById('loginUsernameError');
    var loginPasswordError = document.getElementById('loginPasswordError');

    if (loginUsername.value.trim() === '') {
        loginUsernameError.textContent = 'Username is required';
        isValid = false;
    } else {
        loginUsernameError.textContent = '';
    }

    if (loginPassword.value.trim() === '') {
        loginPasswordError.textContent = 'Password is required';
        isValid = false;
    } else {
        loginPasswordError.textContent = '';
    }

    if (!isValid) {
        event.preventDefault();
    }
});

document.getElementById('signupForm').addEventListener('submit', function(event) {
    var isValid = true;
    var signupUsername = document.getElementById('signupStudentId');
    var signupPassword = document.getElementById('signupPassword');
    var signupUsernameError = document.getElementById('signupStudentIdError');
    var signupPasswordError = document.getElementById('signupPasswordError');

    if (signupUsername.value.trim() === '') {
        signupUsernameError.textContent = 'Student         // Get modal elements
        var loginModal = document.getElementById('loginModal');
        var signupModal = document.getElementById('signupModal');
        
        // Show password feature
        var signupPassword = document.getElementById('signupPassword');
        var showPasswordCheckbox = document.getElementById('showPassword');
        
        showPasswordCheckbox.addEventListener('change', function() {
            if (showPasswordCheckbox.checked) {
                signupPassword.type = 'text';
            } else {
                signupPassword.type = 'password';
            }
        });
        
        // Existing validation code
        if (signupUsername.value.trim() === '') {
            signupUsernameError.textContent = 'Student is required';
            isValid = false;
        } else {
            signupUsernameError.textContent = '';
        }
        
        if (signupPassword.value.trim() === '') {
            signupPasswordError.textContent = 'Password is required';
            isValid = false;
        } else {
            signupPasswordError.textContent = '';
        }
        
        if (!isValid) {
            event.preventDefault();
        }steris required';
        isValid = false;
    } else {
        signupUsernameError.textContent = '';
    }

    if (signupPassword.value.trim() === '') {
        signupPasswordError.textContent = 'Password is required';
        isValid = false;
    } else {
        signupPasswordError.textContent = '';
    }

    if (!isValid) {
        event.preventDefault();
    }
});// Get modal elements
var loginModal = document.getElementById('loginModal');
var signupModal = document.getElementById('signupModal');
var loginBtn = document.getElementById('loginBtn');
var signupBtn = document.getElementById('signupBtn');
var closeLogin = document.getElementById('closeLogin');
var closeSignup = document.getElementById('closeSignup');

// Open login modal
loginBtn.onclick = function() {
    loginModal.style.display = 'block';
    document.querySelector('main').classList.add('blur');
    document.querySelector('footer').classList.add('blur');
}

// Open signup modal
signupBtn.onclick = function() {
    signupModal.style.display = 'block';
    document.querySelector('main').classList.add('blur');
    document.querySelector('footer').classList.add('blur');
}

// Close login modal
closeLogin.onclick = function() {
    loginModal.style.display = 'none';
    document.querySelector('main').classList.remove('blur');
    document.querySelector('footer').classList.remove('blur');
}

// Close signup modal
closeSignup.onclick = function() {
    signupModal.style.display = 'none';
    document.querySelector('main').classList.remove('blur');
    document.querySelector('footer').classList.remove('blur');
}

// Close modals when clicking outside of them
window.onclick = function(event) {
    if (event.target == loginModal) {
        loginModal.style.display = 'none';
        document.querySelector('main').classList.remove('blur');
        document.querySelector('footer').classList.remove('blur');
    }
    if (event.target == signupModal) {
        signupModal.style.display = 'none';
        document.querySelector('main').classList.remove('blur');
        document.querySelector('footer').classList.remove('blur');
    }
}

// Show/Hide password functionality
document.getElementById('showLoginPassword').addEventListener('change', function() {
    var loginPassword = document.getElementById('loginPassword');
    if (this.checked) {
        loginPassword.type = 'text';
    } else {
        loginPassword.type = 'password';
    }
});

document.getElementById('showSignupPassword').addEventListener('change', function() {
    var signupPassword = document.getElementById('signupPassword');
    if (this.checked) {
        signupPassword.type = 'text';
    } else {
        signupPassword.type = 'password';
    }
});

// Form validation
document.getElementById('loginForm').addEventListener('submit', function(event) {
    var isValid = true;
    var loginUsername = document.getElementById('loginUsername');
    var loginPassword = document.getElementById('loginPassword');
    var loginUsernameError = document.getElementById('loginUsernameError');
    var loginPasswordError = document.getElementById('loginPasswordError');

    if (loginUsername.value.trim() === '') {
        loginUsernameError.textContent = 'Username is required';
        isValid = false;
    } else {
        loginUsernameError.textContent = '';
    }

    if (loginPassword.value.trim() === '') {
        loginPasswordError.textContent = 'Password is required';
        isValid = false;
    } else {
        loginPasswordError.textContent = '';
    }

    if (!isValid) {
        event.preventDefault();
    }
});

document.getElementById('signupForm').addEventListener('submit', function(event) {
    var isValid = true;
    var signupUsername = document.getElementById('signupUsername');
    var signupPassword = document.getElementById('signupPassword');
    var signupUsernameError = document.getElementById('signupUsernameError');
    var signupPasswordError = document.getElementById('signupPasswordError');

    if (signupUsername.value.trim() === '') {
        signupUsernameError.textContent = 'Username is required';
        isValid = false;
    } else {
        signupUsernameError.textContent = '';
    }

    if (signupPassword.value.trim() === '') {
        signupPasswordError.textContent = 'Password is required';
        isValid = false;
    } else {
        signupPasswordError.textContent = '';
    }

    if (!isValid) {
        event.preventDefault();
    }
});