// https://leetcode.com/problems/redundant-connection/

var edges1 = [[1,2],[1,3],[2,3]] // expected:  [2,3]
var edges2 = [[1,2],[2,3],[3,4],[1,4],[1,5]]  // expected:  [1,4]
var edges3 = [[1,5],[3,4],[3,5],[4,5],[2,4]]  // expected: [4,5]




// Runtime:  71 ms (beats 90.94%)
// Memory:  44.5 MB (beats 72.80%)
// Comment:  improved strategy described in:  https://www.youtube.com/watch?v=Cb6p18e9c8s

var findRedundantConnection = function(edges) {
    let parent = Array(edges.length)
    for(let i = 0; i <= edges.length; i++){
        parent[i] = i
    }

    for(const [node1, node2] of edges){
			const node1Parent = findParent(node1)
			const node2Parent = findParent(node2)
			if(node1Parent == node2Parent) return [node1, node2]
			performUnion(node1Parent, node2Parent)
	}
	return

    function findParent(node){
        while(parent[node] != node){
            node = parent[node]
        }
        return node
    }

    function performUnion(node1Parent, node2Parent){
			parent[node2Parent] = node1Parent
}
};

console.log(findRedundantConnection(edges3))

// 	BELOW ARE ATTEMPTS THAT LED TO PARTIAL SUCCESS.

var findRedundantConnectionAttempt2 = function(edges) {
    
	function Node(val, neighbors){
		this.val = val === undefined ? 0 : val;
		this.neighbors = neighbors === undefined ? [] : neighbors
	}

	const nodes = new Map()

	for(const [node1, node2] of edges){
		if(!nodes.has(node1)){
			const newNode1 = new Node(node1)
			nodes.set(node1, newNode1)
		}
		if(!nodes.has(node2)){
			const newNode2 = new Node(node2)
			nodes.set(node2, newNode2)
		}
			const existingNode1 = nodes.get(node1)
			existingNode1.neighbors.push(nodes.get(node2))  // just push node2?

			const existingNode2 = nodes.get(node2)
			existingNode2.neighbors.push(nodes.get(node1))  // just push node1?
	}

	const visited = new Set()
	let problematicNode = 0;
	function traversal(node, last){
					console.log(node.val, last?.val, visited.has(node))
		if(problematicNode !== 0) return
		if(visited.has(node)) return true
		visited.add(node)
		for(const neighbor of node.neighbors){
							if(neighbor == last) continue
							if(problematicNode !== 0) continue
							// console.log(node.val, neighbor.val)
			const loopExists = traversal(neighbor, node)
			if(loopExists) {
				problematicNode = node.val
									console.log("problematic node is", problematicNode)
				break
			}
		}
		return false
	}
	const firstNode = nodes.get(edges[0][0])
	traversal(firstNode, undefined)
	return
};


// Comment:  code works if nodes should form a chain w/o branching

var findRedundantConnectionNoBranching = function(edges){
	let seen = new Set()
	for(let i = 0; i < edges.length; i++){
		if(seen.has(edges[i][0])) seen.delete(edges[i][0])
		else seen.add(edges[i][0])
		if(seen.has(edges[i][1])) seen.delete(edges[i][1])
		else seen.add(edges[i][1])
	}
	if (seen.size === 0) return edges[edges.length - 1]
	for(let j = edges.length - 1; j >=0; j--){
		if(seen.has(edges[j][0]) && seen.has(edges[j][1])) continue
		if(!seen.has(edges[j][0]) && !seen.has(edges[j][1])) continue
		return edges[j]
	}
}
