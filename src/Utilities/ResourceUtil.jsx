// import { HOST, FILESERVER } from "../Config";



export class Resource {

    static image(path) {
        return `${"HOST"}${path}`;
    }

   static fileServerImage(path) {
       
       return `${"FILESERVER"}${path}`;
   }

}