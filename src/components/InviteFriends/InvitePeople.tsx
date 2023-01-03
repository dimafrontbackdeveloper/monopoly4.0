import React from 'react';

const InvitePeople = () => {
  return (
    <div className="invite-friends__board-invite-people">
      <div className="invite-friends__board-container">
        <h3>Send a URL to people you know. and they can become your friends</h3>
        <div className="invite-friends__board-invite-people-imgs d-f ai-c jc-c ">
          <div className="invite-friends__board-invite-people-img"></div>
          <div className="invite-friends__board-invite-people-img"></div>
          <div className="invite-friends__board-invite-people-img"></div>
        </div>
      </div>
      <div className="invite-friends__board-invite-people-link">
        <p>full link for invitatiomn</p>
      </div>
    </div>
  );
};

export default InvitePeople;
