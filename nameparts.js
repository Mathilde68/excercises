const myFullName = "Mathilde Emilie Laursen";


function getNameParts(fullname){
    const firstSpace = fullname.indexOf(" ");
    const lastSpace = fullname.lastIndexOf(" ");

    firstName = fullname.substring(0, firstSpace);
    middleName = fullname.substring(firstSpace +1 ,lastSpace);
    lastName = fullname.substring(lastSpace+1);

    console.log( { firstName, middleName, lastName } );

}

getNameParts(myFullName);
getNameParts("Kæmpe stor idiot");



function getFullName(lastname, firstname, middlename){

    let fullname;

    if (middlename == undefined){
        console.log("i work case 1");
        fullname = `${firstname} ${lastname}`
    } else{
        console.log("i work case 2");
     fullname = `${firstname} ${middlename} ${lastname}`;
    }

   console.log(fullname);
}

getFullName("Pottter", "Harry");
getFullName("Pottter", "Harry", "James");