// email terdaftar
const regEmail = 'admin@efbewe.com';
const regPass = 'password';

// regex
const emailRegex = /^[a-zA-Z0-9._]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;


// Signup Form Validation
const signupform = document.getElementById("signup-form");
// menambahkan event listener ketika submit
signupform.addEventListener("submit", validationSignup);

// fungsi validasi email sesuai format
function validationSignup(event) {
  event.preventDefault(); // mencegah default submit (get/post request)

  const email = document.querySelector("#email");
  const password = document.querySelector("#password");
  const phoneNumber = document.querySelector("#phoneNumber");

  if(email.value == ""){
    return Notification("error", "Please input the email"); // validasi harus input email
  } else if(password.value == ""){
    return Notification("error", "Please input the password"); // validasi harus input password
  } else if(phoneNumber.value == ""){
    return Notification("error", "Please input the phone number");// validasi harus input nomot telp
  } else if (!email.value.match(emailRegex)) {
    return Notification("error", "Please enter a valid email.");// validasi format email yang valid
  } else if(email.value === regEmail){
    return Notification("error", "Email has already been taken"); // validasi email ketika sudah terfadtar
  } else if(password.value.length < 8 || password.value.length > 20){
    return Notification("error", "Your password must be 8-20 characters"); // validasi password harus 8-20
  } else if (!phoneNumber.value.match(phoneRegex)) {
    return Notification("error", "Please enter a valid phone number."); // validasi format telp
  }

  // ketika tidak ada error
  Notification("success", "Congratulations, your account has been succesfully created.");
  console.log(`Successful register with data :
  Email : ${email.value}
  Password : ${password.value}
  Phone Number: ${phoneNumber.value}`); // menampilkan data ke console
}

// fungsi DOM error handler
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
