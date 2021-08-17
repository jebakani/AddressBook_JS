//importing the class from Contactdetail.js file
const { ContactDetail } = require("./ContactDetail");
var prompt = require('prompt-sync')();
var Continue = true;
let AddressBookArr = new Array()
{
    while (Continue) {
        console.log("1.Add Address Book detail\n 2.Display Address Book\n 3.Edit detail\n4.Delete Contact\n5.Count\n6.Search a person by city or state");
        let choice = prompt('Enter ur choice:');
        switch (parseInt(choice)) {
            case 1:
                //UC7-Duplicate check before adding contact
                let Name = prompt('Enter the naem to be added:')
                //filter the array by name and count the element 
                let duplicate = AddressBookArr.filter(x => x.firstName == Name).reduce(CountOfContact, 0);
                //if array does not contain value then add contact
                if (duplicate == 0) {
                    AddDetail();
                }
                else {
                    console.log('Contact already available');
                }
                break;
            case 2:
                AddressBookArr.forEach(DisplayContact);
                break;
            case 3:
                let name = prompt('Enter the first name:');
                //using lambda fuction to find the contact detail given the first name
                let contact = AddressBookArr.find(x => x.firstName == name);
                if (contact == null) {
                    console.log('no contact available');
                }
                else {
                    EditDetails(contact);
                }
                break;
            case 4:
                deleteName = prompt('Enter the first name:');
                let index = AddressBookArr.findIndex(x => x.firstName == deleteName);
                if (index == -1) {
                    console.log('no contact available');
                }
                else {
                    DeleteContact(index);
                }
                break;
            //UC6-Count contact by using reduce function
            case 5:
                console.log("total count of contact:" + AddressBookArr.reduce(CountOfContact, 0));
                break;
            case 6:
                SearchByCityOrState();
                break;
            default:
                Continue = false;
                break;
        }
    }
}
function AddDetail() {
    try {
        //getting details from the user
        let firstName = prompt('Enter firstName:');
        let lastName = prompt('Enter lastName:');
        let address = prompt('Enter address:');
        let city = prompt('Enter city:');
        let state = prompt('Enter state:');
        let zipCode = prompt('Enter zipCode:');
        let email = prompt('Enter email:');
        let phoneNumber = prompt('Enter phoneNumber:');
        //creating the address book object
        let detail = new ContactDetail(firstName, lastName, address, city, state, zipCode, email, phoneNumber);
        //pushing the object into array
        AddressBookArr.push(detail);
    } catch (e) {
        console.error(e);
    }
}

function DisplayContact(contact) {
    console.log(contact.toString());
}
//UC4-Edit details
function EditDetails(contact) {
    try {
        let choice = prompt('1.Edit Name 2.Edit address 3.Edit city 4.Edit state 5.Edit zipcode 6.edit email 7.edit phoneNumber:');
        switch (parseInt(choice)) {
            case 1:
                contact.firstName = prompt('enter first name:');
                contact.lastName = prompt('enter the last name:');
                break;
            case 2:
                contact.address = prompt('enter address:');
                break;
            case 3:
                contact.city = prompt('enter city:');
                break;
            case 4:
                contact.state = prompt('enter state:');
                break;
            case 5:
                contact.zipCode = prompt('enter zipcode:');
                break;
            case 6:
                contact.email = prompt('enter email:');
                break;
            case 7:
                contact.phoneNumber = prompt('enter phoneNumber:');
                break;
            default:
                break;
        }
    }
    //if any error occure catch the exception 
    catch (e) {
        console.error(e);
    }
}

function DeleteContact(index) {
    //Uc5- deleting the contact deltai
    AddressBookArr.splice(index, 1);
    console.log("Delete successful")
}
//function that returns the total count 
function CountOfContact(totalCount) {
    return ++totalCount;
}
//Uc9-view By city or state
function SearchByCityOrState() {
    let choice = prompt('1.Search by city 2.Search by state');
    let name = prompt('enter the person name:')
    switch (parseInt(choice)) {
        case 1:
            let city = prompt('enter the city name');
            var person = AddressBookArr.filter(x => x.city == city).find(x => x.name == name);
            break;
        case 2:
            let state = prompt('enter the state name');
            var person = AddressBookArr.filter(x => x.state == state).find(x => x.name == name);
            break;
        default:
            break;
    }
    if(person.reduce(CountOfContact,0)==1)
    {
        console.log(person.toString());
    }
}
