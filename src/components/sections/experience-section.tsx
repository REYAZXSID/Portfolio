const experience = [
  {
    date: "2021 - Present",
    title: "Senior Software Engineer",
    company: "Tech Solutions Inc.",
    description: "Led the development of a scalable microservices architecture. Mentored junior developers and improved code quality across the team."
  },
  {
    date: "2019 - 2021",
    title: "Full-Stack Developer",
    company: "Innovate Co.",
    description: "Developed and maintained web applications using React and Node.js. Collaborated with designers to create responsive and user-friendly interfaces."
  },
  {
    date: "2015 - 2019",
    title: "Bachelor of Science in Computer Science",
    company: "University of Technology",
    description: "Graduated with honors, focusing on software development, algorithms, and data structures. Vice-president of the coding club."
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12 text-primary">My Journey</h2>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-border"></div>
          {experience.map((item, index) => (
            <div key={index} className="relative mb-12">
              <div className="flex items-center" style={{ flexDirection: index % 2 === 0 ? 'row' : 'row-reverse' }}>
                <div className="w-1/2 px-6">
                  <div className={`text-left ${index % 2 !== 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <p className="text-sm font-semibold text-accent mb-1 font-body">{item.date}</p>
                    <h3 className="text-xl font-bold font-headline mb-2">{item.title}</h3>
                    <p className="font-semibold text-muted-foreground mb-3 font-body">{item.company}</p>
                    <p className="text-sm text-muted-foreground font-body">{item.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-secondary"></div>
                <div className="w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
