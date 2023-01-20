// from https://leetcode.com/problems/course-schedule-ii/

// Runtime:  89 ms (beats 72.29%)
// Memory:  48.5 MB (beats 27.95%)

var canFinish = function(numCourses, prerequisites) {
	const dependsOnCourse = Array(numCourses).fill(0).map(()=>[])
	const inDegree = {}  // number of prerequisites each course has
	for(const [course, prereq] of prerequisites){
			dependsOnCourse[prereq].push(course) // list of courses that require the prereq
			inDegree[course] ? inDegree[course]++ : inDegree[course] = 1
	}

	const queue = []
	let coursesTaken = []
	for(let i = 0; i < numCourses; i++){
			if(inDegree[i]) continue
			queue.push(i) // course has no prereqs
			coursesTaken.push(i)
	}

	while(queue.length > 0){
			const removed = queue.shift()
			const dependsOnRemoved =  dependsOnCourse[removed]
			for (const course of dependsOnRemoved){
					inDegree[course]--
					if(inDegree[course] === 0){
							queue.push(course)
							coursesTaken.push(course)
					}
			}
	}
	return coursesTaken.length == numCourses ? coursesTaken : []  // return list of courses in order or an empty set
};