const Bio = ({ onChange, value }) => (
    <div className="field">
      <div id="last">
        <div className="theBio">
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
      </div>
    </div>
);

export default Bio;