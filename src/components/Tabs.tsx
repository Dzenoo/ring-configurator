import React from "react";
import useStore from "@/store";

enum TabOpen {
  "ring-color" = "ring-color",
  "accent-color" = "accent-color",
  "gem-color" = "gem-color",
}

const colorOptions = {
  [TabOpen["ring-color"]]: ["#FFD700", "#C0C0C0", "#E5E4E2"],
  [TabOpen["gem-color"]]: ["#1E90FF", "#DC143C", "#32CD32"],
  [TabOpen["accent-color"]]: ["#ADD8E6", "#FF69B4", "#FFD700"],
};

const CustomButton: React.FC<{ title: string; tabOpen: TabOpen }> = ({
  title,
  tabOpen,
}) => {
  const { tabOpen: currentTabOpen, setTabOpen } = useStore();

  const handleClick = () => {
    setTabOpen(currentTabOpen === tabOpen ? "" : tabOpen);
  };

  return <button onClick={handleClick}>{title}</button>;
};

const Color: React.FC<{ title: string; tabOpen: TabOpen }> = ({
  title,
  tabOpen,
}) => {
  const {
    tabOpen: currentTabOpen,
    setRingColor,
    setGemColor,
    setAccentColor,
  } = useStore();
  const options = colorOptions[tabOpen];

  const handleOptionClick = (option: string) => {
    switch (tabOpen) {
      case TabOpen["ring-color"]:
        setRingColor(option);
        break;
      case TabOpen["gem-color"]:
        setGemColor(option);
        break;
      case TabOpen["accent-color"]:
        setAccentColor(option);
        break;
    }
  };

  return (
    <div>
      <CustomButton title={title} tabOpen={tabOpen} />
      {currentTabOpen === tabOpen && (
        <div>
          {options.map((option, index) => (
            <button key={index} onClick={() => handleOptionClick(option)}>
              <h1>{option}</h1>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const Tabs: React.FC = () => {
  const Colors = [
    { id: 1, title: "Ring", tabOpen: TabOpen["ring-color"] },
    { id: 2, title: "Gem", tabOpen: TabOpen["gem-color"] },
    { id: 3, title: "Accent", tabOpen: TabOpen["accent-color"] },
  ];

  return (
    <div>
      {Colors.map((color) => (
        <Color key={color.id} title={color.title} tabOpen={color.tabOpen} />
      ))}
    </div>
  );
};

export default Tabs;
