/**Global Variable**/
var ideaArray = [];

/**Event Listeners**/
$('#save-btn').on('click', function() {
	var title = $('#title-input').val();
	var body = $('#body-input').val();
	var cardId = Date.now();
	var quality = "swill";
	var newIdea = new CreateIdea(cardId, title, body, quality);
	ideaArray.push(newIdea);
	ideaCard(ideaArray);
	// console.log(ideaArray);
	addToLocalStorage(ideaArray);
	clearFields();
  });


function CreateIdea(cardId, title, body, quality) {
	this.cardId = cardId;
	this.title = title;
	this.body = body;
	this.quality = quality;
}

function ideaCard(ideaArray) {
	$('#display-area').html('');
	ideaArray.forEach(function(idea){
		$('#display-area').append(`<article class="idea-card ${idea.cardId}">
		<h3 contenteditable="true">${idea.title}</h3>
		<div id="delete-btn" class="vote"></div>
		<p class="card-body-text" contenteditable="true">${idea.body}</p>
		<div id="upvote" class="vote"></div>
		<div id="downvote" class="vote"></div>
		<p class="ranking">quality:${idea.quality}</p>
		</article>`);
	});
};

function clearFields() {
	$('#title-input, #body-input').val("");
  // page should be persisted on page reload
}

function addToLocalStorage(ideaArray) {
	//clear local storage
	localStorage.clear();
	var stringifiedArray = JSON.stringify(ideaArray);

	localStorage.setItem('cardId', stringifiedArray);
};

function retrieveLocalStorage(ideaArray) {
	var parsedArray = JSON.parse(localStorage.getItem(ideaArray));
	//might need to return something
	ideaArray = ideaCard(parsedArray);
	return ideaArray;
	// console.log(parsedArray);
};

$(window).load(function() {
	ideaArray = retrieveLocalStorage(ideaArray);
	ideaCard(ideaArray);
	console.log('hello iife');
});


  // to rewrite cards to page on page reload
  // ideaCard(title, body)
