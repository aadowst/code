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

function numConnectedComponents(edges) {
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

console.log(numConnectedComponents(edges2))