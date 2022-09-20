import React from "react";


// Child component of BlogPost().
// Only way to pass information is through props
function BlogContent(props) {
  if (!props.isPublished) {
    return null;
    // return null means no DOM elements should be displayed here
    // so, unpublished content- isPublished is not true, do not publish

  } else {
    // show published content
    return (
      <div>
        <h1>{props.articleText}</h1>
        <p>{props.minutesToRead} minutes to read</p>
      </div>
    );
  }
}

export default BlogContent;



// .....................personal work.....................

// // function ParentComponent(props)
// function BlogContent(props) {
//   return <div>{props.articleText}</div>
// }

// // function ChildComponent
// function BlogPost() {
//   return (
//     <div>
//       <BlogContent articleText = "Dear Reader: Bjarne Stroustrup has the perfect lecture oration." />
//     </div>
//   );
// }
