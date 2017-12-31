
// variables to seperate the students into a collection
const studentList = document.querySelector('ul');
const studentInfo = studentList.children;
const studentsPerPage = 10;
// variables to create page buttons
const divButton = document.querySelector('.pagination');
const newPageButton = divButton.querySelector('ul');
// variables to be used to create the search bar
const searchButton = document.querySelector('.student-search');
const match = document.querySelector('.match');
const resultsOfSearch = [];

// function to get the number of pages required
function numberOfPages() {
  let numberOfPages = Math.ceil(studentInfo.length / studentsPerPage);
  return numberOfPages;
}
// function to load the initial page of 10 students
function loadPage() {
    for (let i = 0; i < studentInfo.length;i += 1) {
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

//function to display search box
function searchList() {
    let input = document.createElement('input');
    let inputButton = document.createElement('button'); 
    input.placeholder = 'Please enter a name';
    inputButton.textContent = 'Find Student';
    searchButton.appendChild(input);
    searchButton.appendChild(inputButton);
    //loops through students for 
    resultsOfSearch.length = 0;
    inputButton.addEventListener('click', function() {
      let searchInput = input.value.toLowerCase();
      for (let i = 0; i < studentInfo.length; i += 1) {
        if (studentInfo[i].innerHTML.indexOf(searchInput) > -1) {
          studentInfo[i].style.display = '';
        } else {
          studentInfo[i].style.display = 'none';
          resultsOfSearch.push(i);
        }
      }
      // display a no results found message if no matches are found
      if (resultsOfSearch.length === studentInfo.length) {
        match.innerHTML = '<h1>No matches found</h1>';
      } else {
        match.innerHTML = '';
        let pagButtons = document.querySelector('.pagination');
        pagButtons.style.display = 'none';
                 
      }
    });
}

loadPage();
searchList();
