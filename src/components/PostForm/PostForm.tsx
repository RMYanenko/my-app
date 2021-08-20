import React, { useState } from 'react';
import MyInput from '../UI/input/MyInput';
import MyButton from '../UI/button/MyButton';
import { PostItemInterface } from '../../interfaces/PostItemInterface';

interface EventDefProps {
    preventDefault: () => void;
  }

interface IForm {
   create: ((post: PostItemInterface) => void);
}

const PostForm = ({create}:IForm): JSX.Element => {

  const [post, setPost] = useState({title: "", body: ""});

  const addNewPost = (e: EventDefProps) => {
    e.preventDefault();
    const newPost = {
        ...post, id: Date.now()
    }
    create(newPost);
    setPost({title: "",  body: ""});
  };
    return (
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
                {/* Неуправляємий компонент ref*/}
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
    )
}

export default PostForm
