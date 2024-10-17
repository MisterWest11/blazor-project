//profession rotation function

window.changeProfession = function () {
    const professions = [
        "Full Stack Developer",
        "Mobile App Developer",
        "Data & BI Analyst"
    ];

    let currentIndex = 0;
    const professionElement = document.getElementById('profession');

    if (!professionElement) {
        console.error('Element with ID "profession" not found.');
        return; // Exit if element is not found
    }

    function updateProfession() {
        professionElement.classList.remove('animate__fadeInDownBig');
        professionElement.classList.add('animate__fadeOutDownBig');

        setTimeout(() => {
            currentIndex = (currentIndex + 1) % professions.length;
            professionElement.textContent = professions[currentIndex];

            professionElement.classList.remove('animate__fadeOutDownBig');
            professionElement.classList.add('animate__fadeInDownBig');
        }, 1000); // Adjust time to match the animation duration
    }

    // Change profession every 4 seconds
    setInterval(updateProfession, 3000);
};


window.sendEmail = function (name, email, subject, message) {
    emailjs.send("service_y1bi97m", "your_template_id", {
        from_name: name,
        from_email: email,
        subject: subject,
        message: message
    })
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function (error) {
            console.log('FAILED...', error);
        });
}
