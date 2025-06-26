
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
    <section id="experience" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">My Journey</h2>
            <p className="mt-2 text-lg text-muted-foreground">Education &amp; Professional Experience.</p>
        </div>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-3 md:left-1/2 -translate-x-1/2 h-full w-0.5 bg-border rounded-full"></div>
          {experience.map((item, index) => (
            <div key={index} className="relative pl-10 md:pl-0 mb-12 opacity-0 animate-fade-in-up" style={{ animationDelay: `${400 + index * 100}ms`}}>
              <div className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="md:w-1/2 md:px-6">
                  <div className={`text-left ${index % 2 !== 0 ? 'md:text-right' : ''}`}>
                    <div className="p-6 bg-card rounded-lg shadow-md border">
                        <p className="text-sm font-semibold text-primary mb-1 font-body">{item.date}</p>
                        <h3 className="text-xl font-bold font-headline mb-2">{item.title}</h3>
                        <p className="font-semibold text-muted-foreground mb-3 font-body">{item.company}</p>
                        <p className="text-sm text-muted-foreground font-body">{item.description}</p>
                    </div>
                  </div>
                </div>
                <div className="absolute left-3 md:left-1/2 -translate-x-1/2 mt-2 md:mt-0 w-6 h-6 bg-primary rounded-full border-4 border-background flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                </div>
                <div className="md:w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
