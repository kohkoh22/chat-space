$(function() {
  function addUser(user) {
    let html =`
                <div class="ChatMember">
                  <p class="ChatMember__name">${user.name}</p>
                  <div class="ChatMember__add ChatMember__button" data-user-id="${user.id}" data-user-name="${user.name}">追加</div>
                </div>
    `;
$("#UserSearchResult").append(html);
}

function addNoUser() {
  let html = `
              <div class="ChatMember">
                <p class="ChatMember__name">ユーザーが見つかりません</p>
              </div>
              `;
  $("#UserSearchResult").append(html);
}

function  deleteUser(username, userid){
  let html = `
              <div class="ChatMember">
                <p class="ChatMember__name">${username}</p>
                <input name="group[user_ids][]" type="hidden" value="${userid}" />
                <div class="ChatMember__remove ChatMember__button">削除</div>
              </div>
              `;
$(".ChatMembers").append(html)
}




$("#UserSearch__field").on("keyup", function() {
  let input = $("#UserSearch__field").val();
  
  $.ajax({
    type: "GET",
    url: "/users",
    data: { keyword: input },
    dataType: "json"
  })

  .done(function(users) {
    $("#UserSearchResult").empty();
    if (users.length !== 0) {
      users.forEach(function(user) {
        addUser(user);
      });
    } else if (input.length == 0) {
      return false;
    } else {
      addNoUser();
    }
  })
  .fail(function() {
    alert("ユーザー検索に失敗しました");
  });


 
});

$("#UserSearchResult").on('click', ".ChatMember__add", function(){
  // ユーザーの名前をattrで引っ張り出して代入する
  let userName = $(this).attr('data-user-name');
  //ユーザーのidをattrで引っ張って代入する
  let userId = $(this).attr('data-user-id');
  $(this).parent().remove();
  deleteUser(userName, userId);
});

$(".ChatMembers").on('click', ".ChatMember__remove", function(){
  // let userName = $(this).attr('data-user-name');
  // let userId = $(this).attr('data-user-id');
  $(this).parent().remove();
  
});
});

