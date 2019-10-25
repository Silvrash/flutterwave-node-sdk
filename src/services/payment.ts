import { AxiosInstance, AxiosResponse } from 'axios'
import {
  CardPaymentData,
  ChargeRequest,
  ChargeResponse,
  PaymentType,
  RaveCountry,
  ValidationPaymentPayload,
} from '../types'
import { throwError } from '../utils/errors'
import { encrypt, getKey } from './secuirity'

/**
 * start card payment
 * @param  {object} cardDetails
 * @param  {string} secretKey
 */
export const initPayment = async <T extends RaveCountry, S extends PaymentType>(
  cardDetails: CardPaymentData<T, S>,
  publicKey: string,
  secretKey: string,
  request: AxiosInstance
) => {
  const key = getKey(secretKey)
  const client = encrypt(key, cardDetails)
  const data: ChargeRequest = { PBFPubKey: publicKey, client, alg: '3DES-24' }

  return request
    .post('/flwv3-pug/getpaidx/api/charge', data)
    .then((response: AxiosResponse<ChargeResponse<T, S>>) => {
      if (response.data.status === 'success') return response.data
      throwError({ message: 'Unknown Error', status: 'error' })
    })
}

/**
 * validate payment
 * @param  {string} transactionreference
 * @param  {string} publicKey
 * @param  {string} otp
 * @param  {AxiosInstance} request
 */
export const validatePayment = async (
  transactionreference: string,
  otp: string,
  publicKey: string,
  request: AxiosInstance
) => {
  const payload: ValidationPaymentPayload = {
    PBFPubKey: publicKey,
    transactionreference,
    otp,
  }

  return request
    .post('/flwv3-pug/getpaidx/api/validate', payload)
    .then((response: AxiosResponse<ChargeResponse<any, any>>) => {
      if (response.data.status === 'success') return response.data
      throwError({ message: 'Unknown Error', status: 'error' })
    })
}

export const verifyMMPayment = async (
  txref: string,
  secretKey: string,
  request: AxiosInstance
) => {
  const payload = { SECKEY: secretKey, txref }

  return request
    .post('/flwv3-pug/getpaidx/api/v2/verify', payload)
    .then((response: AxiosResponse<ChargeResponse<any, any>>) => {
      if (response.data.status === 'success') return response.data
      throwError({ message: 'Unknown Error', status: 'error' })
    })
}
