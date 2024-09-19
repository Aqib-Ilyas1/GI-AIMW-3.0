var personalINfo = document.getElementById("nav-links-btn-PI");
var education = document.getElementById('nav-links-btn-ED');
var skillsBtn = document.getElementById('nav-links-btn-SK');
var workExperience = document.getElementById('nav-links-btn-WE');
var PI = document.getElementById('pInfo');
var ED = document.getElementById('education');
var SK = document.getElementById('skills-div');
var WE = document.getElementById('w-exp');
personalINfo.addEventListener('click', function () {
    PI.style.display = 'flex';
    ED.style.display = 'none';
    SK.style.display = 'none';
    WE.style.display = 'none';
});
education.addEventListener('click', function () {
    PI.style.display = 'none';
    ED.style.display = 'flex';
    SK.style.display = 'none';
    WE.style.display = 'none';
});
skillsBtn.addEventListener('click', function () {
    PI.style.display = 'none';
    ED.style.display = 'none';
    SK.style.display = 'flex';
    WE.style.display = 'none';
});
workExperience.addEventListener('click', function () {
    PI.style.display = 'none';
    ED.style.display = 'none';
    SK.style.display = 'none';
    WE.style.display = 'flex';
});



// Retrive data from FORM to FRONT

let formName = document.getElementById('formInputName');
let formPhone = document.getElementById('formInputPhone')
let formEmail = document.getElementById('formInputEmail')
let formEducation = document.getElementById('formEducation');
let formSkillsFirst = document.getElementById('formSkillsFirst')
let formSkillsSecond = document.getElementById('formSkillsSecond')
let formSkillsThird = document.getElementById('formSkillsThird')

let formWexp = document.getElementById('formWexp')

let contentPersonalInfo = document.getElementById('pInfo')
let contentEducation = document.getElementById('education')
let contentSkills = document.getElementById('skills-div')
let contentWexp = document.getElementById('w-exp')

let editResumeBtn = document.getElementById('editResume')
editResumeBtn.style.display = 'none'

function showResume() {

    if (formName.value && formPhone.value && formEmail.value && formEducation.value && formSkillsFirst.value && formWexp.value) {


        contentPersonalInfo.innerHTML = `

        <p class="pInfo-name">${formName.value}</p>
        <p class="pInfo-phone">${formPhone.value}</p>
        <p class="pInfo-email">${formEmail.value}</p>`

        contentEducation.innerHTML = `<h3 style="text-decoration: underline;">EDUCATION</h3>
        <p>${formEducation.value}</p>`

        contentSkills.innerHTML = `<h3 style="display: flex; justify-content: center; text-decoration: underline;">SKILLS</h3>
        <ul>
            <li> ${formSkillsFirst.value}</li>
            <li> ${formSkillsSecond.value}</li>
            <licontentEditable="true">${formSkillsThird.value}</li>
        </ul>`

        contentWexp.innerHTML = `<h3 style="text-decoration: underline; display: flex; justify-content: center;">WORK EXPERIENCE</h3>
        <p ${formWexp.value}</p>`


        let showResumeBtn = document.getElementById('showResume');
        showResumeBtn.style.display = 'none';
        editResumeBtn.style.display = 'flex'


    } else if (formName.value == "" || formPhone.value == "" || formEmail.value == "" || formEducation.value == "" || formSkillsFirst.value == "" || formWexp.value == "") {
        alert("Enter all the fields")

    } else {
        console.log("else")
    }
}

        // Edit Resume


function editResume(event) {
    let form = document.getElementById('nav-sidebar')
    form.style.display = 'none'

    let content = document.getElementById('content');
    content.style.display = 'flex'

    

    if (event.target.id === 'editResume') {
        console.log("EDIT btn")

        contentPersonalInfo.innerHTML = `

        <p class="pInfo-name" contentEditable="true">${formName.value}</p>
        <p class="pInfo-phone" contentEditable="true">${formPhone.value}</p>
        <p class="pInfo-email" contentEditable="true">${formEmail.value}</p>`

        contentEducation.innerHTML = `<h3 style="text-decoration: underline;">EDUCATION</h3>
        <p contentEditable="true">${formEducation.value}</p>`

        contentSkills.innerHTML = `<h3 style="display: flex; justify-content: center; text-decoration: underline;">SKILLS</h3>
        <ul>
            <li contentEditable="true"> ${formSkillsFirst.value}</li>
            <li contentEditable="true"> ${formSkillsSecond.value}</li>
            <licontentEditable="true">${formSkillsThird.value}</li>
        </ul>`

        contentWexp.innerHTML = `<h3 style="text-decoration: underline; display: flex; justify-content: center;">WORK EXPERIENCE</h3>
        <p contentEditable="true"> ${formWexp.value}</p>`
    }
}

