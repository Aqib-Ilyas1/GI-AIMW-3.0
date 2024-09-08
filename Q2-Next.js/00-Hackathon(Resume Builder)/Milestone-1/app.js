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
