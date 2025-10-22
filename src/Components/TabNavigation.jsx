import { useState } from "react";
import Experience from "../Pages/Experience";
import Projects from "../Pages/Projects";
import Skills from "../Pages/Skills";

// Map each tab name to its component
const tabs = [
  { name: "Experience", component: <Experience /> },
  { name: "Projects", component: <Projects /> },
  { name: "Skills", component: <Skills /> },
];

export default function TabNavigation() {
  const [activeTab, setActiveTab] = useState(tabs[0].name);

  const activeComponent = tabs.find((tab) => tab.name === activeTab)?.component;

  return (
    <div className="m-2">
      {/* Tab Buttons */}
      <div className="flex gap-1 mx-4 -my-6">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`border border-gray-300 p-2 rounded-md font-bold text-sm transition duration-300 hover:bg-black hover:text-white hover:translate-y-1 ${
              activeTab === tab.name
                ? "translate-y-1 scale-105 bg-black text-white"
                : "bg-white text-black"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div
        key={activeTab}
        className="mt-10 borderrounded-2xl p-4 bg-white
             transition-all duration-300 ease-in-out
             transform opacity-0 translate-y-2
             animate-fade-in"
      >
        {activeComponent}
      </div>
    </div>
  );
}
