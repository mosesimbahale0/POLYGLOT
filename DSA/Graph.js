class Graph {
    constructor(numberOfVertices) {
      this.adjList = new Array(numberOfVertices).fill(null);
    }
  
    // Add an edge between two vertices (undirected graph)
    addEdge(v, w) {
      if (v < 0 || v >= this.adjList.length || w < 0 || w >= this.adjList.length) {
        throw new Error("Invalid vertex");
      }
      // Add w to v's adjacency list (undirected)
      this.adjList[v] = this.adjList[v] || []; // Initialize if empty
      this.adjList[v].push(w);
      // For undirected graphs, add v to w's adjacency list as well
      this.adjList[w] = this.adjList[w] || [];
      this.adjList[w].push(v);
    }
  
    // Print the graph (adjacency list representation)
    printGraph() {
      for (let v = 0; v < this.adjList.length; ++v) {
        if (this.adjList[v]) {
          console.log("Adjacency list of vertex", v);
          console.log("head ");
          for (let w of this.adjList[v]) {
            console.log("-> " + w);
          }
          console.log("null");
        }
      }
    }
  
    // Depth-First Search (DFS) traversal (recursive)
    dfs(v, visited) {
      visited[v] = true;
      console.log("Visited vertex", v);
      // Recur for all adjacent vertices
      for (let w of this.adjList[v] || []) {
        if (!visited[w]) {
          this.dfs(w, visited);
        }
      }
    }
  
    // Perform DFS traversal starting from a vertex
    dfsTraversal(v) {
      const visited = new Array(this.adjList.length).fill(false);
      this.dfs(v, visited);
    }
  
    // Breadth-First Search (BFS) traversal (using a queue)
    bfs(startingNode) {
      const queue = [];
      const visited = new Array(this.adjList.length).fill(false);
      queue.push(startingNode);
      visited[startingNode] = true;
  
      while (queue.length > 0) {
        const v = queue.shift();
        console.log("Visited vertex", v);
        // Add all unvisited adjacent vertices to the queue
        for (let w of this.adjList[v] || []) {
          if (!visited[w]) {
            visited[w] = true;
            queue.push(w);
          }
        }
      }
    }
  }
  
  // Usage example
  const graph = new Graph(6);
  graph.addEdge(0, 1);
  graph.addEdge(0, 4);
  graph.addEdge(1, 2);
  graph.addEdge(2, 3);
  graph.addEdge(3, 0);
  graph.addEdge(4, 5);
  console.log("Graph Adjacency List");
  graph.printGraph();
  
  console.log("DFS Traversal (starting from vertex 2)");
  graph.dfsTraversal(2);
  
  console.log("BFS Traversal (starting from vertex 0)");
  graph.bfs(0);
  