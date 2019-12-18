import React from "react";
import Banner from "./../../Components/Banner/banner.js";
import IconCard from "./../../Components/IconCard/iconCard.js";
import SettingsIcon from "./../../assets/imgs/settings-icon.svg";

function Home() {
  const text1 = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`;

  return (
    <div>
      <Banner></Banner>
      <div className="row">
      <div className="col-md-4 col-sm-12 px-md-0">
        <IconCard icon={SettingsIcon} heading="Customizable" text={text1} seq="0"></IconCard>
      </div>
      <div className="col-md-4 col-sm-12 px-md-0">
        <IconCard icon={SettingsIcon} heading="Secure" text={text1} seq="1"></IconCard>
      </div>
      <div className="col-md-4 col-sm-12 px-md-0">
        <IconCard icon={SettingsIcon} heading="Portable" text={text1} seq="2"></IconCard>
      </div>

      </div>
    </div>
  );
}

export default Home;
