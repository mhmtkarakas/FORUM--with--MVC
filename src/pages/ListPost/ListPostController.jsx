import axios from "axios";
import React, { useEffect, useState } from "react";
import ListPostView from "./ListPostView";

const ListPostController = () => {
  const [blogData, setBlogData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [userPosts, setUserPosts] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:3004/post")
      .then((res) => setBlogData(res.data));
  }, []);
  // Modal Fonksiyonlari
  
  const showUserPost =(parametre)=>{
         // console.log(param);
          setShowModal(!showModal);
      setUserPosts(blogData.filter((post)=>post.user === parametre))

  }


  return <ListPostView 
  blogData={blogData} 
  showModal={showModal} 
  showUserPost={showUserPost }
  userPosts={userPosts} />
};

export default ListPostController;
