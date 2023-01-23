const edges1 = [[0,1], [0,2], [0,3], [1,4]]  // n = 5, expected output:  true
const edges2 = [[0,1], [1,2], [2,3], [1,3], [1,4]] // n = 5; expected output: false

// comment:  perform DFS and check to see if all nodes are visited and the number of edges is valid for a tree (# nodes - 1, if there are no cycles)
function graphValidTreeDFSRefactored(n, edges){
	let graph = Array(n).fill(0).map(() => [])
	for(const [node1, node2] of edges){
		graph[node1].push(node2)
		graph[node2].push(node1)
	}
	const visited = new Set()

	function dfs(root){
		visited.add(root)
		for(const node of graph[root]){
			if(visited.has(node)) continue
			dfs(node)
		}
	}
	dfs(0)
	return visited.size == n  // check to see if all nodes are visited just once
}

// comment:  perform DFS and make sure each node hasn't been visited previously
function graphValidTreeDFS(n, edges){
	let graph = Array(n).fill(0).map(() => [])
	for(const [node1, node2] of edges){
		graph[node1].push(node2)
		graph[node2].push(node1)
	}
	const visited = new Set()

	function dfs(root, parent){
		visited.add(root)
		for(const node of graph[root]){
			if(node == parent) continue
			if(visited.has(node)) return false
			if(!dfs(node, root)) return false
		}
		return true
	}

	return dfs(0, -1) && visited.size == n  // check to see if all nodes are visited just once
}

function graphValidTreeUnionFind(n, edges){
	let parent = Array(n)
	for(let i = 0; i < n; i++){
		parent[i] = i
	}

	let rank = Array(n).fill(1)

	for(const [node1, node2] of edges){
		const node1Parent = findParent(node1)
		const node2Parent = findParent(node2)
		if(node1Parent === node2Parent) return false
		performUnion(node1Parent, node2Parent)
	}

	function findParent(node){
		while(parent[node] !== node){
			node = parent[node]
		}
		return node
	}

	function performUnion(node1Parent, node2Parent){
		if(rank[node2Parent] > rank[node1Parent]) {
			parent[node1Parent] = node2Parent
			rank[node2Parent] += rank[node1Parent]
		}else {
			parent[node2Parent] = node1Parent
			rank[node1Parent] += rank[node2Parent]
		}
	}
	return true
}

console.log(graphValidTreeDFSRefactored(5, edges1))