import { UploadDropzone } from "@bytescale/upload-widget-react";
export default function FilePick(){
  const options = {
    apiKey: "free", // Get API key: https://www.bytescale.com/get-started
    maxFileCount: 1,
    showFinishButton: true,
    styles: {
      colors: {
        primary: "#377dff"
      }
    }
  };
  //TODO We need to work on the APIS i dont have sufficient knowledge to use them
  return(
    <UploadDropzone options={options}
                    onUpdate={({ uploadedFiles }) => console.log(uploadedFiles.map(x => x.fileUrl).join("\n"))}
                    onComplete={files => alert(files.map(x => x.fileUrl).join("\n"))}
                    width="400px"
                    height="400px" />
  )
}
