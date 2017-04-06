/**GLOBAL VARIABLE**/
var ideaArray = [];



/**CONSTRUCTOR FUNCTION**/
function CreateIdea(cardId, title, body, quality) {
    this.cardId = cardId;
    this.title = title;
    this.body = body;
    this.quality = quality;
};

/**EVENT LISTENERS**/
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

$('#output-area').on('click', '#delete-btn', function() {
		var deleteCard = $(this).closest('.idea-card').attr('id');
		ideaArray = JSON.parse(localStorage.getItem('cardId'));
    ideaArray.splice(ideaArray.cardId = 'deleteCard', 1);
    addToLocalStorage(ideaArray);
		ideaCard();
});

$('#display-area').on('click', '#upvote', function() {
    var storeVoteId = $(this).closest('.idea-card').attr('id');
    var $rank = $(this).parent().find('#rank');
    if ($rank.text() === 'swill') {
        $rank.text('plausible');
    } else if ($rank.text() === 'plausible') {
        $rank.text('genius');
      }
      //  updateArray(storeVoteId, ideaArray, $rank);
});

$('#display-area').on('click', '#downvote', function() {
    var storeVoteId = $(this).closest('.idea-card').attr('id');
    var $rank = $(this).parent().find('#rank');
    if ($rank.text() === 'genius') {
        $rank.text('plausible');
      } else if ($rank.text() === 'plausible') {
        	$rank.text('swill');
      }
    //  updateArray(storeVoteId, ideaArray, $rank);
});

$(window).on('load', function() {
      retrieveLocalStorage();
      ideaCard();
});


  /**FUNCTIONS**/
function ideaCard() {
  $('#display-area').html('');
  	ideaArray.forEach(function(idea) {
      $('#display-area').append(`
  			<article id="${idea.cardId}" class="idea-card ">
  				<h3 contenteditable="true">${idea.title}</h3>
  				<div id="delete-btn" class="vote"></div>
  				<p class="card-body-text" contenteditable="true">${idea.body}</p>
  				<div id="upvote" class="vote"></div>
  				<div id="downvote" class="vote"></div>
  				<p class="ranking">quality:<span id='rank'>${idea.quality}</span></p>
        </article>`);
	      });
  };

function clearFields() {
    $('#title-input, #body-input').val("");
};

function addToLocalStorage(ideaArray) {
    localStorage.clear();
    var stringifiedArray = JSON.stringify(ideaArray);
    localStorage.setItem('cardId', stringifiedArray);
};

function retrieveLocalStorage() {
  	ideaArray = JSON.parse(localStorage.getItem('cardId')) || [];
  	return ideaArray;
};

// function updateArray(storeVoteId, ideaArray, $rank) {
//   // ideaArray = JSON.parse(localStorage.getItem('cardId'));
//   var quality = $(this).closest('.idea-card').find('#rank')
//   console.log(ideaArray.find('#rank'));
//
//   ideaArray.quality = $rank.text();
//  if(storeVoteId === ideaArray.cardId) {
//   var upDateRank = JSON.stringify(ideaArray);
//   }

// };
