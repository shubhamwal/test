document.getElementById('scroll-to-end').addEventListener('click', function() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const getInTouchBtn = document.getElementById('getInTouchBtn');
    const requestCallbackBtn = document.getElementById('requestCallbackBtn');

    // Add event listeners to the buttons
    getInTouchBtn.addEventListener('click', function () {
        getInTouchBtn.classList.add('active');
        requestCallbackBtn.classList.remove('active');
    });

    requestCallbackBtn.addEventListener('click', function () {
        requestCallbackBtn.classList.add('active');
        getInTouchBtn.classList.remove('active');
    });
});
