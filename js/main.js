
// DOM Elements
const DOMelements = {
    backdrop: document.querySelector('.backdrop'),
    closeBtn: document.querySelector('.close'),
    showCertBtn: document.querySelector('.showcertificates'),
    certificates: document.querySelector('.certificates'),
    courses: document.querySelector('.certificates__courses'),
    certImg: document.querySelector('.certificates__img'),
    firstCourse: document.querySelector('.first'),
    hamburger: document.querySelector('.hamburger'),
    closeDropdownBtn: document.querySelector('.dropdown-close'),
    dropdown: document.querySelector('.dropdown'),
    arrow: document.querySelector('.arrow')
};

// Checking if user is on top of page
if(DOMelements.arrow) {
    window.addEventListener('scroll', function() {
        if(window.scrollY < 600) {
            DOMelements.arrow.style.opacity = '0';
        } else {
            DOMelements.arrow.style.opacity = '1';
        }
    })
}


// Event Listeners
window.addEventListener('load', loadActiveClass);
if (DOMelements.showCertBtn && DOMelements.backdrop && DOMelements.closeBtn && DOMelements.courses) {
    DOMelements.showCertBtn.addEventListener('click', showCertificates);
    DOMelements.backdrop.addEventListener('click', hideCertificates);
    window.addEventListener('keyup', hideCertificates);
    DOMelements.closeBtn.addEventListener('click', hideCertificates);
    DOMelements.courses.addEventListener('click', switchImages);
}

DOMelements.hamburger.addEventListener('click', showDropdown);
DOMelements.closeDropdownBtn.addEventListener('click', hideDropdown);
DOMelements.backdrop.addEventListener('click', hideDropdown);

function showDropdown() {
    DOMelements.dropdown.style.transform = 'translateY(0vh)';
    DOMelements.backdrop.style.display = 'block';
}

function hideDropdown() {
    DOMelements.dropdown.style.transform = 'translateY(-100vh)';
    DOMelements.backdrop.style.display = 'none';
}

// State Tracking
let certBoxDisplayed = false;

// Functions
function loadActiveClass() {
    if(DOMelements.firstCourse) {
        DOMelements.firstCourse.classList.add('active');
    }
}


function moveUserToTop() {
    window.scrollTo(0, 0);
}

function showCertificates(e) {
    e.preventDefault();
    DOMelements.certificates.style.visibility = 'visible';
    DOMelements.certificates.style.opacity = '1';
    // DOMelements.certificates.style.zIndex = '20';
    // DOMelements.certificates.classList.add('fadein');
    DOMelements.backdrop.style.display = 'block';
    certBoxDisplayed = true;
}

function hideCertificates(e) {
    if (certBoxDisplayed) {
        if (e.type === 'keyup' && e.key === "Esc" || e.key === "Escape" || e.keyCode === 27) {
            console.log(e.type);
            DOMelements.backdrop.style.display = 'none';
            DOMelements.certificates.style.visibility = 'hidden';
            DOMelements.certificates.style.opacity = '0';
            // DOMelements.certificates.style.zIndex = '-20';
            certBoxDisplayed = false;
        } else if (e.type === 'click') {
            DOMelements.backdrop.style.display = 'none';
            DOMelements.certificates.style.visibility = 'hidden';
            DOMelements.certificates.style.opacity = '0';
            // DOMelements.certificates.style.zIndex = '-20';
            certBoxDisplayed = false;
        }
    }
}

function switchImages(e) {
    if (e.target.matches('.certificates__courses-course')) {
        document.querySelectorAll('.certificates__courses-course').forEach(e => e.classList.remove('active'));

        switch (e.target.dataset.id) {
            case ("1"): 
                e.target.classList.add('active');
                DOMelements.certImg.style.backgroundImage = 'url(./img/certificates/basic_css_jonas.jpg)';
                break;
            case ("2"): 
                e.target.classList.add('active');
                DOMelements.certImg.style.backgroundImage = 'url(./img/certificates/advanced_css_jonas.jpg)';
                break;
            case ("3"): 
                e.target.classList.add('active');
                DOMelements.certImg.style.backgroundImage = 'url(./img/certificates/js_course_jonas.jpg)';
                break;
            case ("4"): 
                e.target.classList.add('active');
                DOMelements.certImg.style.backgroundImage = 'url(./img/certificates/javascript_traversy.jpg)';
                break;
            case ("5"): 
                e.target.classList.add('active');
                DOMelements.certImg.style.backgroundImage = 'url(./img/certificates/js_course_dylan_partone.jpg)';
                    break;
        }
    }
}