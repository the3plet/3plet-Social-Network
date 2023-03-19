import "./posts.scss"
import React from 'react'
import Post from "../Post/Post"

const Posts = () => {
  const posts=[
    {
      id:1,
      name: "Hong hoe",
      userId: 1,
      profilePicture:"https://img.freepik.com/free-photo/beautiful-woman-covering-eye-with-autumnal-leaves_329181-17150.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, quasi. Ullam, nemo. Tenetur natus tempore amet labore! Atque assumenda quas expedita illum praesentium a sequi officiis! In labore ab odit.",
      img:"https://i0.wp.com/www.alphr.com/wp-content/uploads/2017/11/How-to-post-a-Live-Photo-on-Instagram1.jpg?fit=900%2C600&ssl=1",
    },
    {
      id:2,
      name: "Hong hoe",
      userId: 2,
      profilePicture:"https://img.freepik.com/free-photo/beautiful-woman-covering-eye-with-autumnal-leaves_329181-17150.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, quasi. Ullam, nemo. Tenetur natus tempore amet labore! Atque assumenda quas expedita illum praesentium a sequi officiis! In labore ab odit.",
    },
  ];
  return (
 <div className="posts">
      {posts.map(post=>(
        <Post post={post} key={post.id}/>
      ))}
    </div>
  )
};

export default Posts;