
import React from "react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    category: "SKINCARE",
    title: "5 Steps for Glowing Skin",
    description:
      "Discover a simple daily skincare routine to keep your skin healthy, hydrated, and glowing.",
    image:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=80",
    date: "October 10, 2026",
    readTime: "4 min read",
  },
  {
    id: 2,
    category: "MAKEUP",
    title: "Everyday Natural Makeup Look",
    description:
      "Learn how to create a beautiful, natural makeup look using a few essential products.",
    image:

  "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80",
    date: "October 15, 2026",
    readTime: "5 min read",
  },
  {
    id: 3,
    category: "BEAUTY TIPS",
    title: "How to Choose the Right Moisturizer",
    description:
      "Understand why moisturizing matters and how to choose a moisturizer suited to your skin type.",
    image:
      "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=800&q=80",
    date: "October 20, 2026",
    readTime: "3 min read",
  },
  {
    id: 4,
    category: "SKINCARE",
    title: "Your Daily Sunscreen Guide",
    description:
      "Learn how sunscreen helps protect your skin and how to make it part of your everyday routine.",
    image:
  "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=800&q=80",
    date: "October 22, 2026",
    readTime: "4 min read",
  },
  {
    id: 5,
    category: "MAKEUP",
    title: "Build Your Essential Makeup Kit",
    description:
      "Explore the basic makeup products that can help you create simple looks for different occasions.",
    image:
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80",
    date: "October 24, 2026",
    readTime: "5 min read",
  },
  {
    id: 6,
    category: "BEAUTY TIPS",
    title: "Simple Nighttime Skincare Routine",
    description:
      "Create an easy evening routine to cleanse your skin and keep it moisturized overnight.",
   image:
  "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80",
    date: "October 26, 2026",
    readTime: "3 min read",
  },
];

export default function Blog() {
  return (
    <main className="beauty-blog">
      <section className="blog-hero">
        <div className="container">
          <span className="blog-eyebrow">THE BEAUTY JOURNAL</span>

          <h1>
            Beauty begins
            <br />
            <span>with you.</span>
          </h1>

          <p>
            Discover skincare secrets, makeup inspiration, and little
            beauty rituals that make you feel confident every day.
          </p>

          <a href="#blog-posts" className="blog-hero-button">
            Explore Articles <span>→</span>
          </a>
        </div>
      </section>

      <section className="blog-intro container">
        <div>
          <span className="blog-eyebrow">OUR LATEST STORIES</span>
          <h2>A little beauty inspiration</h2>
        </div>

        <p>
          Tips, routines, and inspiration to help you create your own
          beauty journey.
        </p>
      </section>

      <section className="container blog-content" id="blog-posts">
        <div className="blog-filter-label">
          <span>ALL ARTICLES</span>
          <span>{blogPosts.length} STORIES</span>
        </div>

        <div className="row g-4">
          {blogPosts.map((post) => (
            <div className="col-md-6 col-lg-4" key={post.id}>
              <article className="blog-card">
                <div className="blog-image-wrapper">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="blog-image"
                    loading="lazy"
                  />
                  <span className="blog-category">{post.category}</span>
                </div>

                <div className="blog-card-body">
                  <div className="blog-meta">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3>{post.title}</h3>

                  <p>{post.description}</p>

                  <Link
                    to={`/blog/${post.id}`}
                    className="blog-read-more"
                  >
                    Read Article <span>→</span>
                  </Link>
                </div>
              </article>
            </div>
          ))}
        </div>
      </section>

      <section className="blog-newsletter">
        <div className="container">
          <span className="blog-eyebrow">A LITTLE LOVE IN YOUR INBOX</span>
          <h2>Your daily dose of beauty</h2>
          <p>
            Explore new routines, beauty inspiration, and skincare tips
            with Beauty Secret.
          </p>

          <Link to="/skincare" className="blog-hero-button">
            Explore Skincare <span>→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
