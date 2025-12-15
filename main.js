function showAlert(){
	
	alert("اهلا وسهلا بكم في الدليل السياحي الذكي لقطر")
}
 var isChanged=false;
function theme(){
    if(!isChanged){
        document.body.style.backgroundColor="rgba(77, 27, 27, 1)";
        document.body.style.color="black";
        isChanged=true;
    }
    else{
        document.body.style.backgroundColor="rgba(255, 255, 255, 1)";
        document.body.style.color="rgba(79, 26, 26, 1)";
        isChanged=false; 
    }
}