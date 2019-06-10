const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "vicentegroupe@gmail.com",
    subject: "Youlilol",
    text: `Welcome to the app, ${name}. Let me know blabla`,
    html: ""
  });
};

const sendGoodbyEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "vicentegroupe@gmail.com",
    subject: "Quel dommage!",
    text: `Vous partez dejà ${name} ?`,
    html: ""
  });
};

module.exports = {
  sendWelcomeEmail,
  sendGoodbyEmail
};
