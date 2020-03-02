
// let inputRub = document.getElementById('rub'),
//     inputUsd = document.getElementById('usd');

// inputRub.addEventListener('input', () => {
//     let request = new XMLHttpRequest();

//     request.open('GET', 'js/current.json');
//     request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
//     request.send();
    
//     request.addEventListener('readystatechange', function() {
//         if (request.readyState === 4 && request.status == 200) {
//             let data = JSON.parse(request.response);

//             inputUsd.value = inputRub.value / data.usd;
//         } else {
//             inputUsd.value = "Что-то пошло не так!";
//         }
//     });

// });


let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {
 
        let promise = new Promise((resolve, reject) => {
            let request = new XMLHttpRequest();

            request.open('GET', 'js/current.json');
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            request.send();
            
            request.onload = function() {
                if (request.readyState === 4 && request.status == 200) {
                    resolve(request.response);
               
                } else {
                    reject();
                }
            };
        })
    
        promise
            .then( response => {
                
                let data = JSON.parse(response);
                
                inputUsd.value = inputRub.value / data.usd;
            
            },
                error => {
                    inputUsd.value = "Что-то пошло не так!";
                }
            );

    
});