import React from "react";
import { Collapse, Checkbox } from "antd";

const { Panel } = Collapse;

function CheckBox(props) {
  const renderCheckboxLists = () =>
    props.list &&
    props.list.map((value, index) => (
      <React.Fragment key={index}>
        <Checkbox onChange />
        <span>{value.name}</span>
      </React.Fragment>
    ));

  return (
    <div>
      <Collapse defaultActiveKey={["1"]}>
        <Panel header="지역별" key="1">
          {renderCheckboxLists()}
        </Panel>
      </Collapse>
    </div>
  );
}

export default CheckBox;
