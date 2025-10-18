// This function waits for the entire HTML document to be loaded and ready.
document.addEventListener('DOMContentLoaded', () => {
    
    // --- Logic for the Navbar Search Bar Calendars ---
    const checkinInput = document.getElementById('checkin');
    const checkoutInput = document.getElementById('checkout');

    // Only run this code if the navbar's date inputs exist on the page.
    if (checkinInput && checkoutInput) {
        // Initialize Flatpickr on the check-in input
        flatpickr(checkinInput, {
            minDate: "today",
            dateFormat: "Y-m-d",
            // This function runs every time the user picks a check-in date
            onChange: function(selectedDates) {
                // If a date was selected...
                if (selectedDates[0]) {
                    // ...create a new date object for the next day...
                    const nextDay = new Date(selectedDates[0]);
                    nextDay.setDate(nextDay.getDate() + 1);
                    // ...and set it as the minimum selectable date for the check-out calendar.
                    flatpickr(checkoutInput).set('minDate', nextDay);
                }
            }
        });

        // Initialize Flatpickr on the check-out input
        flatpickr(checkoutInput, {
            minDate: new Date().fp_incr(1), // Default minDate is tomorrow
            dateFormat: "Y-m-d",
        });
    }

    // --- Logic for the Booking Form Calendars ---
    const checkinBookingInput = document.getElementById('checkin-booking');
    const checkoutBookingInput = document.getElementById('checkout-booking');

    // Only run this code if the booking form's date inputs exist on the page.
    if (checkinBookingInput && checkoutBookingInput) {
        // Initialize Flatpickr on the booking form's check-in input
        flatpickr(checkinBookingInput, {
            minDate: "today",
            dateFormat: "Y-m-d",
            onChange: function(selectedDates) {
                if (selectedDates[0]) {
                    const nextDay = new Date(selectedDates[0]);
                    nextDay.setDate(nextDay.getDate() + 1);
                    flatpickr(checkoutBookingInput).set('minDate', nextDay);
                }
            }
        });

        // Initialize Flatpickr on the booking form's check-out input
        flatpickr(checkoutBookingInput, {
            minDate: new Date().fp_incr(1), // Default minDate is tomorrow
            dateFormat: "Y-m-d",
        });
    }
});