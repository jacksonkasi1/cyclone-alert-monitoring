import nodemails from "nodemailer";
import sg from "nodemailer-sendgrid-transport";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemails.createTransport(
  sg({
    auth: {
      api_key: process.env.SENDGRID_API_KEY,
    },
  })
);

const SENDGRID_EMAIL = process.env.SENDGRID_EMAIL;
const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL;

const sendAlertEmail = async (alert: any) => {
  console.log(alert);

  const message = {
    from: SENDGRID_EMAIL,
    to: RECIPIENT_EMAIL,
    subject: "New Cyclone Alert",
    text: `
    Alert: ${alert.properties.event}. 
    More details:
        ${alert.properties.description}
    `,
  };

  const info = await transporter.sendMail(message, (err: any, info: any) => {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });

  console.log(`Alert email sent to ${RECIPIENT_EMAIL}`);
};

// export
export default sendAlertEmail;
