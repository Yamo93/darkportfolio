// DOM Elements
const DOMelements = {
    backdrop: document.querySelector('.backdrop'),
    closeBtn: document.querySelector('.close'),
    showCertBtn: document.querySelector('.showcertificates'),
    courses: document.querySelector('.certificates__courses'),
    certImg: document.querySelector('.certificates__img')
};

// Event Listeners
window.addEventListener('load', loadActiveClass);
DOMelements.showCertBtn.addEventListener('click', showCertificates);
DOMelements.backdrop.addEventListener('click', hideCertificates);
DOMelements.closeBtn.addEventListener('click', hideCertificates);
DOMelements.courses.addEventListener('click', switchImages);

function loadActiveClass() {
    document.querySelector('.first').classList.add('active');
}


function moveUserToTop() {
    window.scrollTo(0, 0);
}

function showCertificates(e) {
    e.preventDefault();
    document.querySelector('.certificates').style.display = 'block';
    document.querySelector('.backdrop').style.display = 'block';
}

function hideCertificates() {
    document.querySelector('.backdrop').style.display = 'none';
    document.querySelector('.certificates').style.display = 'none';
}

function switchImages(e) {
    if (e.target.matches('.certificates__courses-course')) {
        document.querySelectorAll('.certificates__courses-course').forEach(e => e.classList.remove('active'));

        switch (e.target.dataset.id) {
            case ("1"): 
                e.target.classList.add('active');
                DOMelements.certImg.style.backgroundImage = 'url(../img/certificates/basic_css_jonas.jpg)';
                break;
            case ("2"): 
                e.target.classList.add('active');
                DOMelements.certImg.style.backgroundImage = 'url(../img/certificates/advanced_css_jonas.jpg)';
                break;
            case ("3"): 
                e.target.classList.add('active');
                DOMelements.certImg.style.backgroundImage = 'url(../img/certificates/js_course_jonas.jpg)';
                break;
            case ("4"): 
                e.target.classList.add('active');
                DOMelements.certImg.style.backgroundImage = 'url(../img/certificates/javascript_traversy.jpg)';
                break;
            case ("5"): 
                e.target.classList.add('active');
                DOMelements.certImg.style.backgroundImage = 'url(../img/certificates/js_course_dylan_partone.jpg)';
                    break;
        }
    }
}