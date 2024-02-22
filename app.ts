let personName : string = "";
//personName=prompt("what is your name please?") || "";
personName=prompt("what is your name please?");
//let greetings = `Hello ${personName}`;
//alert(greetings);
if(personName !== null && personName !== ""){
    let greetings = `Hello ${personName} would u`;
    //alert("hello ${personName},would u like to learn some Python today?");
    alert(greetings);
}
else{
    alert("you have to submit your name")
}
//console.log(personName);