import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const OtherPage = () => {
  const { t, i18n } = useTranslation();


  return (
    <div>
      <p>{t("login")}</p>
    </div>
  );
};

export default OtherPage;
