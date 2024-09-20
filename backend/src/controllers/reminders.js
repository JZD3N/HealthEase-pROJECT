const twilio = require("twilio");

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

async function createMessage() {
  const message = await client.messages.create({
    body: "You have an appointment on.....",
    from: "+15017122661",
    to: "+233205688585",
  });

  console.log(message.body);
}

createMessage();