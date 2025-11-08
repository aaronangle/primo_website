document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");

  form.addEventListener("submit", async (e) => {
    var loader = document.querySelector("#loader");
    var content = document.querySelector("#form-content");
    var thanks = document.querySelector("#thanks");

    e.preventDefault();

    if (!form.reportValidity()) {
      return;
    }

    loader.style.display = "flex";
    content.style.display = "none";

    var company = document.querySelector("#company");
    var name = document.querySelector("#name");
    var email = document.querySelector("#email");
    var phone = document.querySelector("#phone");
    var message = document.querySelector("#message");

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
        loader.style.display = "none";
        thanks.style.display = "flex";
      })
      .catch((error) => {
        console.error("Error during fetch:", error); // Handle any errors
      });
  });
});
