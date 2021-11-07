document.addEventListener("DOMContentLoaded", function() {
    const MENU_LINKS = document.querySelectorAll('.menu a');
    const WEBSITE_SECTION = document.querySelectorAll('.websiteSection');
    const CURRENT_SECTION = "currentSectionOpen";
    const CURRENT_LINK_VISITING = "addActiveLinkStyle";
    const PROJECT_DIVS = document.querySelectorAll('.projectDiv');

    closeMenuWhenLinkClicked();
    setSectionToActiveWhenClicked();
    setDefaultLinkStyling();

    // PROJECT_DIVS.forEach(div => div.addEventListener('mouseover', () => div.classList.add("overlay")));
    // PROJECT_DIVS.forEach(div => div.addEventListener('mouseout', () => div.classList.remove("overlay")));

    function setDefaultLinkStyling(){
        MENU_LINKS[0].classList.add(CURRENT_LINK_VISITING);
    }

    function closeMenuWhenLinkClicked() {
         MENU_LINKS.forEach(link => link.addEventListener("click", function() {
            document.querySelector(".menu-btn").checked = false;
        }))
    }
    function setSectionToActiveWhenClicked() {
        for (let i = 0; i < MENU_LINKS.length; i++) {
            MENU_LINKS[i].addEventListener('click', function() {
                WEBSITE_SECTION.forEach(section => removeClassFromSection(section, CURRENT_SECTION));
                MENU_LINKS.forEach(link =>  removeStylingFromActiveLink(link, CURRENT_LINK_VISITING));
                addClassToSection(WEBSITE_SECTION[i], CURRENT_SECTION);
                addStylingToActiveLink(MENU_LINKS[i], CURRENT_LINK_VISITING);
            });
        }
    }
    function addClassToSection(section, t) {
        section.classList.add(t);
    }
    function removeClassFromSection(section, t) {
        section.classList.remove(t);
    }
    function addStylingToActiveLink(link, t) {
        link.classList.add(t);
    }
    function removeStylingFromActiveLink(link, t) {
        link.classList.remove(t);
    }
    // Collapse menu if a link is selected
    if (window.innerWidth <= 768) {
        $('.menu a').on("click", function() {
            $('.menu-btn').prop('checked', false);
        });
    }
    
    // For the typewriter-like text

    // Sentences
    const CONTENT = ["Junior full stack developer","Computer science student","Nature enthusiast","Software developer"];
    // Current sentence being processed
    var PART = 0;
    // Character number of the current sentence being processed
    var PART_INDEX = 0;

    var INTERVAL_VAL;

    const MILLISECONDS_UNTIL_DELETE = 50;

    const INTERVAL_BETWEEN_SENTENCES = 50;

    const MILLISECONDS_FOR_DELETE = 1000;

    const MILLISECONDS_BETWEEN_TYPING = 50;

    const ONLOAD_SENTENCE_DISPLAY_TIME = 50;

    const ELEMENT = document.querySelector("#text");

    // Implement typing effect
    function Type() {
        let text = CONTENT[PART].substring(0, PART_INDEX + 1);
        ELEMENT.innerHTML = text;
        PART_INDEX++;

        // If full sentence has been displayed, then start to delete the sentence after some time
        if (text === CONTENT[PART]) {
            clearInterval(INTERVAL_VAL);
            setTimeout(function() {
                INTERVAL_VAL = setInterval(Delete, MILLISECONDS_UNTIL_DELETE);
            }, MILLISECONDS_FOR_DELETE);
        }
    }

    // Implements deleting effect
    function Delete() {
        let text = CONTENT[PART].substring(0, PART_INDEX - 1);
        ELEMENT.innerHTML = text;
        PART_INDEX--;

        // If sentence has been deleted then start to display the next sentence
        if (text === '') {
            clearInterval(INTERVAL_VAL);

            if (PART == (CONTENT.length - 1)) 
                PART = 0;
            else 
                PART++;
            PART_INDEX = 0;

            // Start to display the next sentence after some time
            setTimeout(function() {
                INTERVAL_VAL = setInterval(Type, INTERVAL_BETWEEN_SENTENCES);
            }, MILLISECONDS_BETWEEN_TYPING);
        }
    }
    // Start the typing effect on load
    INTERVAL_VAL = setInterval(Type, ONLOAD_SENTENCE_DISPLAY_TIME);
});