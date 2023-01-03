import { useState } from 'react';
import Header from '../components/Header';
import AddFriends from '../components/InviteFriends/AddFriends';
import InvitePeople from '../components/InviteFriends/InvitePeople';
import Search from '../components/InviteFriends/Search';

const InviteFriends = () => {
  const [inviteFriendsContentActiveIndex, setInviteFriendsContentActiveIndex] = useState<number>(0);

  return (
    <section className="invite-friends section">
      <div className="invite-friends__container">
        <h2>Invite Friends</h2>
        <div className="invite-friends__board-wrapper">
          <div className="invite-friends__nav d-f jc-sb">
            <button
              className={`invite-friends__item invite-friends__item1 ${
                inviteFriendsContentActiveIndex === 0 && 'invite-friends__item1--active'
              }`}
              onClick={() => setInviteFriendsContentActiveIndex(0)}></button>
            <button
              className={`invite-friends__item invite-friends__item2 ${
                inviteFriendsContentActiveIndex === 1 && 'invite-friends__item2--active'
              }`}
              onClick={() => setInviteFriendsContentActiveIndex(1)}></button>
            <button
              className={`invite-friends__item invite-friends__item3 ${
                inviteFriendsContentActiveIndex === 2 && 'invite-friends__item3--active'
              }`}
              onClick={() => setInviteFriendsContentActiveIndex(2)}></button>
          </div>
          <div className="invite-friends__board ">
            {inviteFriendsContentActiveIndex === 0 ? (
              <AddFriends />
            ) : inviteFriendsContentActiveIndex === 1 ? (
              <InvitePeople />
            ) : (
              <Search />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InviteFriends;
