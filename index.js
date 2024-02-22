function stToNum(num) {
  const number = document.getElementById(num).innerText;
  const convertNum = parseInt(number);
  return convertNum;
}

const allSeat = document.getElementsByClassName("btn-seat");

for (btn of allSeat) {
  btn.addEventListener("click", function (event) {
    const seatNum = event.target.innerText;

    const seatBook = stToNum("booked-seat");
    const remainSeat = stToNum("remain-seat");
    const Seat_dam = stToNum("seat-dam");
    const grandTotalPrice = stToNum("grandTotalPrice");

    if (seatBook + 1 > 4) {
      alert("You Can't Purchase More then 4 ticket at a time");
      return;
    }

    event.target.classList.add("bg-[#1DD100]");
    event.target.classList.add("text-white");

    const selectEmptyDiv = document.getElementById("empty-div");
    selectEmptyDiv.classList.add("border-b-2");
    const newDiv = document.createElement("div");
    newDiv.classList.add("flex");
    newDiv.classList.add("justify-between");

    const seatLeft = remainSeat;
    document.getElementById("remain-seat").innerText = seatLeft - 1;
    const seatCount = seatBook;
    document.getElementById("booked-seat").innerText = seatCount + 1;

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
    updateTotalCost(Seat_dam);
    updateGrandTotal();
  });
}

function updateGrandTotal(status) {
  const totalCost = stToNum("total-price");
  if (status == undefined) {
    document.getElementById("grandTotalPrice").innerText = totalCost;
  } else {
    const couponCode = document.getElementById("coupon").value;
    const hideCouponCode = document.getElementById("coupon");
    const applyBtn = document.getElementById("apply-btn");

    console.log(couponCode);
    if (couponCode == "NEW15") {
      const DisPrice = totalCost * 0.15;
      document.getElementById("grandTotalPrice").innerText =
        totalCost - DisPrice;
      hideCouponCode.classList.add("hidden");
      applyBtn.classList.add("hidden");
    } else if (couponCode == "Couple 20") {
      const DisPrice = totalCost * 0.2;
      document.getElementById("grandTotalPrice").innerText =
        totalCost - DisPrice;
      hideCouponCode.classList.add("hidden");
      applyBtn.classList.add("hidden");
    } else {
      alert("Pleae Enter a valid coupon");
    }
  }
}

function updateTotalCost(value) {
  const totalCost = stToNum("total-price");
  const sum = totalCost + value;
  document.getElementById("total-price").innerText = sum;
}
