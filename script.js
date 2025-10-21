document.addEventListener("DOMContentLoaded", function () {
  var submit = document.querySelector("#submit-btn");
  submit.addEventListener("click", function () {
    var company = document.querySelector("#company");
    var name = document.querySelector("#name");
    var email = document.querySelector("#email");
    var phone = document.querySelector("#phone");
    var message = document.querySelector("#message");

    if (!name.value || !email.value || !message.value || !phone.value) {
      console.log("please fill out all required fields");
      return;
    }

    var url =
      "https://lvm5rrbcxmyjt47mlyk75bkpoq0zshcl.lambda-url.us-east-2.on.aws/";

    var data = {
      company: company.value,
      name: name.value,
      email: email.value,
      phone: phone.value,
      message: message.value,
    };

    var options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    fetch(url, options)
      .then((response) => {
        // Check if the response was successful (e.g., status code 2xx)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json(); // Parse the JSON response body
      })
      .then((data) => {
        console.log("Success:", data); // Handle the successful response data
      })
      .catch((error) => {
        console.error("Error during fetch:", error); // Handle any errors
      });
  });
});
