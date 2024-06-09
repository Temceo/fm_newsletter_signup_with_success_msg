const btnSubscribe = document.querySelector(".btn-subscribe");
const btnDismiss = document.querySelector(".btn-dismiss");
const hero = document.querySelector(".hero");
const content = document.querySelector(".content");
const mainContent = document.querySelector(".main-content");
const successConfirmation = document.querySelector(".success-confirmation");
const email = document.querySelector("#email");
const emailMsg = document.querySelector(".email-message");

// hide content when subscription successful
const hideHeroContent = () => {
  hero.classList.add("hide");
  content.classList.add("hide");
  successConfirmation.classList.remove("hide");
};

btnSubscribe.addEventListener("click", (e) => {
  e.preventDefault();
  validateEmail();
});

// validate email entered by user
const validateEmail = () => {
  const emailValue = email.value.trim().toLowerCase();
  if (!isValidEmail(emailValue)) {
    emailMsg.textContent = "Valid email is required";
    emailMsg.style.color = "#ff6257";
    email.classList.add("email-error");
  } else {
    emailMsg.textContent = "";
    email.classList.remove("email-error");
    hideHeroContent();
  }
};

btnSubscribe.addEventListener("click", validateEmail);

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

// show content when dismiss button clicked
const showHeroContent = () => {
  hero.classList.remove("hide");
  content.classList.remove("hide");
  successConfirmation.classList.add("hide");
};

btnDismiss.addEventListener("click", showHeroContent);
