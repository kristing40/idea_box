### Pseudo Code for idea-box

###Global Variable
var ideaArray = [];

####Event Listeners

$('#save-btn').on('click', function() {

   a new idea with the provided title and body should appear in the $('#ouput-area') from this event listener
   1. store title in variable from $('#title-input').val();
   2. store body text in variable from $('#body-input').val();
  2.5.    make an object
      send object to global array
   3. call ideaCard(title, body)
   4. call localStorage(title, body)
   5. call clearFields(title, body)
  });

$('#search-field').on('keyup', function() {
    pull array out of localStorage and filter it using the sort();
    page should not reload
    if search field is empty print all of the cards
  });

$('#delete-btn').on('click', function() {
  remove idea from the list
  page should not reload
  remove idea from localStorage
    1. call
  });


$('#display-area').on('click', '#upvote', function() {
    create variable with an array
    then use a foreach()
     iterate up through array with index
  });

$('#display-area').on('click', '#downvote', function() {
    create variable with an array
    then use a foreach()
     iterate down through array with index
    });



####Functions
create ideaCard(title, body) {
  either append or prepend card
  place title text and body text on card
}

create clearField() {
  clear text fields
  disable page reload
  page should be persisted on page reload
}

create addToLocalStorage(title, body) {
  store uniqueId in var create unique id can use dateObj
  stringify title and body text for localStorage
  store title and body text in localStorage with unique id
}

create retrieveLocalStorage(id) {
  create variable to parse data coming from localStorage
}

create deleteFromLocalStorage(id) {
  localStorageClear()
}

create iife() {
  to rewrite cards to page on page reload
  ideaCard(title, body)
}

create printAllCards() {
  foreach() or another method to take all cards out of localStorage and print them to the page.
}
