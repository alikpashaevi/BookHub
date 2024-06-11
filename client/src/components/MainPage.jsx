import React from 'react'
import './MainPage.css'
import profilePic from "../assets/images/profile-pic.png";
import { FaRegHeart, FaRegCommentDots, FaShare } from "react-icons/fa";

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
          <p className="post-text">
            This is an example of a post content. It can contain text, images, links, etc.
          </p>
          <div class="post-img">
            <img src="https://picsum.photos/200/300" alt="Post Image" />
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