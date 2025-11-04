import video from "../../assets/Frame 36.png";

const ImageViewer = () => {
  return (
    <div className="flex justify-center items-center">
      <img src={video} alt="Image" className="max-w-full h-auto" />
    </div>
  );
};

export default ImageViewer;

