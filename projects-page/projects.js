const boxes = document.querySelectorAll('.box');
const panel = document.getElementById('panel');
const closePanelButton = document.getElementById('closePanel');

function toggleDropdown(event) {
    event.stopPropagation();
    var dropdownContent = document.getElementById("dropdown-content");
    dropdownContent.classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.dropdown-btn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

boxes.forEach(box => {
    box.addEventListener('click', () => {
        panel.style.display = 'block';
    });
});

closePanelButton.addEventListener('click', () => {
    panel.style.display = 'none';
});