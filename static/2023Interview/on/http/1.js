window.onload = function() {
    var axios = Http()
    $('#login').on('click', function () {
        var username = $('#username')
        var password = $('#password')
        console.log(username, password)
        sendData(username, password)
    })

    function sendData(username, password) {
        // let xhr = new XMLHttpRequest()
        // xhr.open('post', 'httlp://localhost:3333/form_login')
        // xhr.setRequestHeader('content-type', 'application/json')
        // xhr.send(JSON.stringify({
        //     username: username,
        //     password: password
        // }))
        // xhr.onreadystatechange = function () {
        //     if (xhr.readyState == 4 && xhr.status == 200) {
        //         console.log('成功了', xhr.responseText)
        //     }
        // }

        let data = JSON.stringify({
            username: username,
            password: password
        })
        // Http('post', '/form_login', data, function (res) {
        //     console.log('啊', res)
        // })
        axios({
            method: 'post',
            url: '/form_login',
            data: data,
            success: function (res) {
                console.log('sss', res)
            }
        })
    }
}