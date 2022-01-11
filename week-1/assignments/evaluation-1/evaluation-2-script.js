function onSubmitHandler(e) {
    e.preventDefault();
    document.getElementById("display").innerText= 
    
    "Email: "+document.getElementById("email").value +"\n"+
    "Date: "+document.getElementById("date").value +"\n"+
    "Comment: "+document.getElementById("comment").value;
}