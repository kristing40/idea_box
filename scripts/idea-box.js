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
	addToLocalStorage(ideaArray);
	ideaCard(ideaArray);
	clearFields();
  });


function CreateIdea(cardId, title, body, quality) {
	this.cardId = cardId;
	this.title = title;
	this.body = body;
	this.quality = quality;
}

function ideaCard() {
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
}

function addToLocalStorage(ideaArray) {
	localStorage.clear();
	var stringifiedArray = JSON.stringify(ideaArray);
	localStorage.setItem('cardId', stringifiedArray);
};

function retrieveLocalStorage() {
	ideaArray = JSON.parse(localStorage.getItem('cardId'));
	return ideaArray;
};

$('#output-area').on('click', '#delete-btn', function() {
	$('idea-card').closest('.cardId').remove();
  page should not reload
  remove idea from localStorage
  });

$(window).on('load', function() {
	retrieveLocalStorage();
	ideaCard();
	console.log('hello');
});


  // to rewrite cards to page on page reload
  // ideaCard(title, body)
