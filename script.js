// Modal handling
var modal = document.getElementById("confirmationModal");
var closeModal = document.getElementsByClassName("close")[0];

// Open modal on form submission
document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Show confirmation modal
    modal.style.display = "block";
    
    // Reset form
    document.getElementById('orderForm').reset();
});

// Close modal
closeModal.onclick = function() {
    modal.style.display = "none";
};

// Close modal if clicking outside
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
