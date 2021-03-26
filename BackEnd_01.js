
const {CryptoSecurity} = require("./security")
var sha256 = require('js-sha256')
const {Account} = require("./account")
// const crypto = require ("crypto")


// This function returns an account. It also creates an instance in DB
function signUp(username,password)
{
    let cryptoSecurity = new CryptoSecurity()
    let key = cryptoSecurity.getKey("yooo")
    
    console.log(key)
    // let encrypedPrivateKey = cryptoSecurity.symmetricEncrypt(key.privateKey,password) 
    
}


// const key1 = new NodeRSA({b: 512});
 
// const text = 'Hello RSA!';
// const encrypted = key.encrypt(text, 'base64');
// console.log('encrypted: ', encrypted);
// const decrypted = key.decrypt(encrypted, 'utf8');
// console.log('decrypted: ', decrypted);

// console.log(key.exportKey('private'))

// console.log(key1.exportKey('private'))

signUp("text,pass","nee ase")


// function encrypt(text,password) {
//     let key = crypto.scryptSync(password, 'salt', 24)
//     const iv = crypto.randomBytes(16)
//     let cipher = crypto.createCipheriv('aes-192-cbc', key, iv)
//     let encrypted = cipher.update(text);
//     encrypted = Buffer.concat([encrypted, cipher.final()]);
//     return iv.toString('hex') + ':' + encrypted.toString('hex');
// }

// function decrypt(text,password) {
//     let key = crypto.scryptSync(password, 'salt', 24)
//     let textParts = text.split(':');
//     let iv = Buffer.from(textParts.shift(), 'hex');
//     let encryptedText = Buffer.from(textParts.join(':'), 'hex');
//     let decipher = crypto.createDecipheriv('aes-192-cbc', key, iv)
//     let decrypted = decipher.update(encryptedText);
//     decrypted = Buffer.concat([decrypted, decipher.final()]);
//     return decrypted.toString();
// // }


// let cryptoSecurity = new CryptoSecurity()

// let s = cryptoSecurity.symmetricEncrypt(text,pass)
// console.log(s)
// console.log(crydecrypt(s,pass))
