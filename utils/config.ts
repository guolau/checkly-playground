if (process.env.ENV === 'development'){
  import('dotenv/config')
}

const PHONE_NUMBER = process.env.PHONE_NUMBER
const EMAIL_ADDRESS = process.env.EMAIL_ADDRESS
const CHECKLY_ACCOUNT_ID = process.env.CHECKLY_ACCOUNT_ID
const CHECKLY_API_KEY = process.env.CHECKLY_API_KEY

export {
  PHONE_NUMBER,
  EMAIL_ADDRESS,
  CHECKLY_ACCOUNT_ID,
  CHECKLY_API_KEY,
}
