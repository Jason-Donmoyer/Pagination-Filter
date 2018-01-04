
// global variable declarations
const $studentInfo = $('.student-item'); 
const studentsPerPage = 10;
const pages = [];
const studentPageArray = createPages($studentInfo);
const pagButtons = '<div class="pagination"><ul></ul></div';

// function to create an array of pages with 10 students per page
function createPages(list) {
	var studentList = list.slice();
	while (studentList.length) {
		pages.push(studentList.splice(0,10));
	}
	return pages;
}

//function to get number of pages
function numberOfPages(list) {
	const numberOfPages = Math.ceil(list.length / studentsPerPage);
	return numberOfPages;
}

// function to filter the page displayed
function showPage(pageNumber, list) {
    // hide the student list
    $studentInfo.hide();
    //loop through the array of pages
    $.each(list, function(index, page){
        if (pageNumber === index) {
            $.each(page, function(i, listIndex) {
                // animation when page is displayed
                $(listIndex).show('slow');
            });
        }
    });
    }
    
//function to create page buttons
function appendPageLinks(list) {
    $('.page').append(pagButtons);
    let numPages = numberOfPages($studentInfo);
    for (let i = 1; i <= numPages; i += 1) {
        const pageButtons = '<li><a href ="#">' + i + '</a></li>';
        $('.pagination ul').append(pageButtons);
    } 
    $('.pagination ul li a').first().addClass('active');
    $('.pagination ul li a').on('click', function(e) {
        let pageClick = parseInt($(this)[0].text) -1;
        showPage(pageClick, list);
        $('.pagination ul li a').removeClass();
        $(this).addClass('active');
        e.preventDefault();
    });
}

// initialize functions
appendPageLinks(studentPageArray);
showPage(0, studentPageArray);