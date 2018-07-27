import { Crypto } from "./Crypto";



export class StorageUtil {

    //raw session storage
    static sesGetJson = (key) => {
        //decrypt
        return Crypto.decryptObject(window.sessionStorage.getItem(key)||"");
    }


    static sesSetJson = (key, value) => {
        //encrypt
        window.sessionStorage.setItem(key, Crypto.encryptObject(value));
    }

    static sesGet = (key) => {
        //decrypt
        return Crypto.decryptText(window.sessionStorage.getItem(key)||"");
    }


    static sesSet = (key, value) => {
        //encrypt
        window.sessionStorage.setItem(key, Crypto.encryptText(value));
    }
    
    //secure session storage
    static sesSecureGetJson = (key) => {

        //decrypt
        return Crypto.decryptObject(window.sessionStorage.getItem(key)||"");
    }

    static sesSecureSetJson = (key, value) => {
        //encrypt
        window.sessionStorage.setItem(key, Crypto.encryptObject(value));
        
    }

    static sesSecureGet = (key) => {
        //decrypt
        return Crypto.decryptText(window.sessionStorage.getItem(key)||"");
    }

    static sesSecureSet = (key, value) => {
        //encrypt
        window.sessionStorage.setItem(key, Crypto.encryptText(value));
    }
    

    //raw local storage
    static locGetJson = (key) => {
        return JSON.parse(window.sessionStorage.getItem(key));
    }


    static locSetJson = (key, value) => {
        window.sessionStorage.setItem(key, JSON.stringify(value));
    }


    static locGet = (key) => {
        return JSON.parse(window.sessionStorage.getItem(key));
    }


    static locSet = (key, value) => {
        window.sessionStorage.setItem(key, JSON.stringify(value));
    }

    //secure local
    static locSecureGetJson = (key) => {
        return Crypto.decryptObject(window.sessionStorage.getItem(key)||"");
    }


    static locSecureSetJson = (key, value) => {
        window.sessionStorage.setItem(key, Crypto.encryptObject(value));
    }


    static locSecureGet = (key) => {
        return Crypto.decryptText(window.sessionStorage.getItem(key)||"");
    }


    static locSecureSet = (key, value) => {
        window.sessionStorage.setItem(key, Crypto.encryptText(value));
    }
    

    //storage deletions
    static sesDel = (key) => {
        window.sessionStorage.removeItem(key);
    }
    

    static locDel = (key) => {
        window.localStorage.removeItem(key);
    }

    //storage data flushing
    static sesClear = () => window.sessionStorage.clear();


    static locClear = () => window.localStorage.clear();

}