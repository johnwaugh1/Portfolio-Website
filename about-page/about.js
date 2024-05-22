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
