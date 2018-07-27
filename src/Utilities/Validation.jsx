import { DateTime } from "./DateTimeUtil";




// export interface IValdationResuslt {
//     state;
//     message;
// }


export class Validation {
    
    static formValidation (form) {
        let valid = true;

        if(Array.isArray(form)) {
            for (let i in form) {
                $(form[i]).find("input,select,textarea").each(function() {
                    if((Validation.fieldCheck(this))) {
                        //mark the field green
                        Validation.validHiglight(this);
                    } else {
                        //mark the field red
                        Validation.inValidHiglight(this);
                        valid = false;
                    }

                });
            }
        } else if (typeof form === "string") {
            $(form).find("input, select, textarea").each(function(){
                
                if ((Validation.fieldCheck(this))) {
                    //mark the field green
                    Validation.validHiglight(this);
                } else {
                    //mark the field red
                    Validation.inValidHiglight(this);
                    valid = false;
                }
            });
        }

        return valid;
    }

    static validHiglight(field) {
        $(field).addClass("validated");
        $(field).addClass("valid");
        $(field).removeClass("in-valid");
        $(field).removeClass("not-validated");

    }

    static inValidHiglight(field) {
        $(field).addClass("validated");
        $(field).addClass("in-valid");
        $(field).removeClass("valid");
        $(field).removeClass("not-validated");
    }

    static fieldCheck(field) {
        //we need to check if the field is required
        //if the field is required then we will need to check if the field is
        //1. not empty
        //2. the value enterd is valid from the type of form control
        //alert($(field).attr("id"));
        if ($(field).hasClass("required")) {
            //alert(this.fieldEmpty(field))
            if (this.fieldEmpty(field)) return false;
            if (!this.fieldEmpty(field)) return true;
            if ($(field).hasClass("in-valid")) return false ;
        } else {
            //if the field is not required then we only need to check if 
            //1. the value entered for the field is valid
            if (!Validation.fieldEmpty(field)) {
                if ($(field).hasClass("in-valid")) return false;
            }
        }

        return true;
    }

    

    static fieldEmpty(field) {
        return Validation.isEmpty($(field).val());
    }

    static inputValidation(value, state) {
        //check if the field is empty
        if (state.required && this.isEmpty(value)) {
            return { state: false, message: "This field is required" };
        }

        switch (state.type) {
        case "text":
            //check if the max length value has been exceeded
            return this.checkLength(value, state.minLength, state.maxLength);
        case "number":
            //check if the value is a valid number
                if (this.isInt(value)) {
                    //check if the minNumber value hase been exceeded
                    return this.checkNumber(value, state.minNumber, state.maxNumber);
                }
                return {state: false, message: "The value entered is not a number"};

        case "tel":
            //check if the max length value has been exceeded
            if (this.isInt(value)) {
                //check if the minNumber value hase been exceeded
                return this.checkNumber(value, state.minNumber, state.maxNumber);
            }
                return this.checkLength(value, state.minLength, state.maxLength);
        case "email":
            //check if the value is a valid email
                if (!this.checkEmail(value).state) {
                    return this.checkEmail(value);
                }
            
            //check if the max length value has been exceeded
                return this.checkLength(value, state.minLength, state.maxLength);
        case "password":
            //check if the max length value has been exceeded
                return this.checkLength(value, state.minLength, state.maxLength);
        case "date":
            //check if the max length value has been exceeded
                return this.isValidDate(value);
        default:
            return { state: false, message: "Invalid Form Control type" };
        }
    }

    static checkLength(value, minLength, maxLength) {
        if (value.length >= minLength) {
            if (value.length <= maxLength) {
                return { state: true, message: `Valid` };
            }
            return { state: false, message: `Max Characters ${maxLength} : Entered ${value.length}` };
        }
        return { state: false, message: `Min Characters ${minLength} : Entered ${value.length}` };
    }

    static checkNumber(value, minNumber, maxNumber) {
        if (value >= minNumber) {
            if (value <= maxNumber) {
                return { state: true, message: `Valid` };
            }
            return { state: false, message: `Max Characters ${maxNumber} : Entered ${value}` };
        }
        return { state: false, message: `Min Number ${minNumber} : Entered ${value}` };
    }

    static isValidDate(date) {
        if (DateTime.isValid(date)) {
             return { state: true, message: `Valid` };
        }
        return { state: false, message: `Invalid date ${date}` };
    }

    static isInt(value) {
        var x;
        return isNaN(value) ? !1 : (x = parseFloat(value), (0 | x) === x);
    }

    static checkEmail(value) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(value)) {
            return { state: true, message: `Valid` };
        }
        return { state: false, message: `Invalid Email Address` };
    }

    static percentCheck(value) {
        if (value <= 100) {
            return { state: true, message: `Valid` };
        }
        return { state: false, message: `Amount entered exceeds 100%` };
    }

    static setValidState(field) {
        $(field).removeClass("field-error");
        $(field).addClass("field-valid");
    }

    static setInvalidState(htmlElement) {
        throw new Error("Not implemented");
    }

    
    

    static clearValidation() {
        $("input,select,textarea").removeClass("field-error");
        $("input,select,textarea").removeClass("field-valid");
    }

    

    static isEmpty(val) {
        return /^\s*$/.test(val);
    }

    static contains(string, substring) {
        return ~string.indexOf(substring);
    }

    static noSpace(txt) {
        while (txt.match(/\s/) != null) txt = txt.replace(/\s/, "");
        return txt;
    }

    static percentFieldValidation(field) {
        $(field).on("blur", function() {
            if (parseFloat($(this).val()) > 100) {
                //u.growl_warning("Percentage value cannot be more than 100");
                $(this).val("");
            }
        });
    }
}