function handleSubmit() {
    const email = document.getElementById('emailInput').value;
    if (email) {
        alert(`Thanks! We'll reach out to: ${email}`);
    } else {
        alert('Please enter a valid email address!');
    }
}

// Accordion logic
document.querySelectorAll(".accordion-btn").forEach(button => {
    button.addEventListener("click", () => {
        const content = button.nextElementSibling;
        content.style.display = content.style.display === "block" ? "none" : "block";
    });
});
