const seatsRemaining = document.querySelector(".seats-remaining");
const seatsOccupied = document.querySelector(".seats-occupied");
const seatContainer = document.querySelector(".buttons");
let seatsOccupiedCount = 0;
let seatsRemainingCount = 42;

seatContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn")) {
    if (e.target.classList.contains("booked")) {
      alert("seat already booked");
    } else {
      const confirmation = confirm("Are sure about booking this seat?");
      if (confirmation == true) {
        e.target.classList.add("booked");
        seatsOccupiedCount++;
        seatsRemainingCount--;
        seatsOccupied.innerHTML = seatsOccupiedCount;
        seatsRemaining.innerHTML = seatsRemainingCount;
      }
    }
  }
});