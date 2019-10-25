import * as R from 'ramda'
import {
  initPayment,
  validatePayment,
  verifyMMPayment,
} from './services/payment'
import { request } from './utils/constants'

/**
 * Base Rave sdk for making rave requests
 * @param  {string} publicKey RAVE PUBLIC KEY
 * @param  {string} secretKey RAVE SECRET KEY
 * @param  {boolean=false} is_production set to true
 */
const RavePay = (
  publicKey: string,
  secretKey: string,
  isProduction = false
) => {
  const raveBaseUrl = isProduction
    ? 'https://api.ravepay.co'
    : 'https://ravesandboxapi.flutterwave.com'

  const axiosInstance = request(raveBaseUrl)

  return {
    initPayment: R.partialRight(initPayment, [
      publicKey,
      secretKey,
      axiosInstance,
    ]),
    validatePayment: R.partialRight(validatePayment, [
      publicKey,
      axiosInstance,
    ]),
    verifyMMPayment: R.partialRight(verifyMMPayment, [
      secretKey,
      axiosInstance,
    ]),
  }
}

export default RavePay
