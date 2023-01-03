import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

const Profile = () => {
  return (
    <section className="profile section">
      <div className="profile__container">
        <div className="profile__row ">
          <div className="profile__column">{/* <img src={addPicture} alt="avatar" /> */}</div>
          <div className="profile__column">
            <p className="profile__name">Unnamed</p>
            <p className="profile__score">Score 0</p>
            <p className="profile__address">Copy address [0xb26...136d]</p>
          </div>
          <p className="profile__logout"></p>
          <div className="profile__social-rows">
            <div className="profile__social-row    d-f ai-c">
              <div className="profile__social-row-right profile__social-row-right--connect"></div>
            </div>
            <div className="profile__social-row d-f ai-c">
              <div className="profile__social-row-right profile__social-row-right--connected ">
                {/* <span>Sample_Unlink</span> */}
              </div>
            </div>
            <div className="profile__social-row   d-f ai-c">
              <div className="profile__social-row-right profile__social-row-right--connect"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
