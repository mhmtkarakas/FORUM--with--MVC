import React, { useState } from "react";
import AddPostView from "./AddPostView";
import AddPostModel from "./AddPostModel";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddPostController = () => {
    const navigate = useNavigate();
  const model = new AddPostModel();
  const [form, setForm] = useState(model.state);

  // Inputlarin Onchanglerini ele alma
  const onInputChange = (label, value) => {
    var newInputState = { ...form };
    newInputState[label] = value;
    setForm(newInputState);
    console.log(form);
  };

  // form onaylandiginda
  const handleSubmit = (e) => {
    e.preventDefault();

        // formların doluluğunu kontrol etme
        if (!form.title || !form.user || !form.text) {
            alert('Formu Doldurun');
        
          } 
          // eger hepsi doluysa gonderme islemi
          axios.post('http://localhost:3004/post',form)
          .then(res=>navigate('/'))
          
  };

  return <AddPostView onInputChange={onInputChange}
   handleSubmit={handleSubmit} />;
};

export default AddPostController;
