/* Callum Fisher - cf.fisher.bham@gmail.com
Edited: 2.1.2023 */

const events = [
    { 'start': '12 23', 'end': '12 30', 'msg': '<img src="media/santahat.png"> Merry Christmas!' },
    { 'start': '10 31', 'end': '11 1', 'msg': 'Happy Halloween!'},
    { 'start': '11 5', 'end': '11 6', 'msg': 'Happy bonfire night!' },
    { 'start': '11 11', 'end': '11 11', 'msg': 'Today is Remembrance Day' },
    { 'start': '1 1', 'end': '1 10', 'msg': 'Happy new year! Make it a good one.'},
    { 'start': '12 31', 'end': '12 31', 'msg': 'I hope you brought fireworks!'},
    { 'start': '1 1', 'end': '1 31', 'msg': 'Try listening to "January" by Pilot!'}
];

const messages = [
    "Try listening to \"Escape\" by Rupert Holmes!",
    "Try listening to \"Live and Let Die by Wings!"
]

function fetchEvents(date, month, mode) {
    // Set the default value of mode to "all"
    mode = mode || "all";
  
    var results = [];
  
    events.forEach((event) => {
        var today = new Date(month + " " + date + " " + new Date().getFullYear()).setMonth(month - 1);
        var eventStart = new Date(event.start + " " + new Date().getFullYear());
        var eventEnd = new Date(event.end + " " + new Date().getFullYear());
        if (eventEnd > today && today >= eventStart) results.push(event.msg);
    });
    
    if (mode === "all") {
        // Return all events
        if (results.length > 0) {
            return results;
        } else {
            return [messages[messages.length * Math.random() | 0]];
        }
    } else {
        // Return a single event
        return [results[results.length * Math.random() | 0] || messages[messages.length * Math.random() | 0]];
    }
}