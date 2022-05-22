const Profile = ({
    onSubmit, src, fname, bio, lname, email, language, country
  }) => (
    <div className="card">
      <form onSubmit={onSubmit}>
        <h1>Profile Card</h1>
        <label className="custom-file-upload fas">
          <div className="img-wrap">
            <img htmlFor="photo-upload" src={src} alt="" />
          </div>
        </label>
        <div className="name">{fname}</div>
        <div className="name">{lname}</div>
        <div className="email">{email}</div>
        <div className="language">{language}</div>
        <div className="country">{country}</div>
        <div className="bio">{bio}</div>
        <button type="submit" className="edit">
          Edit Profile
          {' '}
        </button>
      </form>
    </div>
);

export default Profile;