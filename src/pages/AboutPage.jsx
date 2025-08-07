import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const leadershipTeam = [
    {
      id: 1,
      name: "Megan Smith",
      role: "Real Estate Agent",
      image: "https://preview.colorlib.com/theme/homeland/images/person_1.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Alas enim, ipsa exercitationem veniam quae sunt. Obcaecati accusantium eos. Totam ullam eligendi quas sequi, rem tempor reiciendis.",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      id: 2,
      name: "Brooke Cagle",
      role: "Real Estate Agent",
      image: "https://preview.colorlib.com/theme/homeland/images/person_2.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Alas enim, ipsa exercitationem veniam quae sunt. Obcaecati accusantium eos. Totam ullam eligendi quas sequi, rem tempor reiciendis.",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      id: 3,
      name: "Philip Martin",
      role: "Real Estate Agent",
      image: "https://preview.colorlib.com/theme/homeland/images/person_3.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Alas enim, ipsa exercitationem veniam quae sunt. Obcaecati accusantium eos. Totam ullam eligendi quas sequi, rem tempor reiciendis.",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
  ];

  const agents = [
    {
      id: 1,
      name: "Steven Eriksen",
      role: "Real Estate Agent",
      image: "https://preview.colorlib.com/theme/homeland/images/person_4.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Alas enim, ipsa exercitationem veniam quae sunt. Obcaecati accusantium eos. Totam ullam eligendi quas sequi, rem tempor reiciendis.",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      id: 2,
      name: "Nathan Dumlao",
      role: "Real Estate Agent",
      image: "https://preview.colorlib.com/theme/homeland/images/person_5.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Alas enim, ipsa exercitationem veniam quae sunt. Obcaecati accusantium eos. Totam ullam eligendi quas sequi, rem tempor reiciendis.",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      id: 3,
      name: "Brooke Cagle",
      role: "Real Estate Agent",
      image: "https://preview.colorlib.com/theme/homeland/images/person_2.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Alas enim, ipsa exercitationem veniam quae sunt. Obcaecati accusantium eos. Totam ullam eligendi quas sequi, rem tempor reiciendis.",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
  ];

  const faqs = [
    {
      question: "What is the name of your company?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Alas enim, ipsa exercitationem veniam quae sunt. Obcaecati accusantium eos. Totam ullam eligendi quas sequi, rem tempor reiciendis. Facilis voluptas eveniet architecto beatae cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
    },
    {
      question: "How much pay for 1 month?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Alas enim, ipsa exercitationem veniam quae sunt. Obcaecati accusantium eos.",
    },
    {
      question: "Do I need to register?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Alas enim, ipsa exercitationem veniam quae sunt.",
    },
    {
      question: "Who should I contact in case of support?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Alas enim, ipsa exercitationem veniam quae sunt. Obcaecati accusantium eos.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center bg-no-repeat hero-section"
        style={{
          backgroundImage:
            "url('https://preview.colorlib.com/theme/homeland/images/hero_bg_2.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold tracking-wide uppercase">
              ABOUT HOMELAND
            </h1>
          </div>
        </div>
      </section>

      {/* Our Company Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Our Company"
                className="w-full h-96 object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 uppercase tracking-wide">
                OUR COMPANY
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                in consectetur augue. Nullam congue lacinia dui, a porttitor
                lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque
                eget odio ac lectus vestibulum faucibus eget in metus. In
                pellentesque faucibus vestibulum. Nulla at nulla justo, eget
                luctus tortor.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Nulla facilisi. Duis aliquet egestas purus in blandit. Curabitur
                vulputate, ligula lacinia scelerisque tempor, lacus lacus ornare
                ante, ac egestas est urna sit amet arcu. Class aptent taciti
                sociosqu ad litora torquent per conubia nostra, per inceptos
                himenaeos.
              </p>
              <button className="bg-homeland-green text-white px-8 py-3 font-semibold uppercase tracking-wide hover:bg-green-700 transition-colors duration-300">
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 uppercase tracking-wide">
              LEADERSHIP
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
              consectetur augue. Nullam congue lacinia dui, a porttitor lectus
              condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio
              ac lectus vestibulum.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadershipTeam.map((member) => (
              <div key={member.id} className=" rounded-md  overflow-hidden">
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-96 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-homeland-green font-semibold mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {member.description}
                  </p>
                  <div className="flex space-x-3">
                    <a
                      href={member.social.facebook}
                      className="text-gray-400 hover:text-homeland-green transition-colors duration-300"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                    <a
                      href={member.social.twitter}
                      className="text-gray-400 hover:text-homeland-green transition-colors duration-300"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </a>
                    <a
                      href={member.social.linkedin}
                      className="text-gray-400 hover:text-homeland-green transition-colors duration-300"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Agents Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 uppercase tracking-wide">
              OUR AGENTS
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
              consectetur augue. Nullam congue lacinia dui, a porttitor lectus
              condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio
              ac lectus vestibulum.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {agents.map((agent) => (
              <div key={agent.id} className=" rounded-md overflow-hidden">
                <div className="relative">
                  <img
                    src={agent.image}
                    alt={agent.name}
                    className="w-full h-96 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {agent.name}
                  </h3>
                  <p className="text-homeland-green font-semibold mb-4">
                    {agent.role}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {agent.description}
                  </p>
                  <div className="flex space-x-3">
                    <a
                      href={agent.social.facebook}
                      className="text-gray-400 hover:text-homeland-green transition-colors duration-300"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                    <a
                      href={agent.social.twitter}
                      className="text-gray-400 hover:text-homeland-green transition-colors duration-300"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </a>
                    <a
                      href={agent.social.linkedin}
                      className="text-gray-400 hover:text-homeland-green transition-colors duration-300"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 uppercase tracking-wide">
              FREQUENTLY ASK QUESTIONS
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
              consectetur augue. Nullam congue lacinia dui, a porttitor lectus
              condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio
              ac lectus vestibulum.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-lef p-6   hover:shadow-lg transition-shadow duration-300 focus:outline-none"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      <svg
                        className={`w-6 h-6 text-homeland-green transform transition-transform duration-200 ${
                          openFaq === index ? "rotate-45" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </div>
                  </div>
                  {openFaq === index && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
