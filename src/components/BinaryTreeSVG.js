import React, { useEffect } from "react";
import Tree from "react-d3-tree";
import "../css/BinaryTreeSVG.css";

const convertToObjectFormat = (node) => {
  if (!node) return null;

  const convertedNode = {
    name: node.data,
    children: [],
  };

  if (node.left) {
    convertedNode.children.push(convertToObjectFormat(node.left));
  }

  if (node.right) {
    convertedNode.children.push(convertToObjectFormat(node.right));
  }

  return convertedNode;
};

const BinaryTreeSVG = ({ treeData, mode }) => {
  console.log("Inside BTSVG");
  console.log(treeData);
  const transformedTreeData = convertToObjectFormat(treeData);
  console.log(transformedTreeData);
  // useEffect(() => {

  //   // setTimeout(() => {
  //     const elt = document.querySelector("#bse-cont");
  //     if (mode !== "white") {
  //       elt.classList.add(".base-dark");
  //       elt.classList.remove(".base-light");
  //     } else {
  //       elt.classList.add(".base-light");
  //       elt.classList.remove(".base-dark");
  //     }
  //   // }, 0);
  // }, [])

  return (
    <>
      <div
        id="bse-cont"
        className={`base-container base-${mode === "white" ? "light" : "dark"}`}
      >
        <span className="watermark">Interact with the Tree here</span>
        <div style={{ width: "100%", height: "600px" }}>
          <Tree
            data={transformedTreeData}
            orientation="vertical"
            translate={{ x: 550, y: 100 }}
          />
        </div>
      </div>
    </>
  );
};

export default BinaryTreeSVG;
