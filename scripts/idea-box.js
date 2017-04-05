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
		$('#display-area').append(`<article id="${idea.cardId}" class="idea-card">
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
	ideaArray = JSON.parse(localStorage.getItem('cardId'));
	var deleteCard = $(this).closest('.idea-card').attr('id')
	console.log(deleteCard);
	//get that cards idCard number
	//delete that card
	ideaArray.removeItem($(this).closest('.idea-card').attr('id'))
	//put array back in local storage
	
	//print all cards again
	ideaCard();
});

$(window).on('load', function() {
	retrieveLocalStorage();
	ideaCard();
	console.log('hello');
});


  // to rewrite cards to page on page reload
  // ideaCard(title, body)
