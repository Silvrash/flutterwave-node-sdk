import Axios, { AxiosInstance } from 'axios'
/**
 * create an axios instance to make request
 * @param  {object} headers?
 * @returns AxiosInstance
 */
export const request = (baseUrl: string, headers?: object): AxiosInstance => {
  return Axios.create({
    baseURL: baseUrl,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  })
}

export const TestCards = {
  MasterCard: {
    '3DSecure': {
      cardnumber: '5438898014560229',
      cvv: '564',
      expirymonth: '10',
      expiryyear: '20',
      pin: '3310',
      otp: '12345',
    },
    PIN: {
      cardnumber: '5399838383838381',
      cvv: '470',
      expirymonth: '10',
      expiryyear: '22',
      pin: '3310',
      otp: '12345',
    },
  },
  Visa: {
    noauth_1: {
      cardnumber: '4751763236699647',
      expirymonth: '09',
      expiryyear: '21',
    },
    noauth_2: {
      cardnumber: '4242424242424242',
      cvv: '812',
      expirymonth: '01',
      expiryyear: '21',
      pin: '3310',
      otp: '12345',
    },
    International: {
      cardnumber: '4556052704172643',
      cvv: '899',
      expirymonth: '01',
      expiryyear: '21',
    },
  },
  Verve: {
    cardnumber: '5061460410120223210',
    expirymonth: '12',
    expiryyear: '21',
    cvv: '780',
    pin: '3310',
    otp: '12345',
  },
  Express: {
    cardnumber: '344173993556638',
    cvv: '828',
    expirymonth: '01',
    expiryyear: '22',
  },
  declined: {
    cardnumber: '5143010522339965',
    cvv: '276',
    expirymonth: '08',
    expiryyear: '21',
    pin: '3310',
  },
  Fraudulent: {
    cardnumber: '5590131743294314',
    cvv: '887',
    expirymonth: '11',
    expiryyear: '20',
    pin: '3310',
    otp: '12345',
  },
  InsufficientFunds: {
    cardnumber: '5258585922666506',
    cvv: '883',
    expirymonth: '09',
    expiryyear: '21',
    pin: '3310',
    otp: '12345',
  },
  PreAuthorization: {
    cardnumber: '5377283645077450',
    cvv: '789',
    expirymonth: '09',
    expiryyear: '21',
    pin: '3310',
  },
}

export const TestBanks = {
  AccessBank: {
    accountnumber: '0690000031',
    otp: '12345',
  },
  ProvidusBank_1: {
    accountnumber: '5900102340',
    otp: '12345',
  },
  ProvidusBank_2: {
    accountnumber: '5900002567',
    otp: '12345',
  },
}
