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

// this works
const emailChannel = new EmailAlertChannel('email-channel-1', {
  address: process.env.EMAIL_ADDRESS!,
  ...sendDefaults
})

// this does not work, fromId() returns an AlertChannelWrapper which not supported in Checkly config file :(
// Construct: https://github.com/checkly/checkly-cli/blob/0173d7b9ebcb7f16cfe14d41ea6393b4e3fdf330/packages/cli/src/constructs/construct.ts
// Alert Channel Constructs: https://github.com/checkly/checkly-cli/blob/0173d7b9ebcb7f16cfe14d41ea6393b4e3fdf330/packages/cli/src/constructs/alert-channel.ts
// const emailChannel = EmailAlertChannel.fromId(244045)

export {
  smsChannel, 
  emailChannel
}