import React from 'react';
import "./Posts.css";
import { FcInfo } from "react-icons/fc";

const Posts = () => {
  return (
    <div className='cards'>

      {/* Part 1: A Changing World Order */}
      <div className="part">
        <div className="heading">
          <div className="topic">
            <strong className="topic">A Changing World Order</strong>
          </div>
          <FcInfo />
        </div>
        <div className="article">
          {/* Content for the first part */}
          The world is changing at a feverish pace. Friends, colleagues, and everyone engaged in knowledge work are beginning to sense this, including the rapid integration of artificial intelligence, the influence of global events shaping our interconnected societies, and the transformative power of digital communication. In this era of constant connectivity, the exchange of ideas has become more diverse and widespread. People are finding new ways to collaborate, innovate, and contribute to a collective pool of knowledge that transcends geographical boundaries. The journey of discovery and learning has never been more exciting.
        </div>
        <div className="postfoot">
          <div className="type">
            <p className="posttype">musings</p> by anujgosalia
          </div>
          <div className="postinfo">
            <span> August 2 &#183; 2 mins read &#183; 102 views</span>
          </div>
        </div>
      </div>

      {/* First Separator Line */}
      <div className="separator"></div>

      {/* Part 2: India v/s Australia */}
      <div className="part">
        <div className="heading">
          <div className="topic">
            <strong className="topic">India v/s Australia</strong>
          </div>
          <FcInfo />
        </div>
        <div className="article">
          {/* Content for the second part */}
          Think about it - this cricket series was akin to therapy. Laying our childhood trauma up top, working with it slowly and surely over two matches.
        </div>
        <div className="postfoot">
          <div className="type">
            <p className="posttype">reflections</p> by yourname
          </div>
          <div className="postinfo">
            <span> August 5 &#183; 3 mins read &#183; 120 views</span>
          </div>
        </div>
      </div>

      {/* Second Separator Line */}
      <div className="separator"></div>

      {/* Part 3: Yet Another New Dawn */}
      <div className="part">
        <div className="heading">
          <div className="topic">
            <strong className="topic">Write To Build</strong>
          </div>
          <FcInfo />
        </div>
        <div className="article">
          {/* Content for the third part */}
          Writing is the first step to create:
          <br />
          <br />
          - stories
          <br />
          - products
          <br />
          - companies
        </div>
        <div className="postfoot">
          <div className="type">
            <p className="posttype">insights</p> by anotherauthor
          </div>
          <div className="postinfo">
            <span> August 8 &#183; 4 mins read &#183; 150 views</span>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Posts;
