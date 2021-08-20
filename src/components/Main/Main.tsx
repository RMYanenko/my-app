import { PostItemInterface } from "../../interfaces/PostItemInterface";
import PostList from "../PostList/PostList";
import "./Main.scss";
import PostForm from './../PostForm/PostForm';
import { useState } from "react";


const Main = () => {
  const [posts, setPosts] = useState<PostItemInterface[]>([
    {
      id: 1,
      title: "JavaScript",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
      id: 2,
      title: "Python",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
      id: 3,
      title: "C++",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
  ]);

  const createPost = (newPost: PostItemInterface) => {
    setPosts([...posts, newPost]);
  }

  // отримуємо пост з дочернього елемента
  const removePost = (post: PostItemInterface) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <main className="main flex-fill">
      <div className="container">
        <div className="row">
          <PostForm create={createPost} />
        </div>
      </div>
      <div className="">
        <PostList posts={posts} title="Post List" />
      </div>
    </main>
  );
};

export default Main;
