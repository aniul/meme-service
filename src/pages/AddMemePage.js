import { useDispatch } from "react-redux";
import { useState } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import styles from "./AddMemePage.module.scss";

const initialData = { file: null, title: "" };

export const AddMemePage = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(initialData);
  const [message, setMessage] = useState("");

  const clearForm = () => {
    setMessage("");
    setFormData(initialData);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!formData.file || !formData.title) {
      setMessage("You have to add file and title first");
      return;
    }
    await dispatch({
      type: "ADD_MEME",
      payload: {
        id: `ID_${Date.now()}`,
        title: formData.title,
        preview: [URL.createObjectURL(formData.file)],
        upvotes: 0,
        downvotes: 0,
        favourite: false,
      },
    });
    setMessage("Your meme succesfully added!");
    setTimeout(clearForm, 5000);
  };

  const handleChange = (event) => {
    const { name, type } = event.target;
    const value = type === "file" ? event.target.files[0] : event.target.value;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const deleteFile = () => {
    setFormData((prevState) => ({
      ...prevState,
      file: null,
    }));
  };

  return (
    <div className={styles.form}>
      <h1>Add meme</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="file"
            className={`${styles["file-label"]} font-uppercase ${
              formData.file ? "uploaded" : ""
            }`}
          >
            File of your meme:
          </label>
          {!formData.file ? (
            <input
              key={formData.file}
              id="file"
              name="file"
              type="file"
              accept="image/*"
              onChange={handleChange}
            />
          ) : (
            <p>
              <span className="text-small">{formData.file.name}</span>
              <DeleteOutlineIcon onClick={deleteFile} />
            </p>
          )}
        </div>
        <div>
          <label htmlFor="title" className="font-uppercase">
            Title for your meme:
          </label>
          <input
            id="title"
            name="title"
            type="text"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit" className="font-uppercase">
            Upload
          </button>
        </div>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
};
