document.addEventListener("DOMContentLoaded", function() {
    const createButton = document.querySelector(".submit");
    const firstNameInput = document.getElementById("firstname");

    createButton.addEventListener("click", function(event) {
        event.preventDefault();

        const firstName = firstNameInput.value;

        if (firstName.trim() !== "") {
            alert(`Parabéns, ${firstName}! Sua conta foi criada.`);
            window.location.href = "inicial.html";
        }
    });
});

const currentPage = location.href.split('/').slice(-1)[0];

const currentPageElement = document.querySelector(`.nav-item a[href="${currentPage}"]`);

if (currentPageElement) {
    currentPageElement.parentElement.classList.add('current');
}

