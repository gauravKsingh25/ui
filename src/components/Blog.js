import React from "react";
import styled from "styled-components";

const BlogContainer = styled.section`
  padding: 4rem 2rem;
  background-color: white;
`;

const BlogTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1rem;
`;

const BlogSubtitle = styled.h3`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 1rem;
`;

const BlogDescription = styled.p`
  font-size: 1.25rem;
  text-align: center;
  color: #667085;
  margin-bottom: 3rem;
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const BlogPost = styled.div`
  background-color: #f9fafb;
  border-radius: 8px;
  overflow: hidden;
`;

const BlogPostContent = styled.div`
  padding: 1.5rem;
`;

const BlogPostCategory = styled.span`
  color: #6941c6;
  font-weight: bold;
  font-size: 0.875rem;
`;

const BlogPostTitle = styled.h4`
  font-size: 1.25rem;
  margin: 0.5rem 0;
`;

const BlogPostExcerpt = styled.p`
  color: #667085;
  margin-bottom: 1rem;
`;

const BlogPostMeta = styled.div`
  display: flex;
  justify-content: space-between;
  color: #667085;
  font-size: 0.875rem;
`;

const ViewAllButton = styled.button`
  display: block;
  margin: 2rem auto 0;
  padding: 0.75rem 1.5rem;
  background-color: white;
  color: #7f56d9;
  border: 1px solid #7f56d9;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
`;

function Blog() {
  const posts = [
    {
      category: "Design",
      title: "UX review presentations",
      excerpt:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
      author: "Olivia Rhye",
      date: "20 Jan 2024",
    },
    {
      category: "Product",
      title: "Migrating to Linear 101",
      excerpt:
        "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
      author: "Phoenix Baker",
      date: "19 Jan 2024",
    },
    {
      category: "Software Engineering",
      title: "Building your API stack",
      excerpt:
        "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
      author: "Lana Steiner",
      date: "18 Jan 2024",
    },
  ];

  return (
    <BlogContainer>
      <BlogTitle>Our blog</BlogTitle>
      <BlogSubtitle>Latest blog posts</BlogSubtitle>
      <BlogDescription>
        Tool and strategies modern teams need to help their companies grow.
      </BlogDescription>
      <BlogGrid>
        {posts.map((post, index) => (
          <BlogPost key={index}>
            <BlogPostContent>
              <BlogPostCategory>{post.category}</BlogPostCategory>
              <BlogPostTitle>{post.title}</BlogPostTitle>
              <BlogPostExcerpt>{post.excerpt}</BlogPostExcerpt>
              <BlogPostMeta>
                <span>{post.author}</span>
                <span>{post.date}</span>
              </BlogPostMeta>
            </BlogPostContent>
          </BlogPost>
        ))}
      </BlogGrid>
      <ViewAllButton>View all posts</ViewAllButton>
    </BlogContainer>
  );
}

export default Blog;
