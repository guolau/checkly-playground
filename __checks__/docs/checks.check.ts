import { ApiCheck, AssertionBuilder, Frequency } from 'checkly/constructs'

new ApiCheck('hello-api-1', {
  name: 'Hello API',
  activated: true,
  frequency: Frequency.EVERY_1M,
  request: {
    method: 'GET',
    url: 'https://mac-demo-repo.vercel.app/api/hello',
    assertions: [
      AssertionBuilder.statusCode().equals(200)
    ],
  }
})