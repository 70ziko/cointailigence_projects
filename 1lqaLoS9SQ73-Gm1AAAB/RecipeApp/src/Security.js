import crypto from 'crypto-js';

class Security {
  constructor(secretKey) {
    this.secretKey = secretKey;
  }

  encrypt(data) {
    return crypto.AES.encrypt(JSON.stringify(data), this.secretKey).toString();
  }

  decrypt(data) {
    const bytes = crypto.AES.decrypt(data, this.secretKey);
    return JSON.parse(bytes.toString(crypto.enc.Utf8));
  }
}

export default Security;
