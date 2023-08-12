import React from "react";
import BinaryTreeSVG from "./BinaryTreeSVG";
import Traversals from "./Traversals";

export default function Tree({ text, type, mode }) {
  class BinaryTreeNode {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }

    leftUpdate(child) {
      this.left = child;
    }

    rightUpdate(child) {
      this.right = child;
    }
  }

  function buildTree(data) {
    let fruits = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i] === "[" || data[i] === "]") continue;
      if (data[i] !== ",") {
        if (isNaN(parseInt(data[i]))) {
          while (data[i] !== ",") {
            i++;
          }
          fruits.push(null);
        } else {
          let val = 0;
          while (i < data.length && !isNaN(parseInt(data[i]))) {
            val = val * 10 + parseInt(data[i]);
            i++;
          }
          fruits.push(parseInt(val));
        }
      }
    }

    console.log(fruits);

    const nodes = Array(fruits.length);
    for (let i = 0; i < fruits.length; ++i) {
      if (!isNaN(fruits[i])) {
        const newNode = new BinaryTreeNode(fruits[i]);
        nodes[i] = newNode;
      }
    }

    for (let i = 0; i < fruits.length; ++i) {
      if (nodes[i].data === null) nodes[i] = null;
    }
    console.log(nodes);

    for (let i = 0; i < fruits.length; ++i) {
      if (2 * i + 1 < fruits.length) {
        nodes[i].leftUpdate(nodes[2 * i + 1]);
      }

      if (2 * i + 2 < fruits.length) {
        nodes[i].rightUpdate(nodes[2 * i + 2]);
      }
    }

    return nodes[0];
  }

  const root = buildTree(text);

  return (
    <>
      {console.log(root)}
      {root && <Traversals treeObject={root} type={type} mode={mode} />}
      {root && <BinaryTreeSVG treeData={root}  mode={mode}/>}
    </>
  );
}
