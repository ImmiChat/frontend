import React from 'react';
import Bio from './ProfileComponents/Bio';
import CountryOfOrigin from './ProfileComponents/Country';
import Edit from './ProfileComponents/Edit';
import Email from './ProfileComponents/Email';
import FirstName from './ProfileComponents/FirstName';
import ImgUpload from './ProfileComponents/ImageUpload';
import Language from './ProfileComponents/Language';
import LastName from './ProfileComponents/LastName';
import Profile from './ProfileComponents/UserProfile';

  <div>
    <ImgUpload />
    <FirstName />
    <LastName />
    <Email />
    <Language />
    <CountryOfOrigin />
    <Bio />
    <Profile />
    <Edit />
  </div>;

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

export default CardProfile;
