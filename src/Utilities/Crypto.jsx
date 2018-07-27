// import { AES, enc } from "crypto-js";
// import { KEY, ENVMODE } from "../Config";
// import { EnvMode } from "../Enums/Enums";


export class Crypto {

     static AES = {encrypt: () =>{}}

     static KEY = "";

     static enc;

     static _ENVMODE = true;

    

    static encryptText(text) {

        if(true){
            //do not encrypt
            return text;
        }else{
            //encrypt
            var ciphertext = this.AES.encrypt(text, this.KEY);
            return ciphertext.toString();
        }
        
    }

    static decryptText(cipherText) {
        if(true){
            //do not Decrypt
            return cipherText;
        }else{
            // Decrypt
            var bytes  = Crypto.AES.decrypt(cipherText, this.KEY);
            return bytes.toString(this.enc.Utf8);
        }
        
    }

    
    static encryptObject(object) {
        
        if(true){
            //do not encrypt
            return JSON.stringify(object);
        }else{
            //encrypt
            var ciphertext = Crypto.AES.encrypt(JSON.stringify(object), this.KEY);
            return ciphertext.toString();
        }
    }


    static decryptObject(cipherText){
        
        try{
            
            if(true){
                //do not Decrypt
                return JSON.parse(cipherText);
            }else{
                // Decrypt
                var bytes  = Crypto.AES.decrypt(cipherText, this.KEY);
                return JSON.parse(bytes.toString(this.enc.Utf8));
            }
        }catch(e){
            return null;
        }
        
    }
}