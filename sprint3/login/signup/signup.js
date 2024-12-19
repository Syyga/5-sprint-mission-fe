// const USER_DATA = [
//     { email: 'codeit1@codeit.com', password: "codeit101!" },
//     { email: 'codeit2@codeit.com', password: "codeit202!" },
//     { email: 'codeit3@codeit.com', password: "codeit303!" },
//     { email: 'codeit4@codeit.com', password: "codeit404!" },
//     { email: 'codeit5@codeit.com', password: "codeit505!" },
//     { email: 'codeit6@codeit.com', password: "codeit606!" },
// ]

// document.addEventListener("DOMContentLoaded", function () {
//     const emailInput = document.getElementById("emailInput");
//     const nicknameInput = document.querySelector(".nickname_input input");
//     const passwordInput = document.getElementById("passwordInput");
//     const checkPasswordInput = document.getElementById("checkPasswordInput");
//     const signupButton = document.querySelector(".login_bt");
//     const showPasswordIcon = "../eye.png";
//     const hidePasswordIcon = "../secret.png";

//     // 입력 값 유효성 검사 함수
//     const isEmailValid = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//     const isPasswordValid = (password) => password.length >= 8;
//     const isNicknameValid = (nickname) => nickname.trim().length > 0;
//     const isPasswordMatch = (password, checkPassword) => password === checkPassword;

//     // 에러 메시지 및 테두리 표시 함수
//     function showError(input, message) {
//         clearError(input); // 기존 에러 제거
//         input.classList.add("input-error"); // 빨간 테두리 추가
//         const errorMessage = document.createElement("div");
//         errorMessage.classList.add("error-message");
//         errorMessage.innerText = message;
//         input.parentElement.insertAdjacentElement("afterend", errorMessage);
//     }

//     // 에러 메시지 및 테두리 제거 함수
//     function clearError(input) {
//         input.classList.remove("input-error"); // 빨간 테두리 제거
//         const nextElement = input.parentElement.nextElementSibling;
//         if (nextElement && nextElement.classList.contains("error-message")) {
//             nextElement.remove();
//         }
//     }

//     // 이메일 유효성 검사
//     emailInput.addEventListener("focusout", function () {
//         if (!isEmailValid(emailInput.value.trim())) {
//             showError(emailInput, "잘못된 이메일 형식입니다.");
//         } else {
//             clearError(emailInput);
//         }
//     });

//     // 비밀번호 유효성 검사
//     passwordInput.addEventListener("focusout", function () {
//         if (!isPasswordValid(passwordInput.value.trim())) {
//             showError(passwordInput, "비밀번호는 8자 이상이어야 합니다.");
//         } else {
//             clearError(passwordInput);
//         }
//     });

//     // 비밀번호 확인 검사
//     checkPasswordInput.addEventListener("focusout", function () {
//         if (!isPasswordMatch(passwordInput.value.trim(), checkPasswordInput.value.trim())) {
//             showError(checkPasswordInput, "비밀번호가 일치하지 않습니다.");
//         } else {
//             clearError(checkPasswordInput);
//         }
//     });

//     // 버튼 활성화 체크
//     function checkInputs() {
//         const emailValid = isEmailValid(emailInput.value.trim());
//         const nicknameValid = isNicknameValid(nicknameInput.value.trim());
//         const passwordValid = isPasswordValid(passwordInput.value.trim());
//         const passwordMatch = isPasswordMatch(passwordInput.value.trim(), checkPasswordInput.value.trim());

//         if (emailValid && nicknameValid && passwordValid && passwordMatch) {
//             activateSignupButton();
//         } else {
//             deactivateSignupButton();
//         }
//     }

//     // 버튼 활성화
//     function activateSignupButton() {
//         signupButton.classList.add("active");
//         signupButton.style.pointerEvents = "auto";
//     }

//     // 버튼 비활성화
//     function deactivateSignupButton() {
//         signupButton.classList.remove("active");
//         signupButton.style.pointerEvents = "none";
//     }

//     // 버튼 활성화 상태 업데이트 (모든 입력 필드의 변화 반영)
//     [emailInput, nicknameInput, passwordInput, checkPasswordInput].forEach(input => {
//         input.addEventListener("input", checkInputs);
//     });

//     const togglePassword = document.getElementById("togglePassword");

//     togglePassword.addEventListener("click", function () {
//         if (passwordInput.type === "password") {
//             passwordInput.type = "text";
//             togglePassword.src = showPasswordIcon;
//         } else {
//             passwordInput.type = "password";
//             togglePassword.src = hidePasswordIcon;
//         }
//     });
//     const togglePassword2 = document.getElementById("togglePassword2");

//     togglePassword2.addEventListener("click", function () {
//         if (checkPasswordInput.type === "password") {
//             checkPasswordInput.type = "text";
//             togglePassword2.src = showPasswordIcon;
//         } else {
//             checkPasswordInput.type = "password";
//             togglePassword2.src = hidePasswordIcon;
//         }
//     });
// });











const USER_DATA = [
    { email: 'codeit1@codeit.com', password: "codeit101!" },
    { email: 'codeit2@codeit.com', password: "codeit202!" },
    { email: 'codeit3@codeit.com', password: "codeit303!" },
    { email: 'codeit4@codeit.com', password: "codeit404!" },
    { email: 'codeit5@codeit.com', password: "codeit505!" },
    { email: 'codeit6@codeit.com', password: "codeit606!" },
]

