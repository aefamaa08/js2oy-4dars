// const button = document.getElementById("myButton");
// button.addEventListener("click", () => {
//     alert("Кнопка нажата!");
// });


// const form = document.getElementById("myForm");

// form.addEventListener("submit",(event) =>{
//     event.preventDefault();
//     alert("Форма отправлена");
// });

// const box = document.getElementById("myBox");

// box.addEventListener("mousedown", ()=>
// {
//     box.style.backgroundColor="blue";
// })


// box.addEventListener("mouseup", ()=>
//     {
//         box.style.backgroundColor="red";
// })

// const input = document.getElementById("nameInput");
// input.addEventListener("keyup",(event) => {

//     console;.log('Вы ввел: ${event.target.valu}');
// });     
// document.addEventListener('DOMContentLoaded', () => {
//     const numberInput = document.getElementById('numberInput');
//     const sendButton = document.getElementById('sendButton');
//     const decrementButton = document.getElementById('decrementButton');
//     const incrementButton = document.getElementById('incrementButton');
//     const numberDisplay = document.getElementById('numberDisplay');
//     const colorPicker = document.getElementById('colorPicker');

//     sendButton.addEventListener('click', () => {
//         const value = parseInt(numberInput.value, 10);
//         if (!isNaN(value)) {
//             numberDisplay.textContent = value;
//         }
//     });

//     decrementButton.addEventListener('click', () => {
//         let value = parseInt(numberDisplay.textContent, 10);
//         if (!isNaN(value)) {
//             numberDisplay.textContent = value - 1;
//         }
//     });

//     incrementButton.addEventListener('click', () => {
//         let value = parseInt(numberDisplay.textContent, 10);
//         if (!isNaN(value)) {
//             numberDisplay.textContent = value + 1;
//         }
//     });

//     colorPicker.addEventListener('input', () => {
//         numberDisplay.style.color = colorPicker.value;
//     });
// });
document.addEventListener('DOMContentLoaded', () => {
    const numberInput = document.getElementById('numberInput');
    const sendButton = document.getElementById('sendButton');
    const decrementButton = document.getElementById('decrementButton');
    const incrementButton = document.getElementById('incrementButton');
    const numberDisplay = document.getElementById('numberDisplay');
    const colorPicker = document.getElementById('colorPicker');

    sendButton.addEventListener('click', () => {
        const value = numberInput.value.trim();
        if (isNaN(value) || value === "") {
            alert("Пожалуйста введите число!!!!!!!!!!");
        } else {
            numberDisplay.textContent = parseFloat(value);
        }
    });

    decrementButton.addEventListener('click', () => {
        let value = parseFloat(numberDisplay.textContent);
        if (!isNaN(value)) {
            numberDisplay.textContent = value - 1;
        }
    });

    incrementButton.addEventListener('click', () => {
        let value = parseFloat(numberDisplay.textContent);
        if (!isNaN(value)) {
            numberDisplay.textContent = value + 1;
        }
    });

    colorPicker.addEventListener('input', () => {
        numberDisplay.style.color = colorPicker.value;
    });
});



    