//HTMLがロードされたら実行
$(() => {
    const url = ''
    let socket = io.connect(url)

    const message = $('#message')
    const chatLIst = $('#chatList')

    $('#send').on('click', () => {
        //メッセージ入力チェック
        if (!message.val()) return

        //メッセージを空にする
        message.val('')
    })
})