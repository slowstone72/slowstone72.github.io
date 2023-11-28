/* Callum Fisher - cf.fisher.bham@gmail.com
Edited: 2.1.2023 */

const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];


function suffix_of (i) {
    var j = i % 10, k = i % 100;
    if (j == 1 && k != 11) return i + 'st';
    if (j == 2 && k != 12) return i + 'nd';
    if (j == 3 && k != 13) return i + 'rd';
    return i + 'th';
}


window.onload = () => {

    var date = new Date();
    var hour = date.getHours();
    var welcome = document.getElementById('welcome');
    var subtitle = document.getElementById('subtitle');
    welcome.innerHTML = `${date.getDay() == 5 ? 'Happy ' + days[date.getDay()] + '!' : `Good ${hour >= 12 ? hour >= 17 && hour < 20 ? 'evening' : 'afternoon' : 'morning'}`}`;
    subtitle.innerHTML = fetchEvents(date.getDate(), date.getMonth() + 1, "single");
    /* var infoboard = document.getElementById('infoboard');
    infoboard.style.display = 'block';
    infoboard.innerHTML = `<center>(i) Notice Board (i)</center><hr>Today is ${days[date.getDay()]}, ${suffix_of(date.getDate())} of ${months[date.getMonth()]} ${date.getFullYear()}<br>`;
    
    
    fetchEvents(date.getDate(), date.getMonth() + 1).forEach((item, index, array) => {
        infoboard.innerHTML += item + '<br>';
        if (index == array.length - 1) {
            //infoboard.innerHTML = infoboard.innerHTML.split(0, infoboard.innerHTML.length - 4);
        }
    }); */

    // Thanks: https://stackoverflow.com/questions/18983138/

    if (hour < 7 && hour > 0) document.getElementById('intro').innerHTML += `<br><br>ps: go to bed(?).`;

}