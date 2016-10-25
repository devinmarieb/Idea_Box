var title = $('.title-field');
var body = $('.body-field');
var ideaArray = JSON.parse(localStorage.getItem('ideabox')) || [];

$('.save-button').on('click', function() {
  var titleInput = title.val();
  var bodyInput = body.val();
  var ideabox = new CreateIdea(titleInput, bodyInput);
  ideabox.displayIdea();
  saveToStorage(ideabox);
});

function CreateIdea(title, body, id, quality) {
  this.title = title;
  this.body = body;
  this.id = Date.now();
  this.quality = "swill";
}

CreateIdea.prototype.displayIdea = function () {
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

function saveToStorage(ideabox) {
  ideaArray.push(ideabox);
  localStorage.setItem('ideabox', JSON.stringify(ideaArray));
}
