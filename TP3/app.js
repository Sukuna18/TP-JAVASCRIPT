let btnDanger = document.querySelector(".danger");
let btnWarning = document.querySelector(".warning");
let btnInfo = document.querySelector(".info");
let btnSuccess = document.querySelector(".btn-success");
let notify = document.querySelector(".notification");
let boutton = document.createElement("button");
let btn = document.querySelectorAll(".btn");
btn.forEach((btns) => {
  btns.addEventListener("click", () => {
    if (btns.classList.contains("success")) {
      boutton.innerHTML = "Success";
      boutton.style.backgroundColor = "#4CAF50";
    } else if (btns.classList.contains("danger")) {
      boutton.innerHTML = "Danger";
      boutton.style.backgroundColor = "#f44336";
    } else if (btns.classList.contains("info")) {
      boutton.innerHTML = "info";
      boutton.style.backgroundColor = "#2196F3";
    } else if (btns.classList.contains("warning")) {
      boutton.innerHTML = "warning";
      boutton.style.backgroundColor = "#ff9800";
    }

    let clone = boutton.cloneNode(true);
    notify.appendChild(clone);
    setTimeout(() => {
      notify.removeChild(clone);
    }, 2000);
  });
});
