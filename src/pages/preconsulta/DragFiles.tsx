import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const DragFiles = () => {
  const fileTypes = ["JPG", "PNG", "GIF"];
  const [file, setFile] = useState(null);

  const handleChange = (image) => {
    setFile(image);
    console.log(file);
  };
  return (
    <>
      <FileUploader
        handleChange={handleChange}
        className="w-full"
        name="file"
        label="Arrastra tus archivos aqui"
        multiple={true}
        types={fileTypes}
        required={true}
      />
    </>
  );
};

export default DragFiles;
