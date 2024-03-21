import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

function ReplayVideoPlayer({ comments, url }) {


    const [currentTime, setCurrentTime] = useState(0);
    const [replayComments, setReplayComments] = useState([]);

    const handleProgress = (state) => {
        setCurrentTime(state.playedSeconds);
    };

    useEffect(() => {
        function loadComments() {
            console.log("Hello", comments, Math.round(currentTime));
            const Comment = comments.find(comment => Math.round(comment.videoTimestamp) === Math.round(currentTime));
            console.log("new array", Comment);
            if (Comment) {
                setReplayComments([Comment, ...replayComments])
            }
        }
        loadComments();
    }, [currentTime])



    return (
        <div className='custom-container'>
            <ReactPlayer
                url={url}
                controls
                onProgress={handleProgress}
            />
            <div className="comment-section">
                <h2>Live Chat Replay</h2>
                <ul className='list-group'>
                    {replayComments.map((comment, index) => (
                        <li className='list-group-item' key={index}>
                            {comment.text}
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    );
}

export default ReplayVideoPlayer;
