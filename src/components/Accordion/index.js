import React from "react";
import baseColors from "@/constant";
import { UpOutlined } from "@ant-design/icons";
import { Collapse } from "antd";


const text = `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam erat
      risus, lacinia sit amet finibus sed, sagittis sed ligula. Praesent
      hendrerit cursus vestibulum.
`;
const getItems = (panelStyle) => [
  {
    key: "1",
    label: "What age group is KidWiz designed for?",
    children: <p>{text}</p>,
    style: panelStyle,
  },
  {
    key: "2",
    label: "How does the AI-Powered Personalized Learning Companion work?",
    children: <p>{text}</p>,
    style: panelStyle,
  },
  {
    key: "3",
    label: " What subjects and skills does KidWiz cover?",
    children: <p>{text}</p>,
    style: panelStyle,
  },
  {
    key: "4",
    label: " Can I use KidWiz alongside other early childhood education programs?",
    children: <p>{text}</p>,
    style: panelStyle,
  },
  {
    key: "5",
    label: " Is KidWiz compatible with different devices?",
    children: <p>{text}</p>,
    style: panelStyle,
  },
  {
    key: "6",
    label: "How do I choose the right subscription plan for my family?",
    children: <p>{text}</p>,
    style: panelStyle,
  },
  {
    key: "7",
    label: " How do I cancel or change my subscription plan?",
    children: <p>{text}</p>,
    style: panelStyle,
  },
  {
    key: "8",
    label: "Is my child's data safe with KidWiz?",
    children: <p>{text}</p>,
    style: panelStyle,
  },
  {
    key: "9",
    label: "How can I get in touch with KidWiz for additional support or questions?",
    children: <p>{text}</p>,
    style: panelStyle,
  },
];

function Accordion() {
  const panelStyle = {
    borderRadius: 0,
    border: `1px solid ${baseColors.White}`,
    
  };
  return (
    <Collapse
      bordered={false}
      defaultActiveKey={["1"]}
      expandIcon={({ isActive }) => <UpOutlined rotate={isActive ? 180 : 0} />}
      style={{
        backgroundColor: baseColors.GreenColor,
        borderRadius: 0,
      }}
      color={baseColors.White}
      items={getItems(panelStyle)}
    />
  );
}

export default Accordion;
