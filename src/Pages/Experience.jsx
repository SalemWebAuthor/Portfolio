export default function Experience() {
  return (
    <div className="p-2">
      <h2 className="text-lg font-bold mb-4">Experience</h2>
      <div className="flex flex-col p-2">
        <div className="flex items-center justify-between">
          <h1 className="font-semibold text-base">JMV Support Inc.</h1>
          <p className="text-sm">(Aug 2025 - Present)</p>
        </div>
        <div className="mb-2">
          Full-Stack Web Developer |
          <span className="italic ml-1 text-sm">Part-Time</span>
        </div>
        <ul className="list-disc ml-5 space-y-1">
          <li>
            Designed and implemented intuitive UI/UX solutions with a strong
            focus on responsive and mobile-friendly interfaces.
          </li>
          <li>
            Developed dynamic web applications using React and Laravel, ensuring
            maintainable and scalable code.
          </li>
          <li>
            Optimized development workflow through Rapid Application Development
            and CI/CD pipelines.
          </li>
          <li>
            Built a fully functional Virtual Assistant website to enhance user
            engagement across devices.
          </li>
        </ul>
      </div>
      <div className="flex flex-col p-2">
        <div className="flex items-center justify-between">
          <h1 className="font-semibold text-base">
            iReply Back Office Services, Inc.
          </h1>
          <p className="text-sm">(Jan 2025 - May 2025)</p>
        </div>
        <div className="mb-2">
          Backend Developer |
          <span className="italic ml-1 text-sm">Internship</span>
        </div>
        <ul className="list-disc ml-5 space-y-1">
          <li>
            Created and optimized Entity-Relationship diagrams to model database
            structures efficiently.
          </li>
          <li>
            Assisted in quality assurance testing to ensure robust application
            functionality.
          </li>
          <li>
            Developed backend modules using Laravel, adhering to best practices
            and clean code principles.
          </li>
          <li>
            Contributed to the development of a Human Resource Information
            System, improving HR processes.
          </li>
        </ul>
      </div>
    </div>
  );
}
