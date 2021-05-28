const socket = io();

$('#chat').hide()

$('#login-btn').click(() => {
    socket.emit('login',{
        name:$('#login-inp').val()
    })
    $('#login').hide();
    $('#chat').show();
})

$('#send-btn').click(() => {
    socket.emit('send-msg',{
        msg:$('#inp').val()
    })
    $('#inp').val("");
})

socket.on('recevied_msg',(data) => {
    $('#list').append(`<li> <strong>${data.name}</strong> <hr>
     ${data.msg}</li>`)
})
