function Http() {
    let xhr = new XMLHttpRequest()
    return function ({ method, url, data, success }) {
        xhr.open(method, url)
        if (method == 'GET') {
            xhr.send()
        } else {
            xhr.setRequestHeader('content-type', 'application/json')
            xhr.send(JSON.stringify({
                username: username,
                password: password
            }))
        }
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                console.log('成功啊', xhr.responseText)
                success(xhr.responseText)
            }
        }
    }
}