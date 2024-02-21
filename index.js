// any string to Number

function stToNum(num) {
  const number = document.getElementById(num).innerText;
  const convertNum = parseInt(number);
  return convertNum;
}
const seatBook = stToNum("booked-seat");
const bakiSeat = stToNum("baki-seat");
const Seat_dam = stToNum("seat-dam");

const allSeat = document.getElementsByClassName("btn-seat");

for (btn of allSeat) {
  btn.addEventListener("click", function (event) {
    const seatNum = event.target.innerText;

    const selectEmptyDiv = document.getElementById("empty-div");

    const newDiv = document.createElement("div");
    newDiv.classList.add("flex");
    newDiv.classList.add("justify-between");
    const seat = document.createElement("p");
    const sClass = document.createElement("p");
    const price = document.createElement("p");

    seat.innerText = seatNum;
    sClass.innerText = "Economics";
    price.innerText = Seat_dam;

    newDiv.appendChild(seat);
    newDiv.appendChild(sClass);
    newDiv.appendChild(price);

    selectEmptyDiv.appendChild(newDiv);
  });
}
