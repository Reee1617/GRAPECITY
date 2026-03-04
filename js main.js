// HOBBY ELEMENTS
var list = document.getElementById("hobbyList");
var input = document.getElementById("hobbyInput");
var addBtn = document.getElementById("addHobbyBtn");

// 1️⃣ EXISTING ITEMS ME DELETE BUTTON (ONLY ONCE)
var items = list.getElementsByTagName("li");

for (var i = 0; i < items.length; i++) {
    if (items[i].getElementsByTagName("button").length === 0) {
        items[i].innerHTML += ' <button>Delete</button>';
    }
}

// 2️⃣ ADD NEW HOBBY
addBtn.onclick = function () {
    var text = input.value;

    if (text !== "") {
        var li = document.createElement("li");
        li.innerHTML = text + ' <button>Delete</button>';
        list.appendChild(li);
        input.value = "";
    }
};

// 3️⃣ DELETE (WORKS FOR ALL)
list.onclick = function (e) {
    if (e.target.tagName === "BUTTON") {
        e.target.parentElement.remove();
    }
};

// 4️⃣ CONTACT FORM ALERT
var form = document.getElementById("contactForm");
form.onsubmit = function () {
    alert("Thank you! Your form has been submitted successfully.");
    return false;
};

// 5️⃣ DATE & TIME
function showDateTime() {
    var now = new Date();
    document.getElementById("dateTime").innerHTML = now;
}

setInterval(showDateTime, 1000);
showDateTime();