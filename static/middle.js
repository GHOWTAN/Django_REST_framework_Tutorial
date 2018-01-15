function readEntries(url){
 var request = new XMLHttpRequest();
 request.open("GET", url, false);
 request.setRequestHeader("Authorization", "Basic " + btoa("admin:password123"));
 request.setRequestHeader("X-CSRFToken", readCookie("csrftoken"));
 request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
 request.send(); 
 var array = JSON.parse(request.responseText);
 console.log(array);
return array;
}

function post(url,data){
 var request = new XMLHttpRequest();
 request.open("POST", url, false);
 request.setRequestHeader("Authorization", "Basic " + btoa("admin:password123"));
 request.setRequestHeader("X-CSRFToken", readCookie("csrftoken"));
 request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
 request.send(data); 
 var array = JSON.parse(request.responseText);
 console.log(array);
}

function deleteEntry(url){
 var request = new XMLHttpRequest();
 request.open("DELETE", "http://127.0.0.1:8000/owners/l", false);
 request.setRequestHeader("Authorization", "Basic " + btoa("admin:password123"));
 request.setRequestHeader("X-CSRFToken", readCookie("csrftoken"));
 request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
 request.send(); 
 console.log(request.responseText);
 //var array = JSON.parse(request.responseText);
//console.log(array);

}

function readCookie(name) {
 var nameEQ = encodeURIComponent(name) + "=";
 var ca = document.cookie.split(';');
 for (var i = 0; i < ca.length; i++) {
 var c = ca[i];
 while (c.charAt(0) === ' ') c = c.substring(1, c.length);
 if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
 }
 return null;
}
