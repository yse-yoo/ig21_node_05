//HTMLがロードされたら実行
$(() => {
    const url = ''
    let socket = io.connect(url)

    const message = $('#message')
    const chatList = $('#chatList')

    $('#send').on('click', () => {
        //メッセージ入力チェック
        if (!message.val()) return
        //サーバにデータ送信
        socket.emit('message',
            {
                message: message.val()
            }
        )
        //メッセージを空にする
        message.val('')
    })

    //データ受信
    socket.on('message', (data) => {
        console.log(data)
        let chatElement = $('<p>').append(data.message)
        chatList.prepend(chatElement)
    })

})