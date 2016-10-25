var title = $('.title-field');
var body = $('.body-field');
var ideaArray = JSON.parse(localStorage.getItem('ideabox')) || [];

$('document').ready(function(){
  getStorage();
});

function CreateIdea(title, body, id, quality) {
  this.title = title;
  this.body = body;
  this.id = Date.now();
  this.quality = "swill";
}

CreateIdea.prototype.displayIdea = function() {
  $('.idea-list').prepend(
   `<li ${this.id} class="new-idea">
   <h2 class="title-input">${this.title}</h2>
   <button class="delete" type="button" name="delete" img src="images/delete.svg"></button>
   <p class="body-input">${this.body}</p>
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
  ideabox.displayIdea();
  ideaArray.push(ideabox);
  saveToStorage(ideabox);
});

function getStorage() {
  debugger
  if (ideaArray.length !== 0) {
    ideaArray.forEach(function(){
      CreateIdea.prototype.displayIdea(this.title, this.body, this.id, this.quality);
    })
  }
}

//fuction deleteIdea(){
// use array filter to find unique id and return new array without id
// }
