document.addEventListener('DOMContentLoaded', () => {
    
    // --- Logic for the Navbar Search Bar Calendars ---
    const checkinInput = document.getElementById('checkin');
    const checkoutInput = document.getElementById('checkout');

    if (checkinInput && checkoutInput) {
        // Initialize Flatpickr on the check-in input
        flatpickr(checkinInput, {
            minDate: "today",
            dateFormat: "Y-m-d",
        
            onChange: function(selectedDates) {
                // If a date was selected...
                if (selectedDates[0]) {
                    // ...create a new date object for the next day...
                    const nextDay = new Date(selectedDates[0]);
                    nextDay.setDate(nextDay.getDate() + 1);
                    flatpickr(checkoutInput).set('minDate', nextDay);
                }
            }
        });

        flatpickr(checkoutInput, {
            minDate: new Date().fp_incr(1), // Default minDate is tomorrow
            dateFormat: "Y-m-d",
        });
    }

    // --- Logic for the Booking Form Calendars ---
    const checkinBookingInput = document.getElementById('checkin-booking');
    const checkoutBookingInput = document.getElementById('checkout-booking');

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

        flatpickr(checkoutBookingInput, {
            minDate: new Date().fp_incr(1), // Default minDate is tomorrow
            dateFormat: "Y-m-d",
        });
    }
});