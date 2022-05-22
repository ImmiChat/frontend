const CountryOfOrigin = ({ onChange, value }) => (
    <div className="field">
      <label htmlFor="status">Country of Origin:</label>
      <input
        id="country"
        type="text"
        onChange={onChange}
        maxLength="35"
        value={value}
        placeholder="Country of Origin"
        required
      />
    </div>
);

export default CountryOfOrigin;