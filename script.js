const overlaySpinner = document.querySelector('.overlay-spinner');
const percent = document.getElementById('percent');

let progress = 0;
percent.textContent = "0%";

function startLoading() {
    const interval = setInterval(() => {
        progress++;
        percent.textContent = progress + "%";

        if (progress >= 100) {
            clearInterval(interval);

            setTimeout(() => {
                overlaySpinner.classList.add("fade-spinner");
            }, 300);
        }
    }, 30);
}

setTimeout(startLoading, 500);
