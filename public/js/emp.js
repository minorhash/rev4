function emp(){
var name= document.forms["for1"]["name"].value;
var mail= document.forms["for1"]["mail"].value;

if (name == ""){
alert("インプットしてください");
return false;
}
    else if (email==""){
alert("インプットしてください");
return false;

} else {
return true;
}
}//emp
