var title = $('.title-field');
var body = $('.body-field');
var ideaArray = JSON.parse(localStorage.getItem('ideabox')) || [];

$('document').ready(function(){
  getStorage();
});

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

function getStorage(){
  debugger
  var storedIdeas = JSON.parse(localStorage.getItem('ideabox'));
  if (storedIdeas){
    for (i = 0; i < storedIdeas.length; i++){
      var idea = storedIdeas[i];
      for
      // ideaArray.push(new CreateIdea(idea.title, idea.body, idea.id, idea.quality));
    }
  }
}

function clearInputFields(){
  var titleInput = title.val('');
  var bodyInput = body.val('');
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
  clearInputFields();
});
