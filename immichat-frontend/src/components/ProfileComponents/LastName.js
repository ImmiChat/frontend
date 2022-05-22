const LastName = ({ onChange, value }) => (
    <div className="field">
      <label htmlFor="name">Last Name:</label>
      <input
        id="lname"
        type="text"
        onChange={onChange}
        maxLength="25"
        value={value}
        placeholder="Last Name"
        required
      />
    </div>
);

export default LastName;