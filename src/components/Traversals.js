import React, { useState, useEffect } from "react";
import "../css/traversal.css";

// Pre-order traversal
function preOrderTraversal(root, result = []) {
  if (!root) {
    return [];
  }

  result.push(root.data);
  preOrderTraversal(root.left, result);
  preOrderTraversal(root.right, result);

  return result;
}

// Post-order traversal
function postOrderTraversal(root, result = []) {
  if (!root) {
    return [];
  }

  postOrderTraversal(root.left, result);
  postOrderTraversal(root.right, result);
  result.push(root.data);

  return result;
}

// In-order traversal
function inOrderTraversal(root, result = []) {
  if (!root) {
    return [];
  }

  inOrderTraversal(root.left, result);
  result.push(root.data);
  inOrderTraversal(root.right, result);

  return result;
}

export default function Traversals({ treeObject, type, mode }) {
  const [traversalResult, setTraversalResult] = useState([]);

  useEffect(() => {
    let result = [];
    switch (type) {
      case 1:
        result = preOrderTraversal(treeObject);
        break;
      case 2:
        result = postOrderTraversal(treeObject);
        break;
      case 3:
        result = inOrderTraversal(treeObject);
        break;
      default:
        break;
    }
    setTraversalResult(result);
  }, [treeObject, type]);

  return (
    <div
      className={`base text-center px-2 py-2 my-3 ${
        mode === "white" ? "traversal-light" : "traversal-dark"
      }`}
    >
      <div className="h3 text-start  fw-light fst-italic">
        Traversal Type:{" "}
        {type === 1 ? "Pre-order" : type === 2 ? "Post-order" : "In-order"}-
      </div>
      <div className="display-5 fw-bold">
        Traversal Result:{" "}
        <span className="fw-light fst-italic">
          {traversalResult.join(", ")}
        </span>
      </div>
    </div>
  );
}
