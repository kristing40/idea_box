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

  //  a new idea with the provided title and body should appear in the $('#ouput-area') from this event listener
  //  1. store title in variable from $('#title-input').val();
  //  2. store body text in variable from $('#body-input').val();
  // 2.5.    make an object
  //     send object to global array
  //  3. call ideaCard(title, body)
  //  4. call localStorage(title, body)
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
		<p class="ranking">quality:</p>
	</article>`)
}
