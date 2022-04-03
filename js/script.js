
const inputLari = document.querySelector('#lari');
const inputUsd = document.querySelector('#usd');

inputLari.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();


    request.addEventListener('readystatechange', () => {
        if(request.readyState === 4 && request.status === 200){
            console.log(request.response);
            const data = JSON.parse(request.response);
            inputUsd.value = (+ inputLari.value / data.current.usd).toFixed(2);
        }else{
            inputUsd.value = 'wrong';
        }
    });
});