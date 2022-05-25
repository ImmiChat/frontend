const Email = ({ onChange, value }) => (
    <div className="field">
      <div id="first">
      <label htmlFor="email">Email:</label>
      <input
        id="email"
        type="text"
        onChange={onChange}
        maxLength="35"
        value={value}
        placeholder="Email"
        required
      />
      </div>
    </div>
);

export default Email;