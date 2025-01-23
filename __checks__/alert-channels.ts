import { SmsAlertChannel, EmailAlertChannel } from "checkly/constructs";

const sendDefaults = {
  sendFailure: true,
  sendRecover: true,
  sendDegraded: false,
}

const smsChannel = new SmsAlertChannel('sms-channel-1', {
  phoneNumber: process.env.PHONE_NUMBER!,
  ...sendDefaults
})

const emailChannel = new EmailAlertChannel('email-channel-1', {
  address: process.env.EMAIL_ADDRESS!,
  ...sendDefaults
})

module.exports = {
  smsChannel, emailChannel
}