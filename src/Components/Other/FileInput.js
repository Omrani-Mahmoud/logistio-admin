import React from 'react'
import ImageUploader from 'react-images-upload';

function FileInput() {

    const[pictures,setpictures] = React.useState([]);


    const onDrop = (picture) =>{
        setpictures([...picture]);
    }
    return (
        <ImageUploader
        withIcon={true}
        buttonText='Choose images'
        onChange={onDrop}
        imgExtension={['.jpg', '.gif', '.png', '.gif']}
        singleImage={true}
        withPreview={true}
        label="Your product image"
        maxFileSize={5242880}
    />
    )
}

export default FileInput
