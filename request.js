    const getButton = document.getElementById('get-button');
    const sendButton = document.getElementById('send-button');

    const sendRequest = function(method, url, data){
        const promise = new Promise((resolve, reject)=>{
            const xhr = new XMLHttpRequest();
            xhr.open(method, url);
            xhr.responseType = "json";
            xhr.send(data);

            xhr.onload = function(){
                resolve(xhr.response);
            }
        });
        return promise;
    }

    const getData = function(){
        sendRequest("GET","https://jsonplaceholder.typicode.com/todos/1").then(
            (responseData)=>{
                console.log(responseData);
            }
        );
    }

    const sendData = function(){
        sendRequest("POST","https://jsonplaceholder.typicode.com/posts", JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
          })).then(
            (responseData)=>{
                console.log(responseData);
            }
        );
    }

    getButton.addEventListener("click", getData);
    sendButton.addEventListener("click", sendData);