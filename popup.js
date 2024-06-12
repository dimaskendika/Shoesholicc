const buyBtn = document.querySelector(".buybtn");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");
const buy = document.querySelector(".payButton");

popbtn1.addEventListener("click",function () {
        popup.classList.add("show");
    }
);


closebtn1.addEventListener("click",function () {
        popup.classList.remove("show");
    }
);


buybtn.addEventListener("click",function () {
        popup.classList.remove("show");
    }
);


window.addEventListener("click",function (event) {
        if (event.target == popup) {
            popup.classList.remove("show");
        }
    }
);


// pyment popup 
buyBtn.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});

buy.addEventListener("click", () => {
  payment.style.display = "none";
})

