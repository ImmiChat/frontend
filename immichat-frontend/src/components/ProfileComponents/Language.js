const Language = ({ onChange, value }) => (
    <div className="field">
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
);

export default Language;