const Language = ({ onChange, value }) => (
    <div className="field">
      <div id="last">
      <label htmlFor="status">Language:</label>
      <input
        id="language"
        type="text"
        onChange={onChange}
        maxLength="35"
        value={value}
        placeholder="Language"
        required
      />
      </div>
    </div>
);

export default Language;