var personName = "";
personName = prompt("what is your name please?") || "";
if (personName !== null && personName !== "") {
    alert(${personName},"would u like to learn some Python today?");
}
else {
    alert("you have to submit your name");
}
console.log(personName);
