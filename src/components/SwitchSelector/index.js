import React from "react";
// import SwitchSelector from "react-switch-selector";

function PlanSwitchSelector() {
  // const options = [
  //   {
  //     label: "Foo",
  //     value: {
  //       foo: true,
  //     },
  //     selectedBackgroundColor: "#0097e6",
  //   },
  //   {
  //     label: "Bar",
  //     value: "bar",
  //     selectedBackgroundColor: "#fbc531",
  //   },
  // ];

  // const onChange = (newValue) => {
  //   console.log(newValue);
  // };

  // const initialSelectedIndex = options.findIndex(
  //   ({ value }) => value === "bar"
  // );

  return (
    <div className="your-required-wrapper" style={{ width: 100, height: 30 }}>
      {/* <SwitchSelector
        onChange={onChange}
        options={options}
        initialSelectedIndex={initialSelectedIndex}
        backgroundColor={"#353b48"}
        fontColor={"#f5f6fa"}
      /> */}
    </div>
  );
}

export default PlanSwitchSelector;
