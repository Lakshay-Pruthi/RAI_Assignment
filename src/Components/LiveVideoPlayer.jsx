import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

function LiveVideoPlayer({ url, comments, setComments }) {

    const [currentTime, setCurrentTime] = useState(0);
    const [newComment, setNewComment] = useState('')

    const handleProgress = (state) => {
        setCurrentTime(state.playedSeconds);
    };
    const handleAddComment = () => {

        newComment.length != 0 && setComments([{ text: newComment, videoTimestamp: currentTime }, ...comments]);

    };

    return (
        <>
            <div className='custom-container'>
                <ReactPlayer
                    url={url}
                    onProgress={handleProgress}
                    playing={true}
                />
                <div className="comment-section">
                    <h2>Live Comments</h2>
                    <ul className='list-group'>
                        {comments.map((comment, index) => (
                            <li className='list-group-item' key={index}>
                                {comment.text}
                            </li>
                        ))}
                    </ul>

                    <div className="comment-form form-floating">
                        <textarea className="form-control" onChange={(e) => setNewComment(e.target.value)} placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                        <label htmlFor="floatingTextarea">Comments</label>
                        <button type="button" className="btn btn-primary" onClick={handleAddComment}>Post</button>
                    </div>

                </div>
            </div>
        </>
    );
}

export default LiveVideoPlayer;
