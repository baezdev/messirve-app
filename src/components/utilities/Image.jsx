const Image = ({ src, alt }) => {
  return (
    <div className="w-full mb-6">
      <img src={src} alt={alt} />
    </div>
  );
};

export default Image;
