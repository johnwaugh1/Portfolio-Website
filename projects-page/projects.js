(function () {
    function toggleDropdown(event) {
        event.stopPropagation();
        const dropdownContent = document.getElementById("dropdown-content");
        if (dropdownContent.classList.contains('show')) {
            dropdownContent.classList.remove('show');
            dropdownContent.style.height = '0'; // Set height to 0 for closing animation
        } else {
            dropdownContent.classList.add('show');
            dropdownContent.style.height = dropdownContent.scrollHeight + 'px'; // Set height to scrollHeight for opening animation
        }
    }

    function closeDropdowns() {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
                openDropdown.style.height = '0'; // Set height to 0 for closing animation
            }
        }
    }

    document.querySelector('.dropdown-btn').addEventListener('click', toggleDropdown);
    window.addEventListener('click', function (event) {
        if (!event.target.closest('.dropdown-container')) {
            closeDropdowns();
        }
    });

    window.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            closeDropdowns();
        }
    });
})();


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
            panelDescription.innerText = "This project was completed in a course I took this previous semester, where our small team"
                + " was tasked with coming up with a fictional company to design a database management system for, and then implementing this system"
                + " in MySQL. Apart from pair programming, which boosted my knowledge of SQL, I assumed the role of project manager,"
                + " helping to keep my team motivated and on track, reminding them of deadlines and assuring code quality."
                + " Overall, this helped to familiarize me with SQL, and also build up my knowledge of key data management topics/resources"
                + " like conceptual/relational models, schema design, and query/procedure/trigger design."
                + "\n\n\ This project allowed me to find a new and interesting topic to explore, and I plan on using the"
                + " skills I learned to implement a similar system in a future project dealing with big data.";
            panelLink.innerHTML = '<a href="https://github.com/johnwaugh1/CS3430-Database-System" target=_blank>View this project on GitHub: https://github.com/johnwaugh1/CS3430-Database-System</a>';
            break;
        case 'statemachine':
            panelTitle.innerText = "State Machine";
            panelDescription.innerText = "This was a project that was completed but not updated because our team wanted to take a different "
                + "approach to the final product, but it still served as a learning experience for me to brush up on programming in C, and also understanding "
                + "how to code for a specific microcontroller with many functionalities. The main purpose of this was really a test to see if the microcontroller "
                + "would display the correct LED combination corresponding to a vehicles fault state when reading in CAN bus data."
                + "\n\n Overall, I gained valuable skills in utilizing specialized IDE's for specific microcontrollers, coding with a larger team while sharing a "
                + "centralized workspace, and how to convert data into a human readable format.";
            panelLink.innerHTML = '<a href="https://github.com/johnwaugh1/ROSE-State-Machine" target=_blank>View this project on GitHub: https://github.com/johnwaugh1/ROSE-State-Machine</a>';
            break;
        case 'texteditor':
            panelTitle.innerText = "Text Editor";
            panelDescription.innerText = "This simple web-based text editor was html/css/js project I did after taking a course on web development, "
                + "which got me interesting in the topic. It's purpose was to serve as an alternative or emulation of a text editor like Google Docs or Word, "
                + "but it is very simplistic, and was more an exploration into the programming languages and what I could achieve with them when first starting out. "
                + "\n\n I plan on using the same functions in this text editor in another project of mine, tranforming it into more of a note taking and saving feature "
                + "within another web-based app I am developing. In addition, there are some improvements that I could implement down the line noted in the repository.";
            panelLink.innerHTML = '<a href="https://github.com/johnwaugh1/Simple-Text-Editor" target=_blank>View this project on GitHub: https://github.com/johnwaugh1/Simple-Text-Editor</a>';
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
