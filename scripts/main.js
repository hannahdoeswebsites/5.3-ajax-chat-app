(function(){
  'use strict';

  var nameOfPerson = '';
  var textEntered = '';
  var currentTime = new Date();



  $(document).ready(function(){

    route();

    $(document).on('submit', '.login-form', function(event){
      event.preventDefault();
      nameOfPerson = $(this).find('.login-form-username').val();
      window.location.hash = '/chat';
    });

    $(window).on('hashchange', function(event){
      event.preventDefault();
      route();
    });
  });

  function route() {
    switch(window.location.hash) {
      case '':
        $('.application').html(JST['login']());
        break;
      case '#/chat':
        renderChat();

    }
  }

  function renderChat() {
    $('.application').html(JST['chat']());
    console.log('username:', nameOfPerson);
    $.ajax({
      url: "http://tiny-lasagna-server.herokuapp.com/collections/messages/"
    }).then(function(data){
    $('.application').html(JST['chat'](data));
    console.log(data);
      });



  }
  $(document).on('submit', '.input-messages', function(event){
    event.preventDefault();
    textEntered = $(this).find('.message').val();
    console.log(nameOfPerson, currentTime, textEntered);
    $.ajax({
      url: "http://tiny-lasagna-server.herokuapp.com/collections/messages/",
      type: "POST",
      data: {
        username: nameOfPerson,
        created_at: currentTime,
        message: textEntered
      }
    });

    function deleteInvalidMessages(){
    $.ajax({
      url: "http://tiny-lasagna-server.herokuapp.com/collections/messages/"
    }).then(function(messages) {
      console.log(messages);
      var invalid = _.reject(messages, function(message) {
        return message.hasOwnProperty('username')
            && message.hasOwnProperty('created_at')
            && message.hasOwnProperty('content')
      });
      console.log(invalid);
      invalid.forEach(function(message) {
        $.ajax({
          url: "http://tiny-lasagna-server.herokuapp.com/collections/messages/" + message._id,
          type: "DELETE"
        })
      });
    });
  }


  });

})();
