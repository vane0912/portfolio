function run_observer(){
    // Observe Projects sections
    const select_all_projects = document.querySelectorAll('.project_position')
    const observer_middle = new IntersectionObserver((entry) =>{
        entry[0].intersectionRatio > 0 ? entry[0].target.classList.add('position_middle_animation') :
        entry[0].target.classList.remove('position_middle_animation')
    })
    const observer_general = new IntersectionObserver((entry) =>{
        entry[0].intersectionRatio > 0 ? entry[0].target.classList.add('project_position_animation'):
        entry[0].target.classList.remove('project_position_animation')
    })
    observer_middle.observe(document.querySelector('.position_middle'))
    select_all_projects.forEach((proj) => observer_general.observe(proj))
    // Observe Skills section
    const select_all_skills = document.querySelectorAll('.logo')
    const observer_skills = new IntersectionObserver((entry) =>{
        if(entry[0].intersectionRatio > 0){
            select_all_skills.forEach((el, index) =>{
                setTimeout(() =>{
                    el.classList.add('blur_animation')
                }, index * 200)
            })
        }else{
            select_all_skills.forEach((el, index) =>{
                el.classList.remove('blur_animation')
            })
        }
    })
    observer_skills.observe(document.querySelector('.skills_logos'))
}

function show_elements(){
    document.querySelector('.nav_elements').classList.toggle("nav_elements_mobile")
}