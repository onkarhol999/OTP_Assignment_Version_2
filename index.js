function generateOTP() {
    let otp = "";
    for (let i = 0; i < 6; i++) {
      otp += Math.floor(Math.random() * 10);
    }
    return otp;
  }
  
  function sendOTPOverEmail(name, email) {
    const params = {
      name: name,
      email: email,
      message: generateOTP(),
    };
    const serviceID = "service_dofkyxl";
    const templateID = "template_r8ilsbk";
  
    return emailjs.send(serviceID, templateID, params);
  }
  
  function clearInputFields() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
  }
  
  function displayMessage(message) {
    document.getElementById("message").textContent = message;
  }
  
  function sendOTP() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
  
    if (name.trim() === "") {
      displayMessage("Name is required.");
    } else if (email.trim() === "") {
      displayMessage("Email is required.");
    } else if (!validateEmail(email)) {
      displayMessage("Invalid email address.");
    } else {
      sendOTPOverEmail(name, email)
        .then((res) => {
          clearInputFields();
          displayMessage("Your OTP has been sent successfully!");
          console.log(res);
        })
        .catch((err) => console.log(err));
    }
  }
  
  function validateEmail(email) {
    // Add your email validation logic here
    return true; // Replace with your validation logic
  }
  