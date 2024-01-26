import CryptoJS from 'react-native-crypto-js';

// Encrypt

const cipher = (string: string, key: string) => {
  return CryptoJS.AES.encrypt(string, 'secret key 123').toString();
};

// Decrypt
const decipher = (ciphertext: string, key: string) => {
  let bytes = CryptoJS.AES.decrypt(ciphertext, 'secret key 123');
  let originalText = bytes.toString(CryptoJS.enc.Utf8);
  return originalText;
};

export default {
  cipher,
  decipher,
};
