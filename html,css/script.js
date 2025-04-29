document.querySelectorAll(".seat").forEach((seat) => {
  seat.addEventListener("click", () => {
    if (!seat.classList.contains("booked")) {
      seat.classList.toggle("selected");
      updateButton();
    }
  });
});

function updateButton() {
  const selected = document.querySelectorAll(".seat.selected").length;
  const btn = document.getElementById("proceedBtn");
  if (selected > 0) {
    btn.disabled = false;
    btn.classList.add("active");
    btn.textContent = `Continue with ${selected} seat(s)`;
  } else {
    btn.disabled = true;
    btn.classList.remove("active");
    btn.textContent = "Select seats to continue";
  }
}
