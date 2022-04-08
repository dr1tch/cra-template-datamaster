import React from "react";
import { Transfer, Tree } from "antd";
// import { IMenuTree } from "@seeds/menus";
import { ITreeData } from "@seeds/menus";

// Customize Table Transfer
const isChecked = (selectedKeys, eventKey) =>
  selectedKeys.indexOf(eventKey) !== -1;

const generateTree = (treeNodes = [], checkedKeys = []) =>
  treeNodes.map(({ children, ...props }) => ({
    ...props,
    disabled: checkedKeys.includes(props.key),
    children: generateTree(children, checkedKeys),
  }));

const TreeTransfer = ({
  data,
  targetKeys,
  onChange,
  titles,
  isDisabled,
  ...restProps
}) => {
  const transferDataSource = [];
  function flatten(list = []) {
    list.forEach((item) => {
      transferDataSource.push(item);
      flatten(item.children);
    });
  }
  flatten(data);
  return (
    <Transfer
      {...restProps}
      targetKeys={targetKeys}
      dataSource={transferDataSource}
      onChange={onChange}
      //   className="tree-transfer"
      render={(item) => item.title}
      oneWay
      showSelectAll={true}
      titles={titles}
      disabled={isDisabled}
    >
      {({ direction, onItemSelect, selectedKeys }) => {
        if (direction === "left") {
          const checkedKeys = [...selectedKeys, ...targetKeys];
          return (
            <Tree
              disabled={isDisabled}
              blockNode
              checkable
              checkStrictly
              defaultExpandAll
              checkedKeys={checkedKeys}
              treeData={generateTree(data, targetKeys)}
              onCheck={(_, { node: { key } }) => {
                onItemSelect(key, !isChecked(checkedKeys, key));
              }}
              onSelect={(_, { node: { key } }) => {
                onItemSelect(key, !isChecked(checkedKeys, key));
              }}
            />
          );
        }
      }}
    </Transfer>
  );
};

export default TreeTransfer;
