// https://leetcode.com/problems/course-schedule

// Runtime:  100 ms (beats 57.18%)
// Memory:  48.4 MB (beats 31.78%)
// Strategy:  Kahn's Algorithm

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
	const dependsOnCourse = Array(numCourses).fill(0).map(()=>[])
	const inDegree = {}
	for(const [course, prereq] of prerequisites){
			dependsOnCourse[prereq].push(course)
			inDegree[course] ? inDegree[course]++ : inDegree[course] = 1
	}

	const queue = []
	let coursesTaken = 0
	for(let i = 0; i < numCourses; i++){
			if(inDegree[i]) continue
			queue.push(i)
			coursesTaken++
	}

	while(queue.length > 0){
			const removed = queue.shift()
			const dependsOnRemoved =  dependsOnCourse[removed]
			for (const course of dependsOnRemoved){
					inDegree[course]--
					if(inDegree[course] === 0){
							queue.push(course)
							coursesTaken++
					}
			}
	}


	return coursesTaken == numCourses
};

// Runtime:  94 ms (beats 61.55%)
// Memory:  49.9 MB (beats 17.13)
// Strategy:  make an array that stores all the courses that depend on index course and a Map that lists all prerequisites for the courses that have them. If a course doesn't have any prereqs, it is added to the queue (i.e. taken). The courses that depend on that course are accessed from the array and the 'taken' course is then removed lists of prereqs. If any of these have no prereqs left, they are added to the queue

/**
 * @param {number} 
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinishMap = function(numCourses, prerequisites) {
	const dependsOnCourse = Array(numCourses).fill(0).map(()=>[]) // courses in inner arrays depend on course at index
	const prerequisitesForCourse = new Map() // key = course, value = its prereqs
	let coursesTaken = 0
	for( const [course, prereq] of prerequisites){
			dependsOnCourse[prereq].push(course)
			if(!prerequisitesForCourse.has(course)){
					const newSet = new Set()
					prerequisitesForCourse.set(course, newSet)
			}
					const existingSet = prerequisitesForCourse.get(course)
					existingSet.add(prereq)
	}
	const queue = []
	for(let i = 0; i < numCourses; i++){
			if(!prerequisitesForCourse.has(i)){
			queue.push(i)
			coursesTaken++
			} 
	}

	while(queue.length){
			const removed = queue.shift()
			const dependOnRemoved = dependsOnCourse[removed]
			for(const course of dependOnRemoved){
					const existingSet = prerequisitesForCourse.get(course)
					existingSet.delete(removed)
					if(existingSet.size === 0) {
					coursesTaken++
					queue.push(course)
					}
			}
	}
	return coursesTaken === numCourses
};

// Runtime:  300 ms (beats 7.31%)
// Memory: 44.9 MB (beats 96.81%)

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinishOriginal = function(numCourses, prerequisites) {
	const dependencies = Array(numCourses).fill(0).map(()=> new Set())
	for (const [course, prereq] of prerequisites){
			dependencies[course].add(prereq)
	}
	const queue = []
	const visited = new Set()
	for(let i = 0; i < dependencies.length; i++){
			if(dependencies[i].size === 0) {
					visited.add(i)
					queue.push(i)
			}
	}
	while(queue.length){
			const course = queue.shift()
			for(let i = 0; i < dependencies.length; i++){
					if(visited.has(i)) continue
					if(dependencies[i].has(course)) dependencies[i].delete(course)
					if(dependencies[i].size ===0){
							visited.add(i)
							queue.push(i)
					}
			}
	}
	return visited.size === numCourses ? true : false
};