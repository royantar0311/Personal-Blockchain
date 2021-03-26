const crypto = require("crypto")

class Account{

    constructor(username,passHash,publicKey,encryptedPrivateKey)
    {
        this.publicKey = publicKey
        this.encryptedPrivateKey = encryptedPrivateKey
        this.username = username
        this.passHash = passHash
    }
    getPublicKey(){
        return this.publicKey
    }
    getEncryptedPrivateKey(){
        return this.encryptedPrivateKey
    }
    
}

module.exports = {Account}