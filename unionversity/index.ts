import courses from './courses';
import studyGroups from './studyGroups';

type Course = {
    id: number;
    studyGroupId: number;
    title: string;
    keywords: string[];
    eventType: string;
}

type StudyGroup = {
    id: number,
    courseId: number,
    title: string,
    keywords: string[],
    eventType: string
}

type SearchEventsOptions = {
    query: string | number,
    eventType: 'courses' | 'groups'
}

function searchEvents(options: SearchEventsOptions) {
    const events: (Course | StudyGroup)[] = options.eventType === 'courses' ? courses : studyGroups;

    events.filter((event: Course | StudyGroup) => {
        if(typeof options.query === 'number') {
            return options.query === event.id;
        }
        if(typeof options.query === 'string') {
            return event.keywords.includes(options.query);
        }
    })
    return events;
}


const searchResult = searchEvents({query: 'art', eventType: 'courses'});
console.log(searchResult);

let enrolledEvents: (Course | StudyGroup)[] = [];

function enroll(event: Course | StudyGroup) {
    enrolledEvents = [...enrolledEvents, event];
}

function enrollAll(events: (Course | StudyGroup)[]) {
    for(let i = 0; i < events.length; i++) {
        enrolledEvents = [...enrolledEvents, events[i]];
    }
}

function dropCourse() {
    enrolledEvents.pop();
}

function printCourseTitles() {
    for(let i = 0; i < enrolledEvents.length; i++) {
        console.log(enrolledEvents[i].title);
    }
}

enrollAll(searchResult);
dropCourse();
console.log(enrolledEvents);
printCourseTitles();
