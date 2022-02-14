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