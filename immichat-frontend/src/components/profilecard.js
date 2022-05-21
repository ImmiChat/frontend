import React from 'react';
import './profilecard.css';

const ProfileCard = () =>{
  const ImgUpload = ({ onChange, src }) => (
    <label htmlFor="photo-upload" className="custom-file-upload fas">
      <div className="img-wrap img-upload">
        <img htmlFor="photo-upload" src={src} alt="" />
      </div>
      <input id="photo-upload" type="file" onChange={onChange} />
    </label>
  );

  const FirstName = ({ onChange, value }) => (
    <div className="field">
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
  );

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

  const Email = ({ onChange, value }) => (
    <div className="field">
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
  );

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

  const Edit = ({ onSubmit, children }) => (
    <div className="card">
      <form onSubmit={onSubmit}>
        <h1>Profile Card</h1>
        {children}
        <button type="submit" className="save">
          Save
          {' '}
        </button>
      </form>
    </div>
  );

  class CardProfile extends React.Component {
        state = {
          file: '',
          imagePreviewUrl:
            'https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true',
          fname: '',
          bio: '',
          lname: '',
          email: '',
          language: '',
          country: '',
          active: 'edit',
        };

        photoUpload = (e) => {
          e.preventDefault();
          const reader = new FileReader();
          const file = e.target.files[0];
          reader.onloadend = () => {
            this.setState({
              file,
              imagePreviewUrl: reader.result,
            });
          };
          reader.readAsDataURL(file);
        };

        editName = (e) => {
          const fname = e.target.value;
          this.setState({
            fname,
          });
        };

        editLastName = (e) => {
            const lname = e.target.value;
            this.setState({
              lname,
            });
          };

          editEmail = (e) => {
            const email = e.target.value;
            this.setState({
              email,
            });
          };

          editLanguage = (e) => {
            const language = e.target.value;
            this.setState({
              language,
            });
          };

          editCountry = (e) => {
            const country = e.target.value;
            this.setState({
              country,
            });
          };

        editBio = (e) => {
          const bio = e.target.value;
          this.setState({
            bio,
          });
        };

        handleSubmit = (e) => {
          e.preventDefault();
          const activeP = this.state.active === 'edit' ? 'profile' : 'edit';
          this.setState({
            active: activeP,
          });
        };

        render() {
          const {
            imagePreviewUrl, fname, bio, lname, email, language, country, active,
          } = this.state;
          return (
            <div>
              {active === 'edit' ? (
                <Edit onSubmit={this.handleSubmit}>
                  <ImgUpload onChange={this.photoUpload} src={imagePreviewUrl} />
                  <FirstName onChange={this.editName} value={fname} />
                  <LastName onChange={this.editLastName} value={lname} />
                  <Email onChange={this.editEmail} value={email} />
                  <Language onChange={this.editLanguage} value={language} />
                  <CountryOfOrigin onChange={this.editCountry} value={country} />
                  <Bio onChange={this.editBio} value={bio} />
                </Edit>
              ) : (
                <Profile
                  onSubmit={this.handleSubmit}
                  src={imagePreviewUrl}
                  fname={fname}
                  lname={lname}
                  email={email}
                  language={language}
                  country={country}
                  bio={bio}
                />
              )}
            </div>
          );
        }
  }

  return (
    <body className="profilecard">
      <CardProfile />
    </body>
  );
}


export default ProfileCard;