import { Icon } from "@iconify/react";

export default function Skills() {
  const frontendSkills = [
    { icon: "vscode-icons:file-type-html", name: "HTML5" },
    { icon: "vscode-icons:file-type-css", name: "CSS3" },
    { icon: "vscode-icons:file-type-js-official", name: "JavaScript" },
    { icon: "logos:react", name: "React" },
    { icon: "logos:tailwindcss-icon", name: "Tailwind CSS" },
  ];

  const backendSkills = [
    { icon: "logos:php", name: "PHP" },
    { icon: "logos:laravel", name: "Laravel" },
    { icon: "logos:mysql", name: "MySQL" },
  ];

  const toolsSkills = [
    { icon: "logos:git-icon", name: "Git" },
    { icon: "logos:github-icon", name: "Github" },
  ];

  const designSkills = [{ icon: "logos:figma", name: "Figma" }];

  const renderSkills = (skillsArray) =>
    skillsArray.map(({ icon, name }) => (
      <div key={name} className="flex flex-col items-center gap-1">
        <Icon icon={icon} width="40" height="40" />
        <span className="text-sm font-regular mt-1">{name}</span>
      </div>
    ));

  return (
    <div className="p-2">
      <h2 className="text-lg font-bold mb-4">Tech Stack</h2>

      <div className="mb-6">
        <div className="font-semibold mb-2">Frontend</div>
        <div className="flex flex-wrap gap-6">
          {renderSkills(frontendSkills)}
        </div>
      </div>

      <div className="mb-6">
        <div className="font-semibold mb-2">Backend</div>
        <div className="flex flex-wrap gap-6">
          {renderSkills(backendSkills)}
        </div>
      </div>

      <div className="mb-6">
        <div className="font-semibold mb-2">Source / Version Control</div>
        <div className="flex flex-wrap gap-6">{renderSkills(toolsSkills)}</div>
      </div>

      <div className="mb-6">
        <div className="font-semibold mb-2">UI / UX Design</div>
        <div className="flex flex-wrap gap-6">{renderSkills(designSkills)}</div>
      </div>
    </div>
  );
}
