var title = $('.title-field');
var body = $('.body-field');

$('.save-button').on('click', function () {
  var titleInput = title.val();
  var bodyInput = body.val();
  createIdea(titleInput, bodyInput);
})

function createIdea(titleInput, bodyInput) {
  var idea = $('.idea-list').prepend(
    `<li class="new-idea">
    <h2 class="title-input">${titleInput}</h2>
    <p class="body-input">${bodyInput}</p>
    <button class="delete" type="button" name="delete" img src="images/delete.svg"></button>
    <button class="up-vote" type="button" name="up-vote" img src="images/upvote.svg"></button>
    <button class="down-vote" type="button" name="down-vote" img src="images/downvote.svg"></button>
    <p class="rating">quality: <span class="user-quality">swill</span></p>
    </li>`
  );
}
