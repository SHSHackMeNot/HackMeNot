function randomGenerator(){
	var passLength = document.getElementById("passLength").value;
	var let=document.getElementById("letCheck").checked;
    var capLet=document.getElementById("capLetCheck").checked;
    var num=document.getElementById("numCheck").checked;
    var spec=document.getElementById("specCheck").checked;
    var typeArray = [let,capLet,num,spec];
    
    var password="";
    var charactorSet=""; 
    var lowerCase = "abcdefghijklmnopqrstuvwxyz";
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUV";
    var numbers = "1234567890";
    var special = "!@#$^&*?.";
    
    if(typeArray[0]==true){
    	charactorSet += lowerCase;
    }
    if(typeArray[1]==true){
    	charactorSet += upperCase;
    }
    if(typeArray[2]==true){
    	charactorSet += numbers;
    }
    if(typeArray[3]==true){
    	charactorSet += special;
    }
    
    
    
    for (var i=0;i<passLength;i++){
		password += charactorSet.charAt(Math.floor(Math.random() * charactorSet.length));
	}
	
	alert("Your randomly generated password is: "+password);
	document.getElementById("passwordGenResultsParagraph").innerHTML = password;
}