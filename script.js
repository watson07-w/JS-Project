let username = document.getElementById("username");
let mail = document.getElementById("mail");
let date = document.getElementById("date");
let degree = document.getElementById("degree");
let locationChennai = document.getElementById("location-chennai");
let locationBangalore = document.getElementById("location-bangalore");
let locationDelhi = document.getElementById("location-delhi");
let genderMale = document.getElementById("gender-male");
let genderFemale = document.getElementById("gender-female");
let submit = document.getElementById("submit");

function formDetails(e) {
  e.preventDefault();
  if (username.value.length == 0) {
    alert("User Name is empty");
  } else if (mail.value.length == 0) {
    alert("Email  is empty");
  } else if (date.value.length == 0) {
    alert("select date");
  } else if (degree.value.length == 0) {
    alert("select degree");
  } else if (
    locationChennai.checked == false &&
    locationBangalore.checked == false &&
    locationDelhi.checked == false
  ) {
    alert("select location");
  } else if (genderMale.checked == false && genderFemale.checked == false) {
    alert("select gender");
  } else {
    let locations = [];
    if (locationChennai.checked) locations.push("Chennai");
    if (locationBangalore.checked) locations.push("Bangalore");
    if (locationDelhi.checked) locations.push("Delhi");

    let gender = genderMale.checked ? "Male" : "Female";

    let person = {
      id: Math.floor(Math.random() * 1000),
      name: username.value,
      email: mail.value,
      date: date.value,
      degree: degree.value,
      location: locations.join(", "),
      gender: [gender],
    };

    let list = document.createElement("li");
    let details = `${person.id} - ${person.name} - ${person.email} - ${person.date} - ${person.degree} - ${person.location} - ${person.gender}`;

    list.innerHTML = details;
    document.querySelector(".userList ul").appendChild(list);

    username.value = "";
    mail.value = "";
    date.value = "";
    degree.value = "";
    locationChennai.checked = false;
    locationBangalore.checked = false;
    locationDelhi.checked = false;
    genderMale.checked = false;
    genderFemale.checked = false;
  }
}

submit.addEventListener("click", formDetails);
