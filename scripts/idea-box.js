/**Global Variable**/
var ideaArray = [];

/**Event Listeners**/
$('#save-btn').on('click', function() {
	var title = $('#title-input').val();
	var body = $('#body-input').val();
	var cardId = Date.now();
	var quality = "swill";
	var newIdea = new CreateIdea(cardId, title, body, quality);
	ideaCard(newIdea);
	ideaArray.push(newIdea);
	console.log(ideaArray);
	addToLocalStorage(ideaArray);
  //  5. call clearFields(title, body)
  });


function CreateIdea(cardId, title, body, quality) {
	this.cardId = cardId;
	this.title = title;
	this.body = body;
	this.quality = quality;
}

function ideaCard(newIdea) {
  $('#display-area').append(`<article class="idea-card ${newIdea.cardId}">
		<h3 contenteditable="true">${newIdea.title}</h3>
		<div id="delete-btn" class="vote"></div>
		<p class="card-body-text" contenteditable="true">${newIdea.body}</p>
		<div id="upvote" class="vote"></div>
		<div id="downvote" class="vote"></div>
		<p class="ranking">quality:${newIdea.quality}</p>
	</article>`)
};

function addToLocalStorage(ideaArray) {
	var stringifiedArray = JSON.stringify(ideaArray);

	localStorage.setItem('cardId', stringifiedArray);
};

function retrieveLocalStorage(ideaArray) {
	var parsedArray = JSON.parse(localStorage.getItem(ideaArray));
	//might need to return something
	ideaCard(parsedArray);
	console.log(parsedArray);
};

(function(ideaArray) {
	retrieveLocalStorage(ideaArray);
	ideaCard();
  // to rewrite cards to page on page reload
  // ideaCard(title, body)
});
