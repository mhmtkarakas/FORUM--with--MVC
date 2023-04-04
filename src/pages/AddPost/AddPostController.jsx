import React, {useState} from 'react'
import AddPostView from './AddPostView';
import AddPostModel from './AddPostModel';


const AddPostController = () => {
    const model = new AddPostModel()
    const [form,setForm] = useState(model.state);

   // Inputlarin Onchanglerini ele alma
    const onInputChange =(label,value) =>{
        var newInputState = {...form}
        newInputState[label] = value;
        setForm(newInputState)
        console.log(form);
    };

    return <AddPostView onInputChange={onInputChange} />
}

export default AddPostController