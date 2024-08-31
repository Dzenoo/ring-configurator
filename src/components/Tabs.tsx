import React from "react";
import useStore from "@/store";

enum TabOpen {
  "ring-color" = "ring-color",
  "accent-color" = "accent-color",
  "gem-color" = "gem-color",
}

const colorOptions = {
  [TabOpen["ring-color"]]: [
    { image: "/images/ring_4.png", color: "#FFD700" },
    { image: "/images/ring_5.png", color: "#C0C0C0" },
    { image: "/images/ring_6.png", color: "#fbc5ff" },
  ],
  [TabOpen["gem-color"]]: [
    { image: "/images/gem_1.png", color: "#1E90FF" },
    { image: "/images/gem_2.png", color: "#DC143C" },
    { image: "/images/gem_3.png", color: "#32CD32" },
  ],
  [TabOpen["accent-color"]]: [
    { image: "/images/accent_7.png", color: "#ADD8E6" },
    { image: "/images/accent_8.png", color: "#FF69B4" },
    { image: "/images/accent_9.png", color: "#FFD700" },
  ],
};

const CustomButton: React.FC<{ image: string; tabOpen: TabOpen }> = ({
  image,
  tabOpen,
}) => {
  const { tabOpen: currentTabOpen, setTabOpen } = useStore();

  const handleClick = () => {
    setTabOpen(currentTabOpen === tabOpen ? "" : tabOpen);
  };

  return (
    <button onClick={handleClick}>
      <img
        className="w-[5em] h-[5em] rounded-xl transition-all shadow-md hover:scale-105"
        src={image}
        alt="image"
      />
    </button>
  );
};

const Color: React.FC<{ image: string; tabOpen: TabOpen }> = ({
  image,
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
    <div className="">
      <div className="flex gap-5 items-center">
        <div>
          <CustomButton image={image} tabOpen={tabOpen} />
        </div>
        <div className="relative">
          {currentTabOpen === tabOpen && (
            <div className="flex gap-1 animate-slide-fade-in">
              {options.map((option, index) => (
                <button
                  className="p-1 rounded-xl bg-white/90 shadow-lg transition transform"
                  key={index}
                  onClick={() => handleOptionClick(option.color)}
                >
                  <img
                    className="transition-all hover:scale-110"
                    src={option.image}
                    alt={option.color}
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Tabs: React.FC = () => {
  const Colors = [
    {
      image: "/images/ring.png",
      id: 1,
      title: "Ring",
      tabOpen: TabOpen["ring-color"],
    },
    {
      image: "/images/gem.png",
      id: 2,
      title: "Gem",
      tabOpen: TabOpen["gem-color"],
    },
    {
      image: "/images/accent.png",
      id: 3,
      title: "Accent",
      tabOpen: TabOpen["accent-color"],
    },
  ];

  return (
    <div className="h-screen justify-center flex gap-10 flex-col overflow-hidden p-8">
      {Colors.map((color) => (
        <Color key={color.id} image={color.image} tabOpen={color.tabOpen} />
      ))}
    </div>
  );
};

export default Tabs;
