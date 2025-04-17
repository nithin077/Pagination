export default UserCard = ({ firstName, lastName, image, gender, age }) => {
  return (
    <div className="user-card">
      <img src={image} alt="firstName" className="user-image" />
      <span className="full-name">{firstName + " " + lastName}</span>
      <span>{gender}</span>
      <span>{age}</span>
    </div>
  );
};
