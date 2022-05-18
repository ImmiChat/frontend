import { useEffect } from 'react';
import './translate.css';

const LanguageChange = () => {
  let duplicateGoogleTranslateCounter = 0;

  function googleTranslateElementInit() {
    if (duplicateGoogleTranslateCounter === 0) {
      new window.google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
    }
    duplicateGoogleTranslateCounter++;
  }

  useEffect(() => {
    const addScript = document.createElement('script');
    addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);

  return (
    <div id="google_translate_element" />
  );
};

export default LanguageChange;
