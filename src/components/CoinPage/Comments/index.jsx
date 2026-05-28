import React, { useState, useEffect } from 'react';
import { addComment, getComments } from '../../../firebase/comments';
import Button from '../../Common/Button';

const Comments = ({ coinId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const commentsData = await getComments(coinId);
        if (commentsData) {
          setComments(commentsData);
        }
      } catch (err) {
        console.error("Failed to load comments:", err);
      }
    };
    fetchComments();
  }, [coinId]);

  const handleAddComment = async () => {
    if (newComment.trim()) {
      try {
        await addComment(coinId, newComment);
        setNewComment('');
        const updatedComments = await getComments(coinId);
        if (updatedComments) {
          setComments(updatedComments);
        }
      } catch (err) {
        console.error("Failed to add comment:", err);
      }
    }
  };

  const getInitials = (email) => {
    if (!email) return "U";
    return email.charAt(0).toUpperCase();
  };

  const formatCommentDate = (timestamp) => {
    if (!timestamp) return "";
    try {
      if (timestamp.toDate) {
        return new Date(timestamp.toDate()).toLocaleString();
      }
      return new Date(timestamp).toLocaleString();
    } catch (e) {
      return "";
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="text-lg font-bold text-white font-inter">
          Discussion Board
        </h3>
        <p className="text-xs text-neutral-400 mt-1 font-inter">
          Share your analysis and read what others are saying about this coin.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add your analysis or question..."
          className="w-full min-h-[90px] p-3 text-sm text-white bg-[#16181d] border border-[#1e2028] rounded-xl placeholder-neutral-500 focus:outline-none focus:border-[#3a80e9] focus:ring-1 focus:ring-[#3a80e9] transition-all duration-200 resize-y font-inter"
        />
        <div className="flex justify-start">
          <Button onClick={handleAddComment} text="Post Comment" />
        </div>
      </div>

      <div className="flex flex-col gap-4 mt-2 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <div 
              key={index} 
              className="flex gap-3 p-3 bg-[#16181d]/50 border border-[#1e2028]/60 rounded-xl"
            >
              {/* User avatar circle */}
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#3a80e9] to-[#7c3aed] flex items-center justify-center flex-shrink-0 text-white font-bold text-xs select-none">
                {getInitials(comment.email)}
              </div>

              {/* Comment text block */}
              <div className="flex flex-col gap-1 w-full">
                <div className="flex flex-wrap items-center justify-between gap-x-2">
                  <span className="text-white font-semibold text-xs font-inter">
                    {comment.email || "Anonymous User"}
                  </span>
                  <span className="text-[10px] text-neutral-500 font-inter">
                    {formatCommentDate(comment.timestamp)}
                  </span>
                </div>
                <p className="text-neutral-300 text-sm mt-0.5 leading-relaxed font-inter break-all">
                  {comment.text}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-6">
            <p className="text-neutral-500 text-sm font-inter">
              No analysis posted yet. Be the first to start the discussion!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Comments;
