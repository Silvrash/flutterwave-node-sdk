import md5 from 'md5'
import forge from 'node-forge'
import * as R from 'ramda'

/**
 * this is the getKey function that generates an encryption Key
 * for you by passing your Secret Key as a parameter.
 * @param  {string} secretKey
 * @returns string
 */
export const getKey = (secretKey: string): string => {
  const keymd5: string = md5(secretKey)
  const keymd5last12 = keymd5.substr(-12)

  const seckeyadjusted = R.replace('FLWSECK-', '', secretKey)
  const seckeyadjustedfirst12 = seckeyadjusted.substr(0, 12)

  return R.concat(seckeyadjustedfirst12, keymd5last12)
}

/**
 * This is the encryption function that encrypts your payload
 * by passing the stringified format and your encryption Key.
 * @param  {string} key
 * @param  {string} text
 * @returns string
 */
export const encrypt = (key: string, _text: any): string => {
  const text = R.toString(_text)
  const cipher = forge.cipher.createCipher(
    '3DES-ECB',
    forge.util.createBuffer(key)
  )
  cipher.start({ iv: '' })
  cipher.update(forge.util.createBuffer(text, 'utf8'))
  cipher.finish()
  const encrypted = cipher.output

  return forge.util.encode64(encrypted.getBytes())
}
