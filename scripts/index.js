const menu_links = document.querySelectorAll('.menu a');
const website_section = document.querySelectorAll('.website_section');
const current_section = "current_section_open";
const current_link_visiting = "add_active_link_style";
const project_divs = document.querySelectorAll('.project_div');
const home_page_sentences = ['Computer science student', 'Junior developer', 'Junior designer', 'Junior QA', 'Junior DevOps engineer'];

const typeit_element = new TypeIt("#text", {
    speed: 100,
    loop: true
});

for (const sentence_string of home_page_sentences) {
    typeit_element.type(sentence_string).pause(500).delete(sentence_string.length).pause(500);
}
typeit_element.go();

close_menu_when_link_clicked();
set_section_to_active_when_clicked();
set_default_link_styling();

function set_default_link_styling(){
    menu_links[0].classList.add(current_link_visiting);
}

function close_menu_when_link_clicked() {
    menu_links.forEach(link => link.addEventListener("click", function() {
        document.querySelector(".menu-btn").checked = false;
    }))
}
function set_section_to_active_when_clicked() {
    for (let i = 0; i < menu_links.length; i++) {
        menu_links[i].addEventListener('click', function() {
            website_section.forEach(section => remove_class_from_section(section, current_section));
            menu_links.forEach(link =>  remove_styling_from_active_link(link, current_link_visiting));
            add_class_to_section(website_section[i], current_section);
            add_styling_to_active_link(menu_links[i], current_link_visiting);
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
