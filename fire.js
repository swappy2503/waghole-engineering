

var contactRef=firebase.database().ref().child("waghole/contactenquiry");
document.getElementById("contactF").addEventListener("submit",submitform);
function submitform(e){
    e.preventDefault();
    var name=getInputVal('name');
    var email=getInputVal('email');
	var phone=getInputVal('phone');
    //var subject=getInputVal('subject');
    var message=getInputVal('message');

console.log("submitted");
    saveForm(name,email,'',message,phone);
    document.getElementById("contactF").reset();

}




function getInputVal(id){
return document.getElementById(id).value;
}


function saveForm(name,email,subject,message,phone)
{
    var newContactRef=contactRef.push();
 
    newContactRef.set({
        name :name,
       email :email,
	   phone:phone,
       subject :subject,
       message :message

    });
     alert("Thank You for your messsage. We will contact You soon");
    
}