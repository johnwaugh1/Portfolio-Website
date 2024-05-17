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

function openPanel(id) {
    var panel = document.getElementById('panel');
    var panelTitle = document.getElementById('panel-title');
    var panelDescription = document.getElementById('panel-description');
    var panelLink = document.getElementById('panel-link');

    switch (id) {
        case 'website':
            panelTitle.innerText = "Portfolio Website";
            panelDescription.innerText = "I began this project to showcase my own personal projects, skills, and other relevant "
            + "information about me, but over the course of designing and coding this website, I have gained valuable knowledge "
            + "in UI design and increased my familiarity with HTML, CSS, and JavaScript."
            + "\n\n When designing this website, I tried to implement interesting visual features, as this project relies a lot on CSS "
            + ", as I have an interest in web development and wanted to learn from scratch." 
            + "\n\n I plan on continuing to update this website regularly as I complete more projects and continue working towards my degree.";
            panelLink.innerHTML = '<a href="https://github.com/johnwaugh1/Portfolio-Website" target=_blank>View this project on GitHub: https://github.com/johnwaugh1/Portfolio-Website</a>';
            break;
        case 'database':
            panelTitle.innerText = "Database System";
            panelDescription.innerText = "Detailed description of Database System...";
            break;
        case 'statemachine':
            panelTitle.innerText = "State Machine";
            panelDescription.innerText = "Detailed description of State Machine...";
            break;
        case 'texteditor':
            panelTitle.innerText = "Text Editor";
            panelDescription.innerText = "Detailed description of Text Editor...";
            break;
        default:
            break;
    }

    panel.style.display = 'block';
}

function closePanel() {
    var panel = document.getElementById('panel');
    panel.style.display = 'none';
}
