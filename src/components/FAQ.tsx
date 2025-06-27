
const faqs = [
  {
    question: "How does ad-based CAPTCHA work?",
    answer: "Users interact with branded content instead of solving puzzles. This creates engagement while verifying they're human, generating revenue for you.",
    iconBg: "bg-blue-50",
  },
  {
    question: "Will this affect my site's security?",
    answer: "No, our solution provides superior bot protection compared to traditional CAPTCHAs while being more user-friendly.",
    iconBg: "bg-green-50",
  },
  {
    question: "How much revenue can I expect?",
    answer: "Revenue varies by traffic volume and audience, but most sites see $0.50-$2.00 per 1000 verifications.",
    iconBg: "bg-purple-50",
  },
  {
    question: "Is integration complicated?",
    answer: "Not at all! Replace your existing CAPTCHA with just a few lines of code. Full documentation and support included.",
    iconBg: "bg-pink-50",
  },
  {
    question: "What about ad quality and relevance?",
    answer: "We partner with premium brands and use intelligent targeting to show relevant, high-quality ads to your users.",
    iconBg: "bg-yellow-50",
  },
  {
    question: "Can I control what ads are shown?",
    answer: "Yes, you have full control over ad categories, can blacklist specific brands, and set content guidelines.",
    iconBg: "bg-indigo-50",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-medium text-blue-700">Common Questions</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Everything You Need to Know
          </h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            Get answers to the most frequently asked questions about Captcha Ads
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-3xl hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className={`w-12 h-6 ${faq.iconBg} rounded-full mb-6`} />
              <h3 className="text-xl font-medium mb-3">{faq.question}</h3>
              <p className="text-secondary text-sm leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
