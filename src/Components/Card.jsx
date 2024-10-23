const Card = ({ title, text, children }) => {
  //   console.log(props);
  //   const { title, text } = props;
  console.log(title, text, children);
  return (
    <div className="card-container">
      <h3>{title}</h3>
      <p>{text}</p>
      {children}
    </div>
  );
};

export default Card;
