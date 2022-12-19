"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const courses_1 = require("./courses");
const studyGroups_1 = require("./studyGroups");
function searchEvents(options) {
    const events = options.eventType === 'courses' ? courses_1.default : studyGroups_1.default;
    events.filter((event) => {
        if (typeof options.query === 'number') {
            return options.query === event.id;
        }
        if (typeof options.query === 'string') {
            return event.keywords.includes(options.query);
        }
    });
    return events;
}
const searchResult = searchEvents({ query: 'art', eventType: 'courses' });
console.log(searchResult);
let enrolledEvents = [];
function enroll(event) {
    enrolledEvents = [...enrolledEvents, event];
}
function enrollAll(events) {
    for (let i = 0; i < events.length; i++) {
        enrolledEvents = [...enrolledEvents, events[i]];
    }
}
function dropCourse() {
    enrolledEvents.pop();
}
function printCourseTitles() {
    for (let i = 0; i < enrolledEvents.length; i++) {
        console.log(enrolledEvents[i].title);
    }
}
enrollAll(searchResult);
dropCourse();
console.log(enrolledEvents);
printCourseTitles();
