// console.log("Hello Sir");
const form = document.querySelector('form');
// console.log(form);
form.addEventListener('submit', function (e) {
    e.preventDefault();
    // console.log(e);
    // console.log(e.target);
    const height = parseInt(document.querySelector('#heightinput').value);
    // console.log(height);

    const weight = parseInt(document.querySelector('#weightinput').value);
    // console.log(weight);

    const results = document.querySelector('#result');
    // console.log(results);

    if (height === '' || height <= 0 || isNaN(height)) {
        results.textContent = `Please give me valid height ${height}`;
    } else if (weight === '' || weight <= 0 || isNaN(weight)) {
        results.textContent = `Please give me valid weight ${weight}`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.textContent = `Your BMI is ${bmi}`;
    }
});
