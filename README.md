<p align="center">
  <img src="https://user-images.githubusercontent.com/1223799/50992071-73562500-1516-11e9-99fa-9f73b0f0eee2.png" width="597" alt="flutterwave-node-sdk">
</p>

# flutterwave-node-sdk

> Nodejs sdk for flutterwave for flutterwave

[![Build Status](https://travis-ci.org/Silvrash/flutterwave-node-sdk.svg?branch=master)](https://travis-ci.org/Silvrash/flutterwave-node-sdk)
[![NPM version](https://img.shields.io/npm/v/flutterwave-node-sdk.svg)](https://www.npmjs.com/package/flutterwave-node-sdk)
![Downloads](https://img.shields.io/npm/dm/flutterwave-node-sdk.svg)
[![Standard Version](https://img.shields.io/badge/release-standard%20version-brightgreen.svg)](https://github.com/conventional-changelog/standard-version)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

---

## ✨ Features

- Card Payments. (Visa, MasterCard)
- Mobile Money Payments.

## 🔧 Installation

```sh
yarn add flutterwave-node-sdk
```

## 🎬 Getting started

Let's demonstrate simple usage with ... example:

```ts
import { RavePay } from 'flutterwave-node-sdk'

export const rave = RavePay(
  RAVE_PUBLIC_KEY,
  RAVE_SECRET_KEY,
  RAVE_IS_PRODUCTION
)
const raveData = {
  payment_type: 'mobilemoneygh',
  network: transactionSchema.network,
  voucher: transactionSchema.voucher, // only needed for Vodafone users.
  is_mobile_money_gh: 1,

  currency: 'GHS',
  country: 'GH',
  amount: amount.toString(),
  email: email,
  phonenumber: phone,

  firstname: '',
  lastname: '',

  IP: '',
  txRef: 'APP-NAME' + Date.now(),
  redirect_url: '',
  meta: [],
  device_fingerprint: '',
}
let res = await rave.initPayment(raveData)
```

## 🎭 Examples

Go checkout [examples](./examples) !

## 🥂 License

[MIT](./LICENSE.md) as always
