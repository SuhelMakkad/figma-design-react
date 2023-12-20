const Heading = ({ children, className }) => {
  return (
    <h1 className={`text-gray-900 text-4xl font-extrabold ${className}`}>
      {children}
    </h1>
  );
};

export default Heading;
