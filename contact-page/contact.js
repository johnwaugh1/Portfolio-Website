(function () {
    function toggleDropdown(event) {
        event.stopPropagation();
        const dropdownContent = document.getElementById("dropdown-content");
        dropdownContent.classList.toggle("show");
    }

    function closeDropdowns() {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
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
