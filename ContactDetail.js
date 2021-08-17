class ContactDetails
{
    //creating constructor to add data 
    constructor (...params)
    {
        this.firstName=params[0];
        this.lastName=params[1];
        this.address=param[2];
        this.city=params[3];
        this.state=params[4];
        this.zipCode=params[5];
        this.email=params[6];
        this.phoneNumber=params[7];
    }
    //creating getter setter method
    get firstName() { return this._firstName; }
    set firstName(name) { this._firstName = name; }

    get lastName() { return this._lastName; }
    set lastName(name) { this._lastName = name; }

    get address() { return this._address; }
    set address(address) { this._address = address; }

    get city() { return this._city; }
    set city(city) { this._city = city; }

    get state() { return this._state; }
    set state(state) { this._state = state; }

    get zipCode() { return this._zipCode; }
    set zipCode(zipCode) { this._zipCode = zipCode; }

    get email() { return this._email; }
    set email(email) { this._email = email; }
    
    get phoneNumber() { return this._phoneNumber; }
    set phoneNumber(phoneNumber) { this._phoneNumber = phoneNumber; }
}