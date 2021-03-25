const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct
  }
  encrypt(text, key) {
    if (!text || !key ) {
      throw Error('One or more arguments is absent')
    }

    text = text.toUpperCase().split('')
    key = key.toUpperCase().split('')
    let encryptedText = ''
    let keyIndex = 0
    for (let i = 0; i < text.length; i++) {
      if (text[i].charCodeAt(0) >= 65 && text[i].charCodeAt() <= 90) {
        let pi = text[i].charCodeAt(0) - 65
        let ki = key[keyIndex % key.length].charCodeAt(0) - 65
        let encryptedLetter = pi + ki
        let ci = ((encryptedLetter % 26) + 26) % 26
        encryptedText += String.fromCharCode(ci + 65)
        keyIndex++
      } else {
        encryptedText += text[i]
      }
    }
    return this.direct ? encryptedText : encryptedText.split('').reverse().join('')
  }
  decrypt(encryptedText, key) {
    if (!encryptedText || !key ) {
      throw Error('One or more arguments is absent')
    }
    encryptedText = encryptedText.toUpperCase().split('')
    key = key.toUpperCase().split('')
    let decryptedText = ''
    let keyIndex = 0
    for (let i = 0; i < encryptedText.length; i++) {
      if (encryptedText[i].charCodeAt(0) >= 65 && encryptedText[i].charCodeAt() <=90) {
        let ci = encryptedText[i].charCodeAt(0) - 65
        let ki = key[keyIndex % key.length].charCodeAt(0) - 65
        let decryptedLetter = ci - ki
        let pi = ((decryptedLetter % 26) + 26) % 26
        decryptedText += String.fromCharCode(pi + 65)
        keyIndex++
      } else {
        decryptedText += encryptedText[i]
      }
    }
    return this.direct ? decryptedText : decryptedText.split('').reverse().join('')
  }
}

module.exports = VigenereCipheringMachine;
