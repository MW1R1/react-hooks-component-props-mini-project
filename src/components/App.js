import React from "react";
import blogData from "../data/blog";

console.log(blogData);

function Header(props) {
  return (
    <header>
      <h1>{props.blogName}</h1>
    </header>
  );
}

function About(props) {
  const imageUrl = props.image || "https://via.placeholder.com/215";
  return (
    <aside>
      <img src={imageUrl} alt="blog logo" />
      <p>{props.about}</p>
    </aside>
  );
}

function ArticleList({ posts }) {
  return (
    <main>
      {posts.map((post) => (
        <Article key={post.id} {...post} />
      ))}
    </main>
  );
}

function Article(props) {
  const { title, date, preview } = props;
  const formattedDate = date ? new Date(date).toLocaleDateString() : "January 1, 1970";

  return (
    <article>
      <h3>{title}</h3>
      <small>{formattedDate}</small>
      <p>{preview}</p>
    </article>
  );
}

function App() {
  const posts = [
    {
      id: 1,
      title: "Components 101",
      date: "December 15, 2020",
      preview: "Setting up the building blocks of your site",
      minutes: 5,
    },
    {
      id: 2,
      title: "React Data Flow",
      date: "December 11, 2020",
      preview: "Passing props is never passé",
      minutes: 15,
    },
    {
      id: 3,
      title: "Function vs Class Components",
      preview: "React, meet OOJS.",
      minutes: 47,
    },
  ];

  return (
    <div className="App">
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
      <div>
        <Header blogName="Overreacted" />
        <About
          image="https://example.com/image.jpg"
          about="A blog about learning React."
        />
        <ArticleList posts={posts} />
      </div>
    </div>
  );
}

export default App;
