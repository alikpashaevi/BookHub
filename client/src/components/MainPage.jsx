import React from 'react'
import './MainPage.css'
import profilePic from "../assets/images/profile-pic.png";
import { FaRegHeart, FaRegCommentDots, FaShare, FaStar  } from "react-icons/fa";

const MainPage = () => {
  return (
    <main className='home-content'>
      <div class="post">
        <div class="post-header">
          <img src={profilePic} alt="Profile Picture" class="profile-pic" />
          <div class="user-info">
            <div class="username">Username</div>
            <div class="date">Date</div>
          </div>
        </div>
        <div class="post-content">
          <div class="post-img">
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
          <div class="post-text-section">
            <span>User rating: 6/10 <FaStar /></span>
            <p className="post-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab hic dignissimos sit excepturi velit at, nisi error fuga sed, rerum recusandae temporibus quas suscipit architecto aperiam in eos. Laudantium, similique?
            </p>
          </div>
        </div>
        <div class="post-footer">
          <div class="reactions">
            <span><FaRegHeart /> 10</span>
            <span><FaRegCommentDots /> 5</span>
            <span><FaShare /> 3</span>
          </div>
          <div class="comments">
            <div class="comment">
              <div class="comment-user">Comment User 1</div>
              <div class="comment-text">This is a comment.</div>
            </div>
            <div class="comment">
              <div class="comment-user">Comment User 2</div>
              <div class="comment-text">This is another comment.</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default MainPage