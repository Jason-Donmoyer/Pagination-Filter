let pageNumber = 1;
//let studentList = [];
const studentList = document.querySelector('ul');
const studentInfo = studentList.children;
const studentsPerPage = 10;
const divButton = document.querySelector('.pagination');
const newPageButton = divButton.querySelector('ul');

function numberOfPages() {
  let numberOfPages = Math.ceil(studentInfo.length / studentsPerPage);
  return numberOfPages;
}

function loadPage() {
    // first hide all students on the page
    //studentList.style.display = 'none';
    // Then loop through all students in our student list argument
    for (i = 0; i < studentInfo.length;i += 1) {
       // if student should be on this page number
       if (i < studentsPerPage) {
        // show the student
        studentInfo[i].style.display = '';
       } else {
        studentInfo[i].style.display = 'none';
       }  
    }  
    appendPageLinks();  
 }

 function showNewPage () {
  newPageButton.addEventListener('click', (e) {

  } )
 }




function appendPageLinks() {
    // determine how many pages for this student list 
    // create a page link section
    
    // “for” every page
    for (let i = 0; i <= numberOfPages(); i += 1) {
      let newPage = document.createElement('li');
      let newPageLink = document.createElement('a');
      newPageLink.className = 'active';
      newPageLink.href = '#';
      newPageLink.textContent = i;
      newPageButton.appendChild(newPage);
      newPage.appendChild(newPageLink);

    }
        // add a page link to the page link section
    // remove the old page link section from the site
    // append our new page link section to the site
    // define what happens when you click a link
        // Use the showPage function to display the page for the link clicked
        // mark that link as “active”
}


//function searchList() {
    // Obtain the value of the search input
    // remove the previous page link section    
    // Loop over the student list, and for each student…
// ...obtain the student’s name…
// ...and the student’s email…
// ...if the search value is found inside either email or name…
    		// ...add this student to list of “matched” student
    // If there’s no “matched” students…
           // ...display a “no student’s found” message
    // If over ten students were found…
           // ...call appendPageLinks with the matched students
   // Call showPage to show first ten students of matched list
//}
loadPage();
