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

const myContacts = [];
function addToContact() {
  for (let i = 0; i < myContacts.length; i++) {
    if (
      myContacts[i].fullname === fullname ||
      myContacts[i].number === number
    ) {
      alert("this person already exist");
    } else {
      myContacts.push({ fullname, number });
      document.getElementById("name").value = "";
      document.getElementById("number").value = "";
    }
  }
}
const add_to_contact = document.getElementById("add-to-contact");
add_to_contact.addEventListener("click", addToContact);
