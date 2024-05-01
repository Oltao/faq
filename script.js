const accordion = document.querySelectorAll('.content-box');

accordion.forEach(elements => {
    elements.addEventListener('click', function() {
        this.classList.toggle('active');
    })
})