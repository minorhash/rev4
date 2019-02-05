function emp(){
var empt = document.forms["for1"]["name"].value;
if (empt == "")
{
alert("Please input a Value");
return false;
}
else
{
alert('Code has accepted : you can try another');
return true;
}
}
