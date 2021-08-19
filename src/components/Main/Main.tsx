import { useRef, useState } from "react";
import { PostItemInterface } from "../../interfaces/PostItemInterface";
import PostList from "../PostList/PostList";
import MyButton from "../UI/button/MyButton";
import "./Main.scss";
import MyInput from "./../UI/input/MyInput";

interface EventDefProps {
  preventDefault: () => void;
}

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

  // const bodyInputRef = useRef<HTMLInputElement>(null);

  // const [title, setTitle] = useState<string>('');
  // const [body, setBody] = useState<string>('');

  const [post, setPost] = useState({
    title: "",
    body: "",
  });

  const addNewPost = (e: EventDefProps) => {
    e.preventDefault();
    setPosts([ ...posts, {...post, id: Date.now()}]); //add newPost to the list
    // setPosts([...posts, newPost]); //add newPost to the list
    setPost({title: "",  body: ""});
    // setTitle(''); //clear input
    // setBody(''); //clear input

    // console.log(bodyInputRef.current?.value);
  };

  return (
    <main className="main flex-fill">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <form>
              <div className="mb-3">
                {/* Управляємий компонент */}
                <MyInput
                  placeholder="Title post"
                  type="text"
                  className="form-control"
                  value={post.title}
                  onChange={(e) => setPost({ ...post, title: e.target.value })}
                />
              </div>
              <div className="mb-3">
                {/* Неуправляємий компонент */}
                <MyInput
                  placeholder="Text post"
                  type="text"
                  className="form-control"
                  value={post.body}
                  onChange={(e) => setPost({ ...post, body: e.target.value })}
                  // ref={bodyInputRef}
                />
              </div>
              <MyButton
                type="submit"
                className="btn btn-success"
                clickHandler={addNewPost}
              >
                Add post
              </MyButton>
            </form>
          </div>
        </div>
      </div>
      <div className="">
        <PostList posts={posts} title="Post List" />
      </div>
    </main>
  );
};

export default Main;
