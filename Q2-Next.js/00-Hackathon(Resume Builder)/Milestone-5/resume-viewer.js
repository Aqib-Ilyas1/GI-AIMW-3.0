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


//  Ftech the user-data from LocalStorage
let userDataForm = JSON.parse(localStorage.getItem('object'))

let contentPersonalInfo = document.getElementById('pInfo')
let contentEducation = document.getElementById('education')
let contentSkills = document.getElementById('skills-div')
let contentWexp = document.getElementById('w-exp')

// Now showing the data to the resume-viewer page
contentPersonalInfo.innerHTML = `

<p class="pInfo-name">${userDataForm.Name}</p>
<p class="pInfo-phone">${userDataForm.Phone}</p>
<p class="pInfo-email">${userDataForm.Email}</p>`

contentEducation.innerHTML = `<h3 style="text-decoration: underline;">EDUCATION</h3>
<p>${userDataForm.Education}</p>`

contentSkills.innerHTML = `<h3 style="display: flex; justify-content: center; text-decoration: underline;">SKILLS</h3>
<ul>
    <li> ${userDataForm.Skill1}</li>
    <li> ${userDataForm.Skill2}</li>
    <li>${userDataForm.Skill3}</li>
</ul>`

contentWexp.innerHTML = `<h3 style="text-decoration: underline; display: flex; justify-content: center;">WORK EXPERIENCE</h3>
<p> ${userDataForm.WExp}</p>`