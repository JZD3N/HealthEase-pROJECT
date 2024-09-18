/**
 * This endpoint sends a message to the specified phone number
 * using Twilio.
 * The message body is a reminder of the appointment details
 * passed in the request body.
 * @param {Object} req - The request object
 * @param {String} req.body.name - The name of the person
 * @param {String} req.body.date - The date of the appointment
 * @param {String} req.body.time - The time of the appointment
 * @param {String} req.body.location - The location of the appointment
 * @param {Function} res - The response function
 */
app.post('/api/twillo', (req, res) => {
  const { name, date, time, location } = req.body;
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const client = require('twilio')(accountSid, authToken);

  client.messages
    .create({
      body: `Hello ${name}, this is a reminder that you have an appointment at ${location} on ${date} at ${time}.`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: '+233205688585'
    })
    .then((message) => res.send(message.sid))
    .done();
});
