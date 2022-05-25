const FirstName = ({ onChange, value }) => (
  <div className="field">
    <div id="first">
    <label htmlFor="name">First Name:</label>
    <input
      id="fname"
      type="text"
      onChange={onChange}
      maxLength="25"
      value={value}
      placeholder="First Name"
      required
    />
    </div>
  </div>
);

export default FirstName;