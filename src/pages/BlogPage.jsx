import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      date: "JAN 20TH, 2019",
      title: "Art Gossip by Mike Charles",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Alas enim, ipsa exercitationem veniam quae sunt.",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      date: "JAN 20TH, 2019",
      title: "Art Gossip by Mike Charles",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Alas enim, ipsa exercitationem veniam quae sunt.",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      date: "JAN 20TH, 2019",
      title: "Art Gossip by Mike Charles",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Alas enim, ipsa exercitationem veniam quae sunt.",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      date: "JAN 20TH, 2019",
      title: "Art Gossip by Mike Charles",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Alas enim, ipsa exercitationem veniam quae sunt.",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      date: "JAN 20TH, 2019",
      title: "Art Gossip by Mike Charles",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Alas enim, ipsa exercitationem veniam quae sunt.",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      date: "JAN 20TH, 2019",
      title: "Art Gossip by Mike Charles",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Alas enim, ipsa exercitationem veniam quae sunt.",
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
            "url('https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold tracking-wide uppercase">
              OUR BLOG
            </h1>
          </div>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white card-shadow hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-3 font-medium tracking-wide">
                    {post.date}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-homeland-green transition-colors duration-300 cursor-pointer">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {post.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center  space-x-2">
            <button className="w-10 h-10 bg-homeland-green text-white font-semibold border border-homeland-green rounded-full hover:bg-green-700 transition-colors duration-300">
              1
            </button>
            <button className="w-10 h-10 bg-white text-gray-700 font-semibold border border-gray-300 rounded-full hover:bg-gray-50 transition-colors duration-300">
              2
            </button>
            <button className="w-10 h-10 bg-white text-gray-700 font-semibold border border-gray-300 rounded-full hover:bg-gray-50 transition-colors duration-300">
              3
            </button>
            <button className="w-10 h-10 bg-white text-gray-700 font-semibold border border-gray-300 rounded-full hover:bg-gray-50 transition-colors duration-300">
              4
            </button>
            <button className="w-10 h-10 bg-white text-gray-700 font-semibold border border-gray-300 rounded-full hover:bg-gray-50 transition-colors duration-300">
              5
            </button>
            <span className="px-2 text-gray-500">...</span>
            <button className="w-10 h-10 bg-white rounded-full text-gray-700 font-semibold border border-gray-300 hover:bg-gray-50 transition-colors duration-300">
              10
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;
