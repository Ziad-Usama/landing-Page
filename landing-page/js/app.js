/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * 
 */

/**
 * Define Variables
 * 
 */
 const navBar = document.querySelector("#navbar__list");
 // Making a document fragment to efficiently append the list items(nav-bar items) in least reflows and repaints 
 const DocFrag = document.createDocumentFragment();
 const section = document.querySelectorAll("section");
 /**
  * End Variables
  * Start Helper Functions
  * 
  */
 
 function checkView(elem) {
     let bound = elem.getBoundingClientRect();
     return !(bound.top > innerHeight || bound.bottom < 0);
 }
 
 // This will create the sections+num of the sections that will take a place in the nav bar
 function appendToNavBar() {
     for (let i = 1; i <= 4; i++) {
         const listItem = document.createElement("li");
         listItem.textContent = "section " + i;
         listItem.addEventListener('click', function() {
 
         })
         DocFrag.appendChild(listItem);
     }
     navBar.appendChild(DocFrag);
 }
 
 function addingEventListner(elem) {
     document.addEventListener('scroll', function(e) {
         e.preventDefault();
         if (checkView(elem)) {
            for(let i =0; i< section.length; i++){
                if(section[i] == elem){
                    li[i].setAttribute("class","active")
                }else{
                    li[i].setAttribute("class","");
                }
            }
            elem.setAttribute("class","active-sec");
            for(let i =0; i< section.length; i++){
                if(section[i] == elem){
                    continue;
                }else{
                    section[i].setAttribute("class","");
                }
            }
         }
     })
 }
 
 function addingScroll(elem, elem2) {
     elem.addEventListener('click', function(e) {
         e.preventDefault();
         for(let i =0; i<li.length;i++){
             if(li[i] == elem){
                 continue;
             }else{
                 li[i].setAttribute("class","");
             }
         }
         elem2.scrollIntoView({
             behavior: "smooth",
             block: "end",
             inline: "start"
         });
     });
 }
 /**
  * End Helper Functions
  * Begin Main Functions
  * 
  */
 
 // build the nav
 appendToNavBar();
 
 // Add class 'active' to section when near top of viewport
 for (let i = 0; i < section.length; i++) {
     addingEventListner(section[i]);
 }
 
 const li = document.querySelectorAll('li');
 for (let i = 0; i < li.length; i++) {
     addingScroll(li[i], section[i]);
 }
 /**
  * End Main Functions
  * Begin Events
  * 
  */
 
 // Build menu 
 
 // Scroll to section on link click
 
 // Set sections as active