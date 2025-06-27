
const stats = [
  { number: "99.9%", label: "Bot Detection Rate" },
  { number: "$2.5M", label: "Revenue Generated" },
  { number: "500+", label: "Active Websites" },
  { number: "24/7", label: "Security Monitoring" },
];

const Stats = () => {
  return (
    <section className="py-24 px-6 bg-primary text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Leading Websites
          </h2>
          <p className="text-xl text-accent max-w-2xl mx-auto">
            Join hundreds of websites already earning revenue while staying secure
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-highlight">{stat.number}</div>
              <div className="text-accent text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
