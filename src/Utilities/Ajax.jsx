//import { TokenManager as t } from "./TokenManager";
import * as $ from "jquery";




export class Ajax {
    
    Ajax(){
        this.host = "/";
        this.hrapi = "http://localhost:720/"
    }

    t;
    

    host;
    hrapi;
    
    static instance() {
        return new Ajax();
    }
    

    post(url, data, success, error) {
        $.ajax({
            url: url,
            data: JSON.stringify(data),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            success: success,
            error: (jqXhr, textStatus, errorThrow) => { this.ajaxError(jqXhr, textStatus, errorThrow, error); },
            type: "POST"
        });
    }

    tokenPost(url, data, success, error, token = null) {
        $.ajax({
            url: url,
            data: JSON.stringify(data),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token || this.t.getToken()}`
            },
            success: success,
            error: (jqXhr, textStatus, errorThrow) => { this.ajaxError(jqXhr, textStatus, errorThrow, error); },
            type: "POST"
        });
    }

     postFile(url, formData, success, error) {
        error = error || (() => { });
        $.ajax({
            url: url,
            data: formData,
            success: success,
            error: (jqXhr, textStatus, errorThrow) => { this.ajaxError(jqXhr, textStatus, errorThrow, error); },
            type: "POST",
            contentType: false,
            processData: false,
            dataType: "json"
        });
    }

     tokenPostFile(url, formData, success, error, token = null) {
        error = error || (() => { });
        $.ajax({
            url: url,
            data: formData,
            success: success,
            error: (jqXhr, textStatus, errorThrow) => { this.ajaxError(jqXhr, textStatus, errorThrow, error); },
            headers: { "Authorization": `Bearer ${token || this.t.getToken()}` },
            type: "POST",
            contentType: false,
            processData: false,
            dataType: "json"
        });
    }

     getFile(url, success, error) {
        error = error || (() => { });
        $.ajax({
            url: url,
            success: success,
            error: (jqXhr, textStatus, errorThrow) => { this.ajaxError(jqXhr, textStatus, errorThrow, error); },
            type: "GET",
            contentType: "application/octet-stream"
        });
    }

    

    get(url, success, error) {
        error = error || (() => { });
        $.ajax({
            url: url,
            success: success,
            error: (jqXhr, textStatus, errorThrow) => { this.ajaxError(jqXhr, textStatus, errorThrow, error); },
            type: "GET",
            contentType: ""
        });
    }

     tokenGet(url, success, error, token = null) {
        error = error || (() => { });
        $.ajax({
            url: url,
            success: success,
            error: (jqXhr, textStatus, errorThrow) => { this.ajaxError(jqXhr, textStatus, errorThrow, error); },
            headers: {"Authorization":`Bearer ${token || this.t.getToken()}`},
            type: "GET",
            contentType: "application/json; charset=utf-8"
        });
    }

     put(url, data, success, error) {
        error = error || (() => { });
        $.ajax({
            url: url,
            data: JSON.stringify(data),
            success: success,
            error: (jqXhr, textStatus, errorThrow) => { this.ajaxError(jqXhr, textStatus, errorThrow, error); },
            type: "PUT",
            contentType: "application/json; charset=utf-8",
            dataType: "json"
        });
    }

     tokenPut(url, data, success, error, token = null) {
        error = error || (() => { });
        $.ajax({
            url: url,
            data: JSON.stringify(data),
            success: success,
            error: (jqXhr, textStatus, errorThrow) => { this.ajaxError(jqXhr, textStatus, errorThrow, error); },
            headers: { "Authorization": `Bearer ${token || this.t.getToken()}` },
            type: "PUT",
            contentType: "application/json; charset=utf-8",
            dataType: "json"
        });
    }

     delete(url,  success, error) {
        error = error || (() => { });
        $.ajax({
            url: url,
            success: success,
            error: (jqXhr, textStatus, errorThrow) => { this.ajaxError(jqXhr, textStatus, errorThrow, error); },
            type: "DELETE",
            contentType: "application/json; charset=utf-8"
        });
    }

     tokenDelete(url, params, success, error, token = null) {
        error = error || (() => { });
        $.ajax({
            url: url,
            success: success,
            error: (jqXhr, textStatus, errorThrow) => { this.ajaxError(jqXhr, textStatus, errorThrow, error); },
            headers: { "Authorization": `Bearer ${token || this.t.getToken()}` },
            type: "DELETE",
            contentType: "application/json; charset=utf-8"
        });
    }

     cors(url, data, method, success, error) {
        error = error || (() => { });
        $.ajax({
            url: url,
            data: data,
            success: success,

            error: (jqXhr, textStatus, errorThrow) => { this.ajaxError(jqXhr, textStatus, errorThrow, error); },
            type: method
        });
        
     }

     queryPost(url, data,  success, error) {
        $.ajax({
                url: url,
                data: data,
                //crossDomain: true,
                type: "POST",
                contentType: "application/x-www-form-urlencoded",
                success: success,
                //error: (jqXhr, textStatus, errorThrow) => { this.ajaxError(err, error); }
                error: (err) => { this.ajaxError(err, "", "", error); }
                /*beforeSend (request) {
                    request.setRequestHeader("Authorization", `Bearer ${u.getToken()}`);
                }*/
                //headers: { "Authorization": `Bearer ${u.getToken()}`, "Access-Control-Allow-Origin":"*" }
                //dataType: "json"
        });
    }

     tokenQueryPost(url, data, success, error, token = null) {
        $.ajax({
                url: url,
                data: data,
                //crossDomain: true,
                type: "POST",
                contentType: "application/x-www-form-urlencoded",
                success: success,
                //error: (jqXhr, textStatus, errorThrow) => { this.ajaxError(err, error); }
                error: (jqXhr, textStatus, errorThrow) => { this.ajaxError(jqXhr, textStatus, errorThrow, error); },
                headers:{"Authorization":`Bearer ${token || this.t.getToken()}`}
                /*beforeSend (request) {
                    request.setRequestHeader("Authorization", `Bearer ${u.getToken()}`);
                }*/
                //headers: { "Authorization": `Bearer ${u.getToken()}`, "Access-Control-Allow-Origin":"*" }
                //dataType: "json"
        });
    }

     ajaxError(jqXhr, textStatus, errorThrow, errorCallback) {
         switch (textStatus) {
             case "500":
                 errorCallback(textStatus, jqXhr);
                 break;
             case "404":
                 errorCallback(textStatus, jqXhr);
                 break;
             case "0":
                 errorCallback(textStatus, jqXhr);
                 break;
             default:
                 errorCallback(textStatus, jqXhr);
                 break;
         }

         /*if (textStatus == 500) {
             
            //g.growl_error("Server Error");
             
         } else if (textStatus == 404) {
            //u.growl_error("The resource you are requesting cannot be found on the server.");
         } else if (textStatus == 0 && jqXhr.readyState === 0) {
            //u.growl_error("Its seems you are not connected to the Internet, please check your connection.");
        }*/
    }
}

export class AjaxErrorHandler {
    //catch the respective errors that are 
}