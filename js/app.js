
// variables to seperate the students into a collection
const studentList = document.querySelector('ul');
const studentInfo = studentList.children;
const studentsPerPage = 10;
// variables to create page buttons
const divButton = document.querySelector('.pagination');
const newPageButton = divButton.querySelector('ul');

// function to get the number of pages required
function numberOfPages() {
  let numberOfPages = Math.ceil(studentInfo.length / studentsPerPage);
  return numberOfPages;
}
// function to load the initial page of 10 students
function loadPage() {
    for (i = 0; i < studentInfo.length;i += 1) {
       if (i < studentsPerPage) {
        studentInfo[i].style.display = '';
       } else {
        studentInfo[i].style.display = 'none';
       }  
    }
   // the appendPageLinks function adds the buttons to the page   
    appendPageLinks();  
 }

// function to show the page corresponding to the button clicked
 function showNewPage () {
  newPageButton.addEventListener('click', function(e) {
    let buttonNum = parseInt(e.target.textContent);
    // used to test the parseInt method 
    console.log(buttonNum);
    let maxPerPage = buttonNum * 10;
    let minPerPage = maxPerPage - 10;
    for (let i = 0; i < studentInfo.length; i++) {
        if (i >= minPerPage && i < maxPerPage) {
            studentInfo[i].style.display = '';
        }  else {
            studentInfo[i].style.display = 'none';
        }
      }     
  });
 }

// function to create the page buttons
function appendPageLinks() {
    for (let i = 1; i <= numberOfPages(); i += 1) {
      let newPage = document.createElement('li');
      let newPageLink = document.createElement('a');
      newPageLink.className = 'active';
      newPageLink.href = '#';
      newPageLink.textContent = i;
      newPageButton.appendChild(newPage);
      newPage.appendChild(newPageLink);
      // add the functionality to the buttons
      showNewPage();
    }
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
