const LastName = ({ onChange, value }) => (
    <div className="field">
      <div id="last">
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
    </div>
);

export default LastName;