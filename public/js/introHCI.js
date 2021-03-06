'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.project a').click(addProjectDetails); 		

	$('#colorBtn').click(randomizeColors);
}

var details;
/*
 * Make an AJAX call to retrieve project details and add it in
 */
function addProjectDetails(e) {

	// Prevent following the link
	e.preventDefault();

	// Get the div ID, e.g., "project3"
	var projectID = $(this).closest('.project').attr('id');
	// get rid of 'project' from the front of the id 'project3'
	var idNumber = projectID.substr('project'.length);

	details = $(this).next();

	var url = "/project/" + idNumber;
	$.get(url, project);

	console.log("User clicked on project " + idNumber);
	console.log(url);
}

function project(result){
	var projectHTML = '<a href="#" class="thumbnail">' + 
		'<img src="' + result['image'] + '" class="img">' +
		'<p>' + result['title'] + '</p>' +
		'<p><small>' + result['date'] + '</small></p></a>';

	details.html(projectHTML);
}


/*
 * Make an AJAX call to retrieve a color palette for the site
 * and apply it
 */
function randomizeColors(e) {
	console.log("User clicked on color button");
	$.get("/palette/", colorFun);
}

function colorFun() {
	console.log("Hola");
}