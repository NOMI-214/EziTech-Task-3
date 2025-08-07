import React from "react";

const RecentBlog = () => {
  const handleBlogClick = () => {
    const heroSection = document.querySelector(".hero-section");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "auto" });
    }
  };

  const blogPosts = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      date: "JAN 20TH, 2018",
      title: "Art Gossip by Mike Charles",
      description: (
        <p>
          Lorem ipsum dolor sit amet, consectetur
          <br /> adipisicing elit. Alias enim, ipsa <br />
          exercitationem veniam quae sunt.
        </p>
      ),
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      date: "JAN 18TH, 2018",
      title: "Real Estate Market Trends",
      description: (
        <p>
          Lorem ipsum dolor sit amet, consectetur
          <br /> adipisicing elit. Alias enim, ipsa <br />
          exercitationem veniam quae sunt.
        </p>
      ),
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80",
      date: "JAN 15TH, 2018",
      title: "Investment Opportunities",
      description: (
        <p>
          Lorem ipsum dolor sit amet, consectetur
          <br /> adipisicing elit. Alias enim, ipsa <br />
          exercitationem veniam quae sunt.
        </p>
      ),
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-homeland-dark mb-4">
            RECENT BLOG
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
            maiores quisquam saepe
            <br /> architecto error corporis aliquam. Cum ipsam a consectetur
            aut sunt sint animi, pariatur <br />
            corporis, eaque, deleniti cupiditate officia.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white overflow-hidden card-shadow group transition-all duration-300 cursor-pointer"
              onClick={handleBlogClick}
            >
              {/* Blog Image */}
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Blog Content */}
              <div className="p-6">
                {/* Date */}
                <div className="text-sm text-gray-500 mb-3 font-medium">
                  {post.date}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-homeland-dark mb-4 group-hover:text-homeland-green transition-colors duration-300">
                  {post.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {post.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentBlog;
