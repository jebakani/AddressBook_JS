class ContactDetails {
    //creating constructor to add data 
    constructor(...params) {
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zipCode = params[5];
        this.email = params[6];
        this.phoneNumber = params[7];
    }
    //creating getter setter method
    get firstName() { return this._firstName; }
    set firstName(name) {
        let pattern = RegExp("^[A-Z]{1}[a-z]{3,}$")
        if (pattern.test(name)) {
            this._firstName = name;
        }
        else {
            throw 'Name is incorrect';
        }
    }

    get lastName() { return this._lastName; }
    set lastName(name) {
        let pattern = RegExp("^[A-Z]{1}[a-z]{3,}$")
        if (pattern.test(name)) {
            this._lastName = name;
        }
        else {
            throw 'Name is incorrect';
        }
    }

    get address() { return this._address; }
    set address(address) {
        if (CheckValidity(address, "^[A-Za-z]{4,}$")) {
            this._address = address;
        }
        else {
            throw 'Address Should have atleast four char';
        }
    }

    get city() { return this._city; }
    set city(city) {
        if (CheckValidity(city, "^[a-z]{4,}$")) { this._city = city; }
        else
            throw 'city should be atleast 4 char';
    }

    get state() { return this._state; }
    set state(state) {
        if (CheckValidity(state, "^[A-Za-z \\s]{4,}")) { this._state = state; }
        else
            throw 'state should be atleast 4 char';
    }

    get zipCode() { return this._zipCode; }
    set zipCode(zipCode) {
        if (CheckValidity(zipCode, "^[1-9][0-9]{2}\\s{0,1}[0-9]{3}$")) { this._zipCode = zipCode; }
        else
            throw 'zipCode is incorrect';
    }

    get email() { return this._email; }
    set email(email) {
        if (CheckValidity(email, "^[a-zA-Z]{3}([\- \+ _\.]*[a-zA-Z0-9]+)*@[a-zA-Z0-9]+\.[a-z]{2,3}(\.[a-zA-Z]{2,4}){0,1}$")) { this._email = email; }
        else
            throw 'email is  incorrect';
    }

    get phoneNumber() { return this._phoneNumber; }
    set phoneNumber(phoneNumber) {
        if (CheckValidity(phoneNumber, "^[1-9]{2}\\s[1-9][0-9]{9}$")) { this._phoneNumber = phoneNumber; }
        else
            throw 'phoneNumber is not valid';
    }
    toString() {
        return 'Name:' + this.firstName + ' ' + this.lastName + ' \t Address:' + this.address + '\t city:' + this.city + '\t state:' + this.state + '\t zipcode:' + this.zipCode + '\t email:' + this.email + '\t phoneNumber:' + this.phoneNumber;
    }
}
//check the validity of the variables by passing the value and pattern
function CheckValidity(value, patternWord) {
    let pattern = RegExp(patternWord)
    if (pattern.test(value)) {
        return true;
    }
    else {
        return false;
    }
}
