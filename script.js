function calculateAge() {
    const dobInput = document.getElementById('dob').value;
    
    if (!dobInput) {
        document.getElementById('ageResult').textContent = "Please select a valid date of birth.";
        return;
    }
    
    const dob = new Date(dobInput); // Convert input to Date object
    const today = new Date(); // Get the current date
    
    let age = today.getFullYear() - dob.getFullYear();
    const monthDifference = today.getMonth() - dob.getMonth();

    // If birthday hasn't occurred yet this year, subtract 1 from age
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dob.getDate())) {
        age--;
    }
    
    document.getElementById('ageResult').textContent = `Your age is: ${age} years old.`;
}
