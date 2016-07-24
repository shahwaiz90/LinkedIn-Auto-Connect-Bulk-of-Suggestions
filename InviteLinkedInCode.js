//The code was orignally created by Tanvir Zafar (https://www.facebook.com/tanvirzafar123). I just refactored, commented and fixed some errors.
//Copy & Paste this code in the Console After opening (https://www.linkedin.com/people/pymk?)
//It will run after every 3 second.
setInterval(function() {
    //Get the Connect Buttons available in the "People You May Know" Page i.e: 12
    var getAllConnectButtons = document.getElementsByClassName('bt-request-buffed');
    for (var i = 0; i < getAllConnectButtons.length; i++) { //Iterate to 12 Invitations 
        //Returning the Name of the Person
        console.log(getAllConnectButtons[i].parentNode.children[0].children[1].children[0].textContent);
        //Sending the Invitation
        getAllConnectButtons[i].click();
    }
}, 3000);

