var title = $('.title-field');
var body = $('.body-field');
var ideaArray = JSON.parse(localStorage.getItem('newUserIdea')) || [];

$('document').ready(function(){
  getStorage();
});

$('.save-button').on('click', function() {
  var titleInput = title.val();
  var bodyInput = body.val();
  var newUserIdea = new CreateIdea(titleInput, bodyInput);
  var id = newUserIdea.id;
  var quality = newUserIdea.quality;
  displayIdea(titleInput, bodyInput, id, quality);
  ideaArray.push(newUserIdea);
  saveToStorage(newUserIdea);
  clearInputFields();
});

$('ul').on('click', '.delete', function(){
  var id = this.closest('li').id
  removeIdea(id);
  $(this).closest('li').remove();
})

$('ul').on('blur', '.title-input', function(){
  var id = this.closest('li').id
  var newTitle = $(this).text();
  editTitle(id, newTitle);
})

function editTitle(id, newTitle){
  var index;
  for(var i = 0; i < ideaArray.length; i ++){
    if(ideaArray[i].id === parseInt(id)){
      index = i;
    }
  }
  debugger
  var newUserIdea = JSON.parse(localStorage.getItem('newUserIdea'))[index];
  newUserIdea.title = newTitle;
  saveToStorage(); //not working
}

function removeIdea(id, index){
  var index;
  for(var i = 0; i < ideaArray.length; i ++){
    if(ideaArray[i].id === parseInt(id)){
      index = i;
    }
  }
  ideaArray.splice(index, 1);
  saveToStorage();
}

function CreateIdea(title, body, id, quality) {
  this.title = title;
  this.body = body;
  this.id = id || Date.now();
  this.quality = quality || "swill";
}

function displayIdea(titleInput, bodyInput, id, quality){
  $('.idea-list').prepend(
   `<li id=${id} class="new-idea">
   <h2 class="title-input" contenteditable="true">${titleInput}</h2>
   <button class="delete" type="button" name="delete" img src="images/delete.svg"></button>
   <p class="body-input" contenteditable="true">${bodyInput}</p>
   <p class="rating">quality: <span class="user-quality">swill</span></p>
   <button class="up-vote" type="button" name="up-vote" img src="images/upvote.svg"></button>
   <button class="down-vote" type="button" name="down-vote" img src="images/downvote.svg"></button>
   </li>`
 );
}

function saveToStorage() {
  localStorage.setItem('newUserIdea', JSON.stringify(ideaArray));
}

function getStorage(){
  var storedIdeas = JSON.parse(localStorage.getItem('newUserIdea'));
  if (storedIdeas){
    for (i = 0; i < storedIdeas.length; i++){
      var idea = storedIdeas[i];
      displayIdea(idea.title, idea.body, idea.id, idea.quality);
    }
  }
}

function clearInputFields(){
  var titleInput = title.val('');
  var bodyInput = body.val('');
}



// function findIdea(id, index) {
//   var index;
//   for(var i = 0; i < ideaArray.length; i ++){
//     if(ideaArray[i].id === parseInt(id)){
//       index = i;
//     }
//   }
// }

//lastIndexOf for search - jQuery//
