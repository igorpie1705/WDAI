const email = document.getElementById("email");
const message = document.getElementById("message");
const form = document.getElementById("form");
const subject = document.getElementById("subject");
errorElement = document.getElementById("error");

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

form.addEventListener("submit", (e) => {
  let messages = [];

  if (!validateEmail(email.value)) {
    messages.push("Proszę podać prawidłowy adres e-mail");
  }

  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join(", ");
    errorElement.style.display = "block";
  } else {
    errorElement.style.display = "none";
    e.preventDefault();
    localStorage.setItem("email", email.value);
    localStorage.setItem("subject", subject.value);
    localStorage.setItem("message", message.value);
  }
});
