const edges1 = [
  [0, 1],
  [1, 2],
  [3, 4],
]; // expected 2
const edges2 = [
  [8, 5],
  [1, 2],
  [2, 4],
  [3, 5],
  [6, 7],
]; // expected 3

function numConnectedComponents(n, edges){
	const rank = Array(n+1).fill(1)  // rank is the measure of how many children each node has (including itself)
	const parent = Array(n+1)
	let numComponents = n
	for(let i = 0; i < parent.length; i++){
		parent[i] = i
	}

	for (const [node1, node2] of edges) {
    numComponents -= performUnion(node1, node2);
  }

	function performUnion(node1, node2){
		const node1Parent = findParent(node1)
		const node2Parent = findParent(node2)
		if(node1Parent === node2Parent) return 0  // no union performed, so number of connected components doesn't change

		if(rank[node2Parent] > rank[node1Parent]){  // component with more children adopts the smaller component
			parent[node1Parent] = node2Parent
			rank[node2Parent] += rank[node1Parent]
		}
		else{
			parent[node2Parent] = node1Parent
			rank[node1Parent] += rank[node2Parent]
		}
		return 1
	}

	function findParent(inputNode){
		let node = inputNode
		while(parent[node] !== node){
			const nodeParent = parent[node]
			parent[node] = parent[nodeParent] // path compression; set the parent of a node equal to its grandparent
			node = parent[node]
		}
		return node
	}
	
	return numComponents
	}


function numConnectedComponentsOriginal(edges) {
  const parent = Array(edges.length * 2 + 1).fill(-1);
  let maxVal = 0;

  for (const [node1, node2] of edges) {
    maxVal = Math.max(maxVal, node1, node2);
    performUnion(node1, node2);
  }

	function performUnion(node1, node2){
		const node1Parent = findParent(node1)
		const node2Parent = findParent(node2)
		while(node2Parent !== node2){
			const temp = parent[node2]
			parent[node2] = node1Parent
			node2 = temp
		}
		parent[node2] = node1Parent
	}

	function findParent(node) {
		if (parent[node] == -1) parent[node] = node;
		while (parent[node] != node) {
			node = parent[node];
		}
		return node;
	}

	let componentParents = new Set()
	for(let i = 1; i <= maxVal; i++){
		componentParents.add(parent[i])
	}
	console.log(parent)
	return componentParents.size
}

console.log(numConnectedComponents(8,edges2))