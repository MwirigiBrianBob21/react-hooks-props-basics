import React from "react";
import BlogContent from "./BlogContent";
import Comment from "./Comment";

// Parent Component to Blogcontent(props)- props are many, comment(props)-prop is commentText that 
// borrows information from this component.
function BlogPost() {
  return (
    <div id="blog-post">
      <BlogContent articleText="Dear Reader: Bjarne Stroustrup has the perfect lecture oration." isPublished = {true}
      minutesToRead = {1}/>
      {/* for props that are strings, we do not need curly braces, however we need them for other 
      data types like boolean, numbers, objects, arrays, etc */}
      
      <Comment commentText="I agree with this statement. - Angela Merkel" />
      <Comment commentText="A universal truth. - Noam Chomsky" />
      <Comment commentText="Truth is singular. Its ‘versions’ are mistruths. - Sonmi-451" />
    </div>
  );
}

export default BlogPost;
