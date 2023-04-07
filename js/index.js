/*function scrolling(){
    sobreMimContainer.scrollIntoView()
    setTimeout(() => sobreMimContainer.focus(), 500);
}*/


const navBarContent = document.getElementById('navbarSupportedContent');

const home = document.getElementById('home');

const sobreMim = document.getElementById('sobre-mim');
const sobreMimContainer = document.getElementById('sobre-mim-container');

const skills = document.getElementById('skills');
const skillsTitle = document.getElementById('skills-title');

const projects = document.getElementById('projects');
const projectsTitle = document.getElementById('projects-title');

//mover scroll com os elementos do navbar
home.addEventListener('click', function(){
    navBarContent.classList.remove('show');
})

sobreMim.addEventListener("click", function(){
    navBarContent.classList.remove('show');
    setTimeout(() => sobreMimContainer.focus(), 200);
});

skills.addEventListener("click", function(){
    navBarContent.classList.remove('show');
    setTimeout(() => skillsTitle.focus(), 200);
});

projects.addEventListener("click", function(){
    navBarContent.classList.remove('show');
    setTimeout(() => projectsTitle.focus(), 200);
});

// adicionar ou retirar borda inferior de acordo com a posição do scroll
const windowWidth = window.screen.width;

if(windowWidth >= 1000){
    window.addEventListener('scroll', function(){
        if(window.pageYOffset < 500){
            sobreMim.style.setProperty('border-bottom', 'initial');
            skills.style.setProperty('border-bottom', 'initial');
            projects.style.setProperty('border-bottom', 'initial');
            home.style.cssText = 'border-bottom: 0.2rem solid #582758;';
        } else if(window.pageYOffset < 1133){
            home.style.setProperty('border-bottom', 'initial');
        skills.style.setProperty('border-bottom', 'initial');
        projects.style.setProperty('border-bottom', 'initial');
        sobreMim.style.cssText = 'border-bottom: 0.2rem solid #582758;';
        } else if(window.pageYOffset < 2159){
            home.style.setProperty('border-bottom', 'initial');
        sobreMim.style.setProperty('border-bottom', 'initial');
        projects.style.setProperty('border-bottom', 'initial');
        skills.style.cssText = 'border-bottom: 0.2rem solid #582758;';
        } else{
            home.style.setProperty('border-bottom', 'initial');
        skills.style.setProperty('border-bottom', 'initial');
        sobreMim.style.setProperty('border-bottom', 'initial');
        projects.style.cssText = 'border-bottom: 0.2rem solid #582758;';
        } 
    })
} else{
        home.style.setProperty('border-bottom', 'initial');
        sobreMim.style.setProperty('border-bottom', 'initial');
        skills.style.setProperty('border-bottom', 'initial');
        projects.style.setProperty('border-bottom', 'initial');
        }





/*sobreMim.addEventListener('click', function(){
    sobreMimContainer.scrollIntoView();
});*/