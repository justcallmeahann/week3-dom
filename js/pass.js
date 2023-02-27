const regEmail = 'admin@efbewe.com';
const regPass = 'password';

const emailRegex = /^[a-zA-Z0-9._]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


// ##
// Login Form Validation
const passform = document.getElementById("pass-form");
// menambahkan event listener ketika submit
passform.addEventListener("submit", validationPass);

function validationPass(event) {  // fungsi validasi login
  event.preventDefault(); // mencegah default submit (get/post request)

  const email = document.querySelector("#email");

  if(email.value == ""){
    return Notification("error", "Please enter your registered email");
  } else if (!email.value.match(emailRegex)) {
    return Notification("error", "Please enter a valid email.");
  } else if(email.value !== regEmail){
    return Notification("error", "It seems your email has not been registered.");
  }

  Notification("success", "Password reset link has been sent to your email. Just check it!");
  console.log(`Reset password: ${email.value}`);

  const passinput = document.getElementById("input-email");
  passinput.style.display = 'none';

  const resendpass = document.getElementById("resend-pass");
  resendpass.style.display = 'block';
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
