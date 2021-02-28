const getButton = document.getElementById('get-button');
const sendButton = document.getElementById('send-button');


const getData = function(){
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1");
    xhr.responseType = "json";
    xhr.send();

    xhr.onload = function(){
        const result = xhr.response;
        console.log(result);
    }
}

const sendData = function(){

}

getButton.addEventListener("click", getData);
sendButton.addEventListener("click", sendData);