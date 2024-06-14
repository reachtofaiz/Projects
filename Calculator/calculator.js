
    let string = "";
    let buttons = document.querySelectorAll('.calculator button');

    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            const button = e.target.textContent;
            if (button === '=') {
                string = eval(string)
                document.querySelector('.input-text').value = string;
            }else if (button === 'AC') {
                string = "";
            } else if (button === 'DEL') {
                string = string.substring(0, string.length-1)
                document.querySelector('.input-text').value = string;
            } 
            else {
                string = string + button;
            }

            document.querySelector('.input-text').value = string;
        });
    });
