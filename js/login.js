const regEmail = 'admin@efbewe.com';
const regPass = 'password';

const emailRegex = /^[a-zA-Z0-9._]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


// ##
// Login Form Validation
const loginform = document.getElementById("login-form");
// menambahkan event listener ketika submit
loginform.addEventListener("submit", validationLogin);

function validationLogin(event) {  // fungsi validasi login
  event.preventDefault(); // mencegah default submit (get/post request)

  // email.style.border = "1px solid #b91c1c";
  // email.style.outline = "1px solid #b91c1c";
  const email = document.querySelector("#email");
  const password = document.querySelector("#password");

  if(email.value == "" || password.value == ""){
    return Notification("error", "Please enter your email and password");
  } else if (!email.value.match(emailRegex)) {
    return Notification("error", "Please enter a valid email.");
  } else if(email.value !== regEmail && password.value !== regPass){
    return Notification("error", "Email and password doesn't match with our record. Are you forgot?");
  }

  Notification("success", "Login successful");
  console.log(`Successful login as ${email.value}`);
}

function Notification(type = "error", text = null) {
  text = text == null ? "Ada kesalahan" : text;
  notif = document.querySelector("#notif");
  let atributes;
  switch (type) {
    // notes : var attributes = ['Title of notif', 'Class name in css']
    case "success":
      atributes = ["Success", "success"];
      break;

    case "warning":
      atributes = ["Error", "warning"];
      break;

    default:
      atributes = ["Error", "danger"];
      break;
  }
  notif.classList = "alert-container active";
  notif.innerHTML = [
    `
  <div class="alert ${atributes[1]}">
  <strong>${atributes[0]}</strong> - ${text}
  </div>`,
  ];
}
