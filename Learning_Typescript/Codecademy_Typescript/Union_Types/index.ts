import courses from "./courses";
import studyGroups from "./studyGroups";

type Course = {
  id: number;
  studyGroupId: number;
  title: string;
  keywords: string[];
  eventType: string;
};

type StudyGroup = {
  id: number;
  courseId: number;
  title: string;
  keywords: string[];
  eventType: string;
};

type SearchEventsOptions = {
  query: string | number;
  eventType: "courses" | "groups";
};

function searchEvents(options: SearchEventsOptions) {
  let events;
  if (options.eventType === "courses") {
    events = courses;
  } else {
    events = studyGroups;
  }
  let filteredEvents: (Course | StudyGroup)[] = events.filter(
    (event: Course | StudyGroup) => {
            if (typeof options.query === "number") {
        return options.query === event.id;
      }
      if (typeof options.query === "string") {
        return event.keywords.includes(options.query);
      }
    }
  );
  return filteredEvents
}

let enrolledEvents : (Course | StudyGroup)[] = []

function enroll(events:(Course | StudyGroup)[]){
    events.forEach(event => enrolledEvents.push(event))
  }

let searchResults = searchEvents({query: "art", eventType: "courses"})
console.log(searchResults)
enroll(searchResults)
console.log(enrolledEvents)
