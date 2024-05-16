import { useDispatch } from "react-redux";
import { useState } from "react";

export const AddMemePage = () => {
  const dispatch = useDispatch();
  const [memeTitle, setMemeTitle] = useState("");
  const [meme, setMeme] = useState(null);
  const [newMemeAdded, setNewMemeAdded] = useState(false);

  const handleTitleChange = (event) => {
    setMemeTitle(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setMeme(file);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await dispatch({
      type: "ADD_MEME",
      payload: {
        id: `ID_${Date.now()}`,
        title: memeTitle,
        preview: [URL.createObjectURL(meme)],
        upvotes: 0,
        downvotes: 0,
        favourite: false,
      },
    });
    setNewMemeAdded(true);
    setTimeout(() => setNewMemeAdded(false), 5000);
  };
  return (
    <div>
      <h1>Add meme</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={handleTitleChange} />
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <button type="submit">Upload</button>
      </form>
      {newMemeAdded && <p>Your meme succesfully added!</p>}
    </div>
  );
};
