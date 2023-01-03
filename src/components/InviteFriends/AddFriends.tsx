import React, { FC, useEffect, useRef, useState } from 'react';

const AddFriends = () => {
  return (
    <div className="invite-friends__board-add-friends">
      <div className="invite-friends__board-container">
        <input
          className="invite-friends__board-add-friends-search"
          type="text"
          placeholder="username"
        />
        <div className="invite-friends__board-add-friends-users">
          <div className="invite-friends__board-add-friends-row d-g ai-c">
            <div className="invite-friends__board-add-friends-column">
              <img
                src="https://beebom.com/wp-content/uploads/2022/02/Featured.jpg?w=750&quality=75"
                alt="avatar"
              />
            </div>
            <div className="invite-friends__board-add-friends-column invite-friends__board-add-friends-column-online">
              <span>User</span>
            </div>
            <div className="invite-friends__board-add-friends-column">
              <span>Score</span>
            </div>
            <div className="invite-friends__board-add-friends-column invite-friends__board-add-friends-column-add"></div>
          </div>
          <div className="invite-friends__board-add-friends-row d-g ai-c">
            <div className="invite-friends__board-add-friends-column">
              <img
                src="https://beebom.com/wp-content/uploads/2022/02/Featured.jpg?w=750&quality=75"
                alt="avatar"
              />
            </div>
            <div className="invite-friends__board-add-friends-column invite-friends__board-add-friends-column-offline">
              <span>User</span>
            </div>
            <div className="invite-friends__board-add-friends-column">
              <span>Score</span>
            </div>
            <div className="invite-friends__board-add-friends-column invite-friends__board-add-friends-column-delete"></div>
          </div>
          <div className="invite-friends__board-add-friends-row d-g ai-c">
            <div className="invite-friends__board-add-friends-column">
              <img
                src="https://beebom.com/wp-content/uploads/2022/02/Featured.jpg?w=750&quality=75"
                alt="avatar"
              />
            </div>
            <div className="invite-friends__board-add-friends-column invite-friends__board-add-friends-column-offline">
              <span>User</span>
            </div>
            <div className="invite-friends__board-add-friends-column">
              <span>Score</span>
            </div>
            <div className="invite-friends__board-add-friends-column invite-friends__board-add-friends-column-delete"></div>
          </div>
          <div className="invite-friends__board-add-friends-row d-g ai-c">
            <div className="invite-friends__board-add-friends-column">
              <img
                src="https://beebom.com/wp-content/uploads/2022/02/Featured.jpg?w=750&quality=75"
                alt="avatar"
              />
            </div>
            <div className="invite-friends__board-add-friends-column invite-friends__board-add-friends-column-offline">
              <span>User</span>
            </div>
            <div className="invite-friends__board-add-friends-column">
              <span>Score</span>
            </div>
            <div className="invite-friends__board-add-friends-column invite-friends__board-add-friends-column-delete"></div>
          </div>
          <div className="invite-friends__board-add-friends-row d-g ai-c">
            <div className="invite-friends__board-add-friends-column">
              <img
                src="https://beebom.com/wp-content/uploads/2022/02/Featured.jpg?w=750&quality=75"
                alt="avatar"
              />
            </div>
            <div className="invite-friends__board-add-friends-column invite-friends__board-add-friends-column-offline">
              <span>User</span>
            </div>
            <div className="invite-friends__board-add-friends-column">
              <span>Score</span>
            </div>
            <div className="invite-friends__board-add-friends-column invite-friends__board-add-friends-column-delete"></div>
          </div>
          <div className="invite-friends__board-add-friends-row d-g ai-c">
            <div className="invite-friends__board-add-friends-column">
              <img
                src="https://beebom.com/wp-content/uploads/2022/02/Featured.jpg?w=750&quality=75"
                alt="avatar"
              />
            </div>
            <div className="invite-friends__board-add-friends-column invite-friends__board-add-friends-column-offline">
              <span>User</span>
            </div>
            <div className="invite-friends__board-add-friends-column">
              <span>Score</span>
            </div>
            <div className="invite-friends__board-add-friends-column invite-friends__board-add-friends-column-delete"></div>
          </div>
          <div className="invite-friends__board-add-friends-row d-g ai-c">
            <div className="invite-friends__board-add-friends-column">
              <img
                src="https://beebom.com/wp-content/uploads/2022/02/Featured.jpg?w=750&quality=75"
                alt="avatar"
              />
            </div>
            <div className="invite-friends__board-add-friends-column invite-friends__board-add-friends-column-offline">
              <span>User</span>
            </div>
            <div className="invite-friends__board-add-friends-column">
              <span>Score</span>
            </div>
            <div className="invite-friends__board-add-friends-column invite-friends__board-add-friends-column-delete"></div>
          </div>
          <div className="invite-friends__board-add-friends-row d-g ai-c">
            <div className="invite-friends__board-add-friends-column">
              <img
                src="https://beebom.com/wp-content/uploads/2022/02/Featured.jpg?w=750&quality=75"
                alt="avatar"
              />
            </div>
            <div className="invite-friends__board-add-friends-column invite-friends__board-add-friends-column-offline">
              <span>User</span>
            </div>
            <div className="invite-friends__board-add-friends-column">
              <span>Score</span>
            </div>
            <div className="invite-friends__board-add-friends-column invite-friends__board-add-friends-column-delete"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFriends;
