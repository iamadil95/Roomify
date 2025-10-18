// --- Bootstrap Form Validation ---
(function () {
    'use strict';
    const forms = document.querySelectorAll('.needs-validation');
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        });
    });
})();


    // --- Flatpickr Date Picker Logic ---
    document.addEventListener("DOMContentLoaded", function () {
        flatpickr("#checkIn", {
            dateFormat: "Y-m-d",
            minDate: "today"
        });

        flatpickr("#checkOut", {
            dateFormat: "Y-m-d",
            minDate: "today"
        });

  });

 