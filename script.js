document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    // Simulate form submission
    document.getElementById('confirmation').style.display = 'block';
    
    // Clear the form
    document.getElementById('orderForm').reset();
});
