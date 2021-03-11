const sgMail = require("@sendgrid/mail");
const apiKey =
  "Your_API_KEY";

sgMail.setApiKey(apiKey);

const message = {
  to: "developer.shivk@gmail.com ",
  from: "no-reply@webmandi.co.in", // Use the email address or domain you verified above
  subject: "Sendgrid testing",
  text: "Hello world",
  html : '<h1>Hello user</h1>'
};

sgMail
  .send(message)
  .then((res) => console.log("sent", res))
  .catch((err) => console.log( "fail", err));
