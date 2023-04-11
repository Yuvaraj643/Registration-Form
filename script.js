function validateForm() {
    const name = document.forms["registrationForm"]["name"].value;
    const email = document.forms["registrationForm"]["email"].value;
    const password = document.forms["registrationForm"]["password"].value;
    const dob = document.forms["registrationForm"]["dob"].value;
  
    if (name == "") {
      alert("Name field cannot be empty");
      return false;
    }

    if (email == "") {
      alert("Email field cannot be empty");
      return false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Email address is not valid");
      return false;
    }

    if (password == "") {
      alert("Password field cannot be empty");
      return false;
    } else if (password.length < 8) {
      alert("Password must be at least 8 characters long");
      return false;
    }

    if (dob == "") {
      alert("Date of birth field cannot be empty");
      return false;
    }
  
    alert("The form has been validated and all fields are correct!");
    return true;
  }