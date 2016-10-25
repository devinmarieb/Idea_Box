var title = $('.title-field');
var body = $('.body-field');
var ideaArray = JSON.parse(localStorage.getItem('allIdeas')) || [];

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
  localStorage.setItem('allIdeas', JSON.stringify(ideaArray));
}

function getStorage(){
  var storedIdeas = JSON.parse(localStorage.getItem('allIdeas'));
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

$('.save-button').on('click', function() {
  var titleInput = title.val();
  var bodyInput = body.val();
  var allIdeas = new CreateIdea(titleInput, bodyInput);
  var id = allIdeas.id;
  var quality = allIdeas.quality;
  displayIdea(titleInput, bodyInput, id, quality);
  ideaArray.push(allIdeas);
  saveToStorage(allIdeas);
  clearInputFields();
});

//delete button
$('ul').on('click', '.delete', function(){
  this.closest('li').remove();
  var id = this.id
  localStorage.getItem('allIdeas', this.id);
  localStorage.removeItem('allIdeas', id);
  // var item = function() {
  //   ideaArray.findIndex(this.li)
  // };
  // console.log(item);
})

function removeItem() {
  for(var i = 0; i < ideaArray.length; i++){
    var result = ideaArray[i];
    if(result.id === this.id){
      return result;
    };
  };
}

//upvote button
// $('ul').on('click', '.up-vote', function() {
//   this.closest('li').
// })

//downvote button
// $('ul').on('click', '.down-vote', function() {
//   this.closest('li')
// })

//last index of for search
