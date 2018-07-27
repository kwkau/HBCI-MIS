import * as m from "moment"

export class DateTime {

    static formats = ["MM/DD/YYYY", "YYYY-MM-DD HH:mm:ss[Z]", "DD/MM/YYYY", "DD/MM/YYYY", "DD/MM/YYYY HH:mm:ssZ", "MM/DD/YYYY HH:mm:ssZ"];

    static dateOutPutFormat = "DD/MM/YYYY";

    static datetimeOutPutFormat = "DD/MM/YYYY HH:mm:ss";

    static dbDateOutPutFormat = "YYYY-MM-DD";

    static dbDateTimeOutPutFormat = "YYYY-MM-DD HH:mm:ss[Z]";

    static now() {
        return m().format("YYYY-MM-DD HH:mm:ss[Z]");
    }

    static isLeapYear(date) {
        return m(date, this.formats).isLeapYear();
    }

    static getDatetime() {
        return m().format("DD/MM/YYYY HH:mm:ss[Z]");
    }

    static parse(date, customDateFormat = "") {
        if (!date) return "";

        if (customDateFormat) {
            return m(date, this.formats).format(customDateFormat);
        }
        return m(date, this.formats).format(this.dateOutPutFormat);
    }

    static dateFullDate(date) {
        if (!date) return "";
        return m(date, this.formats).format("Do MMMM YYYY");
    }

    static getTime(date) {
        return m(date).format("HH:mm:ss");
    }
    
    static dbDate(date) {
        if (!date) return "";
        return m(date, this.formats).format(this.dateOutPutFormat);
    }

    static getYear(date) {
        return m(date).get("year");
    }

    static getMonth(date) {
        return m(date, this.formats).get("month");
    }

    static getDay(date) {
        return m(date, this.formats).get("day");
    }

    /**
     * function to move the date specefied to a future specefied by the amount and the
     * unit used for the fast forward whether days/months/years.
     * @param string date 
     * @param int amnt 
     * @param string unit 
     * @returns string 
     */
    static dateFastForward(date, amnt, unit) {
        return m(date, this.formats).add(amnt, unit);
    }

    /**
     * function to check if date1 is equal to date2
     * @param string date1
     * @param string date2
     * @returns bool true if date1 equals date2
     */
    static datesEqual(date1, date2) {
        return m(date1, this.formats).isSame(m(date2, this.formats));
    }


    /**
     * function to check if date1 comes before date2
     * @param string date1
     * @param string date2
     * @returns bool true if date1 comes before date2
     */
    static dateAfter(date1, date2) {
        return m(date1, this.formats).isAfter(m(date2, this.formats));
    }

    /**
     * function to check if date1 comes before date2
     * @param string date1
     * @param string date2
     * @returns bool true if date1 comes before date2
     */
    static dateBefore(date1, date2) {
        return m(date1, this.formats).isBefore(m(date2, this.formats));
    }

    /**
     * function to calculate the total number of years between two dates
     * @param string date1
     * @param string date2
     * @returns int the total number of years
     */
    static totalYears(date1, date2) {
        return m(date1, this.formats).diff(m(date2, this.formats), "years");
    }

    /**
     * function to calculate the total number of months between two dates
     * @param string date1
     * @param string date2
     * @returns int the total number of months 
     */
    static totalMonths (date1, date2) {
        return m(date1, this.formats).diff(m(date2, this.formats), "months");
    }

    /**
     * function to calculate the total number of days between two dates
     * @param string date1
     * @param string date2
     * @returns int the total number of days 
     */
    static totalDays(date1, date2) {
        return m(date1, this.formats).diff(m(date2, this.formats), "days");
    }

    static isValid(date) {
        return m(date, this.formats).isValid();
    }
}