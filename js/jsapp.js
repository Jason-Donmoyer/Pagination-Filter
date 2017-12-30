const studentList = $('.student-list');
const studentInfo = $('.student-item');
const pageSelector = $('.pagination');
const pageButton = $('.pagination ul');
const studentsPerPage = 10;



function numberOfPages() {
	let pages = Math.ceil(studentInfo.length / studentsPerPage);
	return pages;
}

function loadPage() {
	for (let i = 0; i < studentsPerPage; i += 1) {
		if (i < studentsPerPage) {
			studentInfo[i].style.display = '';
		} else {
			studentInfo[i].style.display = 'none';
		}
	}
}

loadPage();