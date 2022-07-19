const Image = ({ src, alt, width, className }) => {
  return (
    <div className={`w-full mb-6 ${className}`}>
      <img src={src} alt={alt} width={width} className="mx-auto rounded-md"/>
    </div>
  );
};

export default Image;
