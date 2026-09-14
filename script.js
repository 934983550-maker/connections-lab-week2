const door = document.getElementById("door");
const checkDoor = document.getElementById("checkDoor");
const checkPeephole = document.getElementById("checkPeephole");
const peepholeView = document.getElementById("peepholeView");
const time = document.getElementById("time");
const story = document.getElementById("story");

checkDoor.addEventListener("click", function() {

    door.classList.add("zoom");

    time.classList.add("hidden");
    story.classList.add("hidden");
    checkDoor.classList.add("hidden");

    checkPeephole.classList.remove("hidden");

});

checkPeephole.addEventListener("click", function() {

    checkPeephole.classList.add("hidden");

    peepholeView.classList.remove("hidden");

})