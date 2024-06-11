import React, { useState, useRef, useEffect } from 'react'
import './MainPage.css'
import profilePic from "../assets/images/profile-pic.png";
import { FaRegHeart, FaRegCommentDots, FaShare, FaStar, FaHeart, FaPaperPlane    } from "react-icons/fa";
import 'animate.css';

const MainPage = () => {
  const [hearted, setHearted] = useState(false);
  const [commented, setCommented] = useState(false);
  const [rows, setRows] = useState(1);

  function heartPost() {
    if (!hearted) {
      setHearted(true);
    } else {
      setHearted(false);
    }
  }

  function commentPost() {
    if (!commented) {
      setCommented(true);
    } else {
      setCommented(false);
    }
  }

  const handleChange = (event) => {
    setText(event.target.value);
    const rowCount = event.target.value.length;
    if (rowCount > 100) {
        setRows(rows + 1);
    }
  };

  

  return (
    <main className='home-content'>
      <div className="post">
        <div className="post-header">
          <img src={profilePic} alt="Profile Picture" className="profile-pic" />
          <div className="user-info">
            <div className="username">Username</div>
            <div className="date">Date</div>
          </div>
        </div>
        <div className="post-content">
          <div className="post-img">
            <img src="https://picsum.photos/250/300" alt="Post Image" />
            <div className="book-info">
              <div className="book-descritption">
                <h3 className="book-title">Book title</h3>
                <p className="book-author">Author</p>
                <p className="book-year">2002 </p>
              </div>
              <div className="book-rating">
                <span>7.4/10 <FaStar /></span>
              </div>
            </div>
          </div>
          <div className="post-text-section">
            <span>User rating: 6/10 <FaStar /></span>
            <p className="post-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab hic dignissimos sit excepturi velit at, nisi error fuga sed, rerum recusandae temporibus quas suscipit architecto aperiam in eos. Laudantium, similique?
            </p>
          </div>
        </div>
        <div className="post-footer">
          <div className="reactions">
            <span onClick={heartPost}>{hearted ? <FaHeart /> : <FaRegHeart />}10</span>
            <span onClick={commentPost}><FaRegCommentDots /> 5</span>
            <span><FaShare /> 3</span>
          </div>
          {commented &&
          <form action="/" className='new-comment-input'>
              <textarea
                className="comment-input"
                rows="2" 
                placeholder='Add a comment...'
            />
            <button className='submit-comment' type="submit"><FaPaperPlane /></button>
          </form> }
          <div className="comments">
            <div className="comment">
              <div className="comment-user">Comment User 1</div>
              <div className="comment-text">This is a comment.</div>
            </div>
            <div className="comment">
              <div className="comment-user">Comment User 2</div>
              <div className="comment-text">This is another comment.</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default MainPage