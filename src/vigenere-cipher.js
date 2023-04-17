const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct) {
    this.direct = direct === true || direct === undefined ? true : false;
    this.reverse = direct === false ? true : false;
    this.alphaet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  }

  _getKey(message, keyword) {
    if (message.length / keyword.length === 1) {
      return keyword;
    }
    if (message.length / keyword.length > 1) {
      let key = '';
      for (let i = 0; i < Math.floor(message.length / keyword.length); i++) {
        key += keyword;
      }
      key += keyword.slice(0, message.length % keyword.length);
      return key;
    }
    if (message / keyword < 1) {
      return keyword.slice(0, message.length % keyword.length);
    }
  }

  encrypt(message, keyword) {
    if (message === undefined || keyword === undefined) {
      throw new Error('Incorrect arguments!')
    } else {
      let result = '';
      let currentCharIndex = 0;
      const trimmedMessage = message.replace(/[^a-z]/gi, '');
      const key = this._getKey(trimmedMessage, keyword);
      for (let i = 0; i < message.length; i++) {
        if (/[a-z]/gi.test(message[i])) {
          const charCodesSum = this.alphaet.findIndex(letter => letter === trimmedMessage[currentCharIndex].toLowerCase()) + this.alphaet.findIndex(letter => letter === key[currentCharIndex].toLowerCase());
          const encryptedCharCode = charCodesSum < 26 ? charCodesSum : charCodesSum - 26;
          const encryptedChar = this.alphaet[encryptedCharCode];
          result += encryptedChar;
          currentCharIndex++;
        } else {
          result += message[i];
        }
      }
      return result.toUpperCase();
    }
  }
  decrypt(message, keyword) {
    if (message === undefined || keyword === undefined) {
      throw new Error('Incorrect arguments!')
    } else {
      let result = '';
      let currentCharIndex = 0;
      const trimmedMessage = message.replace(/[^a-z]/gi, '');
      const key = this._getKey(trimmedMessage, keyword);
      for (let i = 0; i < message.length; i++) {
        if (/[a-z]/gi.test(message[i])) {
          const charCodesSum = this.alphaet.findIndex(letter => letter === trimmedMessage[currentCharIndex].toLowerCase()) + this.alphaet.findIndex(letter => letter === key[currentCharIndex].toLowerCase());
          const encryptedCharCode = Math.abs(charCodesSum) < 26 ? Math.abs(charCodesSum) : Math.abs(charCodesSum) - 26;
          const encryptedChar = this.alphaet[encryptedCharCode];
          result += encryptedChar;
          currentCharIndex++;
        } else {
          result += message[i];
        }
      }
      return result.toUpperCase();
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
