function emp(){
var name= document.forms["for1"]["name"].value;
var mail= document.forms["for1"]["mail"].value;

if (name == ""){
alert("名前を入力してください");
return false;
}
    else if (mail==""){
alert("emailを入力してください");
return false;

} else {
return true;
}
}//emp
