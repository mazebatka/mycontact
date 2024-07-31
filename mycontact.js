let fullname = "";
let number = "";

const name_input = document.getElementById("name");
name_input.addEventListener("input", function (event) {
  fullname = event.target.value;
});

const number_input = document.getElementById("number");
number_input.addEventListener("input", function (event) {
  number = event.target.value;
});

function clearForm() {
  document.getElementById("name").value = "";
  document.getElementById("number").value = "";
  fullname = "";
  number = "";
}
function addContact() {
  myContacts.push({ fullname, number });
}

const myContacts = [];
function addToContact() {
  if (fullname === "" || number === "") {
    alert("Both name and number are required.");
    return;
  } else {
    for (let i = 0; i < myContacts.length; i++) {
      if (
        myContacts[i].fullname === fullname ||
        myContacts[i].number === number
      ) {
        alert("this person already exist");
        clearForm();
        return;
      }
    }
    console.log(myContacts);
    addContact();
    displayContact();
    clearForm();
    return;
  }
}

function displayContact() {
  const contactList = document.getElementById("mycontact-list");
  contactList.innerHTML = "";
  for (let i = 0; i < myContacts.length; i++) {
    const new_contact = document.createElement("li");
    new_contact.textContent = `${myContacts[i].fullname}: ${myContacts[i].number}`;
    contactList.appendChild(new_contact);
  }
}
const myContactList = document.getElementById("mycontact-list");

const add_to_contact = document.getElementById("add-to-contact");
add_to_contact.addEventListener("click", addToContact);
