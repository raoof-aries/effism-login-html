const { Navigation, Autoplay } = Swiper;

document.addEventListener("DOMContentLoaded", function () {
  // Form Switching
  const loginForm = document.getElementById("loginForm");
  const forgotPasswordForm = document.getElementById("forgotPasswordForm");
  const forgotPasswordBtn = document.getElementById("forgotPasswordBtn");
  const goBackToLoginBtn = document.getElementById("goBackToLoginBtn");
  const loginFormSubmit = document.getElementById("loginFormSubmit");
  const forgotPasswordFormSubmit = document.getElementById(
    "forgotPasswordFormSubmit"
  );
  const formContainer = document.querySelector(".loginHero-form-container");

  function switchToForgotPassword() {
    loginForm.style.display = "none";
    forgotPasswordForm.style.display = "block";
  }

  function switchToLogin() {
    loginForm.style.display = "block";
    forgotPasswordForm.style.display = "none";
  }

  forgotPasswordBtn.addEventListener("click", switchToForgotPassword);
  goBackToLoginBtn.addEventListener("click", switchToLogin);

  // Login Form Submission
  loginFormSubmit.addEventListener("submit", async function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
      const response = await fetch(
        "http://localhost:8000/ReactController.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            password: password,
            action: "login",
          }),
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log(result);
      } else {
        console.error("Form submission failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  });

  // Forgot Password Form Submission
  forgotPasswordFormSubmit.addEventListener("submit", async function (e) {
    e.preventDefault();
    const forgotUsername = document.getElementById("forgotUsername").value;

    try {
      const response = await fetch(
        "http://localhost:8000/ReactController.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: forgotUsername,
            action: "forgot_password",
          }),
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log(result);
      } else {
        console.error(
          "Forgot password submission failed:",
          response.statusText
        );
      }
    } catch (error) {
      console.error("Error submitting forgot password form:", error);
    }
  });

  // Swiper Initialization
  const swiper = new Swiper("#loginSwiper", {
    modules: [Navigation, Autoplay],
    navigation: {
      nextEl: "#swiperNextBtn",
      prevEl: "#swiperPrevBtn",
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
  });
});
