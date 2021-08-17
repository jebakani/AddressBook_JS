//importing the class from Contactdetail.js file
const {ContactDetail}=require("./ContactDetail");
var prompt = require('prompt-sync')();
var Continue=true;
let AddressBookArr=new Array()
{
   while(Continue)
   {
       console.log("1.Add Address Book detail\n 2.Display Address Book");
       let choice=prompt('Enter ur choice:');
       switch(parseInt(choice))
       {
          case 1:
              AddDetail();
              break;
          case 2:
              DisplayContact();
              break;
          default:
              Continue=false;
              break;
       }
   }
}
function AddDetail()
{
    //getting details from the user
    let firstName=prompt('Enter firstName:');
    let lastName=prompt('Enter lastName:');
    let address=prompt('Enter address:');
    let city=prompt('Enter city:');
    let state=prompt('Enter state:');
    let zipCode=prompt('Enter zipCode:');
    let email=prompt('Enter email:');
    let phoneNumber=prompt('Enter phoneNumber:');
    //creating the address book object
    let detail=new ContactDetail(firstName,lastName,address,city,state,zipCode,email,phoneNumber);
    //pushing the object into array
    AddressBookArr.push(detail);
}

function DisplayContact()
{
   for(let i=0;i<AddressBookArr.length;i++)
   {
       console.log(AddressBookArr[i].toString());
   }
}
