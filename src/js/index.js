const requestInput = document.getElementById('request');

const allRequestCaptions = document.querySelectorAll('.request-caption');

const urlInput = document.getElementById('url');
const urlCaption = document.getElementById('url-caption');


const addInputListener = (input, captions) => {
    input.addEventListener('change', function (e) {
        e.preventDefault();
        input.classList.toggle('is-visible');
        captions[0].classList.toggle('is-visible');
        captions.forEach(element => {
            element.innerText = input.value;
        });
    });
}

const addCaptionListener = (input, caption) => {
    caption.addEventListener('click', (e) => {
        e.preventDefault();
        caption.classList.toggle('is-visible');
        input.classList.toggle('is-visible');
    });
}

const addCompanyListener = (input, caption) => {
    input.addEventListener('change', function (e) {
        e.preventDefault();
        input.classList.toggle('is-visible');
        caption.classList.toggle('is-visible');
        caption.innerText = input.value;
    });
    caption.addEventListener('click', function (e) {
        e.preventDefault();
        caption.classList.toggle('is-visible');
        input.classList.toggle('is-visible');
    });
}

document.addEventListener("DOMContentLoaded", function(event) {
    addInputListener(requestInput, allRequestCaptions);
    addCaptionListener(requestInput, allRequestCaptions[0]);
    addCompanyListener(urlInput, urlCaption);
});