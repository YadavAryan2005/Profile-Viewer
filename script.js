let url = "https://randomuser.me/api/";
async function abc() {
  let a = await fetch(url);
  let response = await a.json();
  console.log(response);
  let div = document.createElement("div");
  div.className = "container";
  let div1 = document.createElement("div");
  div1.className = "img";
  let name = "";
  name +=
    response.results[0].name.title +
    " " +
    response.results[0].name.first +
    " " +
    response.results[0].name.last;
  let p = document.createElement("p");
  p.innerText = name;
  let email = response.results[0].email;
  let p1 = document.createElement("p");
  p1.innerText = "Email:-" + email;
  let p2 = document.createElement("p");
  let gender = response.results[0].gender;
  p2.innerText = "Gender:-" + gender;
  let p3 = document.createElement("p");
  let address = "";
  address +=
    "City=" +
    response.results[0].location.city +
    " " +
    "State=" +
    response.results[0].location.state +
    " " +
    "Country=" +
    response.results[0].location.country;
  p3.innerText = "Address:-" + address;
  let img = document.createElement("img");
  img.src = response.results[0].picture.large;
  let div2 = document.createElement("div");
  div2.className = "subdiv";
  div1.appendChild(img);
  div1.appendChild(p);
  div.appendChild(div1);
  p1.appendChild(p2);
  p1.appendChild(p3);
  div2.appendChild(p1);
  div.appendChild(div2);
  let main = document.getElementsByClassName("main")[0];
  main.appendChild(div);
}
async function display() {
  for (let i = 0; i < 52; i++) {
    await abc();
  }
}
display();
function dis() {
  display();
}
