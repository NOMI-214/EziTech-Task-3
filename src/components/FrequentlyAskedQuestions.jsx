import React, { useState } from "react";

const FrequentlyAskedQuestions = () => {
  const [openQuestion, setOpenQuestion] = useState(0);

  const questions = [
    {
      id: 0,
      question: "What is the name of your company",
      answer:
        "Our company is called Homeland Real Estate. We are a leading real estate agency specializing in residential and commercial properties across the United States. With over 15 years of experience in the market, we have helped thousands of clients find their perfect homes and investment opportunities.",
    },
    {
      id: 1,
      question: "How much pay for 3 months?",
      answer:
        "Our standard payment plan for 3 months of service includes a comprehensive package that covers property search, viewings, negotiations, and closing support. The total cost is $2,500, which can be paid in monthly installments of $833.33. This includes unlimited property viewings and personalized consultation throughout the process.",
    },
    {
      id: 2,
      question: "Do I need to register?",
      answer:
        "Yes, registration is required to access our full range of services. Registration is free and takes only a few minutes. By registering, you'll get access to our exclusive property listings, saved searches, and personalized recommendations. You can also receive notifications about new properties that match your criteria.",
    },
    {
      id: 3,
      question: "Who should I contact in case of support?",
      answer:
        "For general inquiries and support, please contact our customer service team at support@homeland.com or call us at (555) 123-4567. For urgent matters, you can reach our 24/7 emergency line at (555) 987-6543. Our team is available Monday through Friday, 9 AM to 6 PM EST.",
    },
  ];

  const toggleQuestion = (questionId) => {
    setOpenQuestion(openQuestion === questionId ? -1 : questionId);
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-homeland-dark mb-4">
            FREQUENTLY ASK QUESTIONS
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
            maiores quisquam saepe architecto error corporis aliquam. Cum ipsam
            a consectetur aut sunt sint animi, pariatur corporis, eaque,
            deleniti cupiditate officia.
          </p>
        </div>

        {/* Questions List */}
        <div className="max-w-4xl mx-auto">
          {questions.map((item) => (
            <div key={item.id} className="mb-4">
              <button
                onClick={() => toggleQuestion(item.id)}
                className="w-full flex items-center justify-between p-6 bg-gray-50 hover:bg-gray-100 transition-colors duration-300 text-left"
              >
                <span className="text-lg font-medium text-homeland-dark">
                  {item.question}
                </span>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                    openQuestion === item.id ? "rotate-180" : ""
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {openQuestion === item.id && (
                <div className="px-6 py-4 bg-white border-l-4 border-homeland-green">
                  <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FrequentlyAskedQuestions;
