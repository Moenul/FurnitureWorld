const navDropdownBtn = document.getElementById("navDropdownBtn");
const navDropdown = document.getElementById("navDropdown");

navDropdownBtn.addEventListener("click", function () {
    console.log("Dropdown button clicked");
    navDropdown.classList.toggle("navbar__linksActive");
});
