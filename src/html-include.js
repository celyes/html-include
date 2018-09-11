function includeFile(){
	var all, i, elem, filePath, xhttp;
	all = document.getElementsByTagName("*");
	for(i = 0; i < all.length; i++){
		elem = all[i];
		filePath = elem.getAttribute("include");
		if(filePath){
			xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function(){
				if(this.readyState == 4){
					if(this.status == 200){
						elem.innerHTML = this.responseText;
					}
					else{
						console.log("File Not found");
					}
					elem.removeAttribute("include");
					includeFile();
				}
			}
			xhttp.open("GET", filePath, true);
			xhttp.send();
			return;
		}
	}
};