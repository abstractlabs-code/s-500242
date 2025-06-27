
import { Shield, DollarSign, Zap, BarChart, Globe, Puzzle } from "lucide-react";

const features = [
  {
    title: "Advanced Bot Protection",
    description: "AI-powered detection that stops malicious bots while allowing legitimate users through seamlessly",
    icon: Shield,
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    title: "Revenue Generation",
    description: "Monetize every security check with high-quality advertisements from premium brands",
    icon: DollarSign,
    color: "text-green-600",
    bgColor: "bg-green-50"
  },
  {
    title: "Lightning Fast",
    description: "Sub-second response times ensure your users never experience delays or frustration",
    icon: Zap,
    color: "text-yellow-600",
    bgColor: "bg-yellow-50"
  },
  {
    title: "Real-time Analytics",
    description: "Comprehensive dashboard showing security metrics, revenue stats, and user engagement",
    icon: BarChart,
    color: "text-purple-600",
    bgColor: "bg-purple-50"
  },
  {
    title: "Global Coverage",
    description: "Worldwide ad inventory with localized content and compliance with regional regulations",
    icon: Globe,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50"
  },
  {
    title: "Easy Integration",
    description: "Drop-in replacement for existing CAPTCHAs with just a few lines of code",
    icon: Puzzle,
    color: "text-pink-600",
    bgColor: "bg-pink-50"
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-6">
            <Shield className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">Platform Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Security Meets Profitability
          </h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            Transform your website's security layer into a revenue-generating powerhouse with our innovative ad-based CAPTCHA solution.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 hover:border-gray-200"
            >
              <div className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center mb-6`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-secondary leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
