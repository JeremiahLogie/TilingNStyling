function toggleMenu() {
    const navList = document.getElementById('nav-list');
    navList.style.display = navList.style.display === 'block' ? 'none' : 'block';
}

function calculateEstimate() {
    const squareFeet = document.getElementById('square-feet').value;
    const tilingType = document.getElementById('tiling-type').value;
    let pricePerSqFt;

    if (tilingType === 'basic') {
        pricePerSqFt = 10;
    } else if (tilingType === 'walls') {
        pricePerSqFt = 12;
    } else if (tilingType === 'custom') {
        pricePerSqFt = 14;
    }

    const estimate = squareFeet * pricePerSqFt;
    document.getElementById('estimate-result').innerText = `Estimated Cost: $${estimate}`;
    return false;
}

function openModal(image) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-image');
    const captionText = document.getElementById('caption');

    modal.style.display = "block";
    modalImg.src = image.src;
    captionText.innerHTML = image.alt;
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = "none";
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.onscroll = function () {
    const backToTopBtn = document.getElementById('back-to-top');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
};
