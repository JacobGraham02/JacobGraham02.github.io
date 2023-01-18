const MENU_LINKS = document.querySelectorAll('.menu a');
const WEBSITE_SECTION = document.querySelectorAll('.website_section');
const CURRENT_SECTION = "current_section_open";
const CURRENT_LINK_VISITING = "add_active_link_style";
const PROJECT_DIVS = document.querySelectorAll('.project_div');
const HOME_PAGE_SENTENCES = ['Computer science student', 'Junior developer', 'Junior designer', 'Junior QA', 'Junior DevOps engineer'];

const typeit_element = new TypeIt("#text", {
    speed: 100,
    loop: true
});

for (const sentence_string of HOME_PAGE_SENTENCES) {
    typeit_element.type(sentence_string).pause(500).delete(sentence_string.length).pause(500);
}
typeit_element.go();

close_menu_when_link_clicked();
set_section_to_active_when_clicked();
set_default_link_styling();

function set_default_link_styling(){
    MENU_LINKS[0].classList.add(CURRENT_LINK_VISITING);
}

function close_menu_when_link_clicked() {
    MENU_LINKS.forEach(link => link.addEventListener("click", function() {
        document.querySelector(".menu-btn").checked = false;
    }))
}
function set_section_to_active_when_clicked() {
    for (let i = 0; i < MENU_LINKS.length; i++) {
        MENU_LINKS[i].addEventListener('click', function() {
            WEBSITE_SECTION.forEach(section => remove_class_from_section(section, CURRENT_SECTION));
            MENU_LINKS.forEach(link =>  remove_styling_from_active_link(link, CURRENT_LINK_VISITING));
            add_class_to_section(WEBSITE_SECTION[i], CURRENT_SECTION);
            add_styling_to_active_link(MENU_LINKS[i], CURRENT_LINK_VISITING);
        });
    }
}
function add_class_to_section(section, t) {
    section.classList.add(t);
}
function remove_class_from_section(section, t) {
    section.classList.remove(t);
}
function add_styling_to_active_link(link, t) {
    link.classList.add(t);
}
function remove_styling_from_active_link(link, t) {
    link.classList.remove(t);
}
