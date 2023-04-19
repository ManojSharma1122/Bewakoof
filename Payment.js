const tabs = document.querySelectorAll(".tabs-container .tab");
const contents =  document.querySelectorAll(".tabs-container .content");

const removeActiveClass = () => {
    tabs.forEach(t => {
        t.classList.remove("active");
    });

    contents.forEach(c => {

        c.classList.remove("active");

    });
};

tabs.forEach((t,i) => {
    t.addEventListener("click",() => {
        removeActiveClass();
        contents[i].classList.add("active");
        t.classList.add("active");
    });
});


//radio button code 

// Get the radio input element
var radio = document.getElementById("rbtn");

// Get the button element
var button = document.getElementById("paytmButton");

// Add an event listener to the radio input
radio.addEventListener("change", function() {
  // Check if the radio is checked
  if (radio.checked) {
    // Show the button
    button.classList.remove("hidden");
  } else {
    // Hide the button
    button.classList.add("hidden");
  }
});
