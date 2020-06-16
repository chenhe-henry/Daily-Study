class Graph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {};
  }
  addVertex(node) {
    this.adjacentList[node] = [];
    this.numberOfNodes++;
    return this;
  }
  addEdge(node1, node2) {
    this.adjacentList[node1].push(node2);
    this.adjacentList[node2].push(node1);
    return this;
  }
}

const myGraph = new Graph();
console.log(myGraph.addVertex("0"));
console.log(myGraph.addVertex("1"));
console.log(myGraph.addVertex("2"));
console.log(myGraph.addVertex("3"));
console.log(myGraph.addVertex("4"));
console.log(myGraph.addVertex("5"));
console.log(myGraph.addVertex("6"));
console.log(myGraph.addEdge("0", "1"));
console.log(myGraph.addEdge("1", "2"));
console.log(myGraph.addEdge("2", "3"));
console.log(myGraph.addEdge("3", "4"));
