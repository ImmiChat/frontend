const Bio = ({ onChange, value }) => (
    <div className="field">
      <label htmlFor="status">Bio/Status:</label>
      <input
        id="Bio"
        type="text"
        onChange={onChange}
        maxLength="35"
        value={value}
        placeholder="It's a nice day!"
        required
      />
    </div>
);

export default Bio;