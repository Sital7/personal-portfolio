function alertMessage(action) {
    alert(`${action}`);
}

function redirectToLogin() {
    alert('Redirecting to Login...');
}

// This is for animating the progress values when they come into view
document.addEventListener("DOMContentLoaded", function () {
    const skills = document.querySelectorAll(".progress-circle");

    function checkVisibility() {
        skills.forEach(skill => {
            const skillValue = skill.getAttribute("data-value");
            const rect = skill.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                skill.style.background = `conic-gradient(#3498db 0% ${skillValue}%, #f0f0f0 ${skillValue}% 100%)`;
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility();  // Initial check to apply styles on page load
});



function showCompanyName(company) {
    // Get all the company name paragraphs inside the project cards
    const companyNames = document.querySelectorAll('.company-name');
    
    // Hide all company names first
    companyNames.forEach(function(name) {
        name.style.display = 'none';
    });

    // Find the clicked project card and show the respective company name
    const projectInfo = event.currentTarget.querySelector('.company-name');
    projectInfo.textContent = company;
    projectInfo.style.display = 'block';
}