document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById("emailInput");
    const nicknameInput = document.querySelector(".nickname_input input");
    const passwordInput = document.getElementById("passwordInput");
    const checkPasswordInput = document.getElementById("checkPasswordInput");
    const signupButton = document.getElementById("login_bt");
    const showPasswordIcon = "../eye.png";
    const hidePasswordIcon = "../secret.png";

    // 입력 값 유효성 검사 함수
    const isEmailValid = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPasswordValid = (password) => password.length >= 8;
    const isNicknameValid = (nickname) => nickname.trim().length > 0;
    const isPasswordMatch = (password, checkPassword) => password === checkPassword;

    // 에러 메시지 및 테두리 표시 함수
    function showError(input, message) {
        clearError(input); // 기존 에러 제거
        input.classList.add("input-error"); // 빨간 테두리 추가
        const errorMessage = document.createElement("div");
        errorMessage.classList.add("error-message");
        errorMessage.innerText = message;
        input.parentElement.insertAdjacentElement("afterend", errorMessage);
    }

    // 에러 메시지 및 테두리 제거 함수
    function clearError(input) {
        input.classList.remove("input-error"); // 빨간 테두리 제거
        const nextElement = input.parentElement.nextElementSibling;
        if (nextElement && nextElement.classList.contains("error-message")) {
            nextElement.remove();
        }
    }

    // 이메일 유효성 검사
    emailInput.addEventListener("focusout", function () {
        if (!isEmailValid(emailInput.value.trim())) {
            showError(emailInput, "잘못된 이메일 형식입니다.");
        } else {
            clearError(emailInput);
        }
    });

    // 비밀번호 유효성 검사
    passwordInput.addEventListener("focusout", function () {
        if (!isPasswordValid(passwordInput.value.trim())) {
            showError(passwordInput, "비밀번호는 8자 이상이어야 합니다.");
        } else {
            clearError(passwordInput);
        }
    });

    // 비밀번호 확인 검사
    checkPasswordInput.addEventListener("focusout", function () {
        if (!isPasswordMatch(passwordInput.value.trim(), checkPasswordInput.value.trim())) {
            showError(checkPasswordInput, "비밀번호가 일치하지 않습니다.");
        } else {
            clearError(checkPasswordInput);
        }
    });

    // 버튼 활성화 체크
    function checkInputs() {
        const emailValid = isEmailValid(emailInput.value.trim());
        const nicknameValid = isNicknameValid(nicknameInput.value.trim());
        const passwordValid = isPasswordValid(passwordInput.value.trim());
        const passwordMatch = isPasswordMatch(passwordInput.value.trim(), checkPasswordInput.value.trim());

        if (emailValid && nicknameValid && passwordValid && passwordMatch) {
            activateSignupButton();
        } else {
            deactivateSignupButton();
        }
    }

    // 버튼 활성화
    function activateSignupButton() {
        signupButton.classList.add("active");
        signupButton.style.pointerEvents = "auto";
    }

    // 버튼 비활성화
    function deactivateSignupButton() {
        signupButton.classList.remove("active");
        signupButton.style.pointerEvents = "none";
    }


    // 회원가입 버튼 클릭 이벤트
    signupButton.addEventListener("click", function () {
        const email = emailInput.value.trim();
        const emailExists = USER_DATA.some(user => user.email === email);

        if (emailExists) {
            showModalMessage("사용중인 이메일입니다.");
        } else { 
            showModalMessage("회원가입이 완료되었습니다.");
        }
    });

    document.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            signupButton.click(); // 로그인 버튼 클릭 이벤트 호출
        }
    });









        
    // 버튼 활성화 상태 업데이트 (모든 입력 필드의 변화 반영)
    [emailInput, nicknameInput, passwordInput, checkPasswordInput].forEach(input => {
        input.addEventListener("input", checkInputs);
    });

    const togglePassword = document.getElementById("togglePassword");

    togglePassword.addEventListener("click", function () {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            togglePassword.src = showPasswordIcon;
        } else {
            passwordInput.type = "password";
            togglePassword.src = hidePasswordIcon;
        }
    });
    const togglePassword2 = document.getElementById("togglePassword2");

    togglePassword2.addEventListener("click", function () {
        if (checkPasswordInput.type === "password") {
            checkPasswordInput.type = "text";
            togglePassword2.src = showPasswordIcon;
        } else {
            checkPasswordInput.type = "password";
            togglePassword2.src = hidePasswordIcon;
        }
    });



    const messageModal = document.getElementById("messageModal");
    const modalMessage = document.getElementById("modalMessage");
    const confirmButton = document.getElementById("confirmButton");

    // 모달 메시지 표시 함수
    function showModalMessage(message) {
        modalMessage.innerText = message; // 메시지 삽입
        messageModal.style.display = "block"; // 모달 보이기
    }

    // 확인 버튼 클릭 시 모달 닫기
    confirmButton.addEventListener("click", function () {
        messageModal.style.display = "none"; // 모달 숨기기
        if (message = "회원가입이 완료되었습니다.") {
            window.location.href = "../login.html";
        }

    });
    document.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            messageModal.style.display = "none"; // 모달 숨기기
        }
    });



});
