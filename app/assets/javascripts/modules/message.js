$(function(){

  let last_message_id = $('.MessageBox:last').data("message-id");
  function buildHTML(message){
    if ( message.image ) {
      let html =
      `<div class="mainchat__messagelist--box" data-message-id=${message.id}>
       
          <div class="mainchat__messagelist--box--name">
            ${message.user_name}
          </div>
          <div class="mainchat__messagelist--box--date">
            ${message.created_at}
          </div>
        </div>
        <div class="mainchat__messagelist--message">
          <p class="mainchat__messagelist--message--content">
            ${message.content}
          </p>
          <img class="Message__image" src="${message.image}">
        </div>
      </div>`
      return html;
    } else {
      let html =
      `<div class="mainchat__messagelist--box" data-message-id=${message.id}>
      
         <div class="mainchat__messagelist--box--name">
           ${message.user_name}
         </div>
         <div class="mainchat__messagelist--box--date">
           ${message.created_at}
         </div>
       </div>
       <div class="mainchat__messagelist--message">
          <p class="mainchat__messagelist--message--content">
           ${message.content}
         </p>
        </div>
      </div>`
      return html;
    };
  }

  $('.form_all').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.mainchat__messagelist').append(html);
      console.log(data)      
      $('form')[0].reset();
      $('.mainchat__messagelist').animate({ scrollTop: $('.mainchat__messagelist')[0].scrollHeight});
      $('.formbtn').prop('disabled', false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
      $('.formbtn').prop('disabled', false);
    });

  });

  
  
 });
  