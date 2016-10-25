var title = $('.title-field');
var body = $('.body-field');
var ideaArray = JSON.parse(localStorage.getItem('ideabox')) || [];
var ideabox = new CreateIdea

// $('document').ready(function(){
//   getStorage(ideabox);
// });

function CreateIdea(title, body, id, quality) {
  this.title = title;
  this.body = body;
  this.id = id || Date.now();
  this.quality = quality || "swill";
}

function displayIdea(titleInput, bodyInput, id, quality){
  $('.idea-list').prepend(
   `<li id=${id} class="new-idea">
   <h2 class="title-input">${titleInput}</h2>
   <button class="delete" type="button" name="delete" img src="images/delete.svg"></button>
   <p class="body-input">${bodyInput}</p>
   <p class="rating">quality: <span class="user-quality">swill</span></p>
   <button class="up-vote" type="button" name="up-vote" img src="images/upvote.svg"></button>
   <button class="down-vote" type="button" name="down-vote" img src="images/downvote.svg"></button>
   </li>`
 );
}

function saveToStorage() {
  localStorage.setItem('ideabox', JSON.stringify(ideaArray));
}

$('.save-button').on('click', function() {
  var titleInput = title.val();
  var bodyInput = body.val();
  var ideabox = new CreateIdea(titleInput, bodyInput);
  var id = ideabox.id;
  var quality = ideabox.quality;
  displayIdea(titleInput, bodyInput, id, quality);
  ideaArray.push(ideabox);
  saveToStorage(ideabox);
});

function getStorage() {
  debugger
  var ideabox = JSON.parse(localStorage.getItem('ideabox'))
  if (ideaArray.length !== 0) {
    ideabox.forEach(function(){
    displayIdea();
    })
  }
}

//fuction deleteIdea(){
// use array filter to find unique id and return new array without id
// }
