import { ApiCheck, AssertionBuilder, Frequency } from "checkly/constructs";
import { emailChannel } from "./alert-channels";

new ApiCheck('dog-api-list', {
  name: 'Dog.ceo List Breeds',
  activated: true,
  frequency: Frequency.EVERY_10M,
  alertChannels: [emailChannel],
  tags: ['dog'],
  request: {
    method: 'GET',
    url: 'https://dog.ceo/api/breeds/list/all',
    assertions: [
      AssertionBuilder.statusCode().equals(200),
      AssertionBuilder.jsonBody('$.message').notEmpty()
    ]
  },
})