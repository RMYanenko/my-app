import React from 'react';
import { PostItemInterface } from '../../interfaces/PostItemInterface';
import MyButton from '../UI/button/MyButton';

const PostItem = ({id, title, body}: PostItemInterface) => {
    return(
        <div className="post card">
            <div className="post__content">
                <h5 className="card-header">{id}. {title}</h5>
                <div className="card-text">{body}</div>
            </div>
            <div className="">
                <MyButton className="btn btn-danger">
                    Delete
                </MyButton>
            </div>
        </div>
    )
}

export default PostItem;
