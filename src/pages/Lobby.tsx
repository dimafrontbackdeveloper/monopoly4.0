import React, { useEffect, useRef, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

const Lobby = () => {
  const [toggleAreYouReadyPopup, openPrivateGamePopup, openCreateGamePopup] =
    useOutletContext<any>();

  return (
    <section className="section lobby">
      <div className="lobby__container">
        <div className="lobby__top d-f jc-sb ai-c">
          <div className="lobby__top-left">
            <h2>Lobby</h2>
          </div>
          <div className="lobby__top-right d-f ai-c">
            <h3 className="online d-f ai-c">
              Users online: <b>X,XXX</b>
            </h3>
            <button onClick={openCreateGamePopup}></button>
          </div>
        </div>
        <div className="lobby__board">
          <div className="lobby__board-container">
            <div className="lobby__board-row d-g">
              <div className="lobby__board-column">
                <b>Username</b>
              </div>
              <div className="lobby__board-column">
                <b>Score</b>
              </div>
              <div className="lobby__board-column">
                <b>Funds</b>
              </div>
              <div className="lobby__board-column">
                <b>Status</b>
              </div>
            </div>
            <div className="lobby__board-row d-g ">
              <div className="lobby__board-column d-f ai-c">
                <img
                  src="https://forkast.news/wp-content/uploads/2022/03/NFT-Avatar.png"
                  alt="avatar"
                />
                <b>Nickname</b>
              </div>
              <div className="lobby__board-column">
                <b>25000</b>
              </div>
              <div className="lobby__board-column">
                <b>0.7 ETH</b>
              </div>
              <div className="lobby__board-column">
                <button
                  className="lobby__board-button lobby__board-button--play"
                  onClick={() => toggleAreYouReadyPopup(true)}></button>
              </div>
            </div>
            <div className="lobby__board-row d-g">
              <div className="lobby__board-column d-f ai-c">
                <img
                  src="https://forkast.news/wp-content/uploads/2022/03/NFT-Avatar.png"
                  alt="avatar"
                />
                <b>Nickname</b>
              </div>
              <div className="lobby__board-column">
                <b>250</b>
              </div>
              <div className="lobby__board-column">
                <b>0.72 ETH</b>
              </div>
              <div className="lobby__board-column">
                <button
                  className="lobby__board-button lobby__board-button--private"
                  onClick={openPrivateGamePopup}></button>
              </div>
            </div>
            <div className="lobby__board-row d-g">
              <div className="lobby__board-column d-f ai-c">
                <img
                  src="https://forkast.news/wp-content/uploads/2022/03/NFT-Avatar.png"
                  alt="avatar"
                />
                <b>Nickname</b>
              </div>
              <div className="lobby__board-column">
                <b>250</b>
              </div>
              <div className="lobby__board-column">
                <b>0.72 ETH</b>
              </div>
              <div className="lobby__board-column">
                <button
                  className="lobby__board-button lobby__board-button--private"
                  onClick={openPrivateGamePopup}></button>
              </div>
            </div>
            <div className="lobby__board-row d-g">
              <div className="lobby__board-column d-f ai-c">
                <img
                  src="https://forkast.news/wp-content/uploads/2022/03/NFT-Avatar.png"
                  alt="avatar"
                />
                <b>Nickname</b>
              </div>
              <div className="lobby__board-column">
                <b>250</b>
              </div>
              <div className="lobby__board-column">
                <b>0.72 ETH</b>
              </div>
              <div className="lobby__board-column">
                <button
                  className="lobby__board-button lobby__board-button--private"
                  onClick={openPrivateGamePopup}></button>
              </div>
            </div>
            <div className="lobby__board-row d-g">
              <div className="lobby__board-column d-f ai-c">
                <img
                  src="https://forkast.news/wp-content/uploads/2022/03/NFT-Avatar.png"
                  alt="avatar"
                />
                <b>Nickname</b>
              </div>
              <div className="lobby__board-column">
                <b>250</b>
              </div>
              <div className="lobby__board-column">
                <b>0.72 ETH</b>
              </div>
              <div className="lobby__board-column">
                <button
                  className="lobby__board-button lobby__board-button--private"
                  onClick={openPrivateGamePopup}></button>
              </div>
            </div>
            <div className="lobby__board-row d-g">
              <div className="lobby__board-column d-f ai-c">
                <img
                  src="https://forkast.news/wp-content/uploads/2022/03/NFT-Avatar.png"
                  alt="avatar"
                />
                <b>Nickname</b>
              </div>
              <div className="lobby__board-column">
                <b>250</b>
              </div>
              <div className="lobby__board-column">
                <b>0.72 ETH</b>
              </div>
              <div className="lobby__board-column">
                <button
                  className="lobby__board-button lobby__board-button--private"
                  onClick={openPrivateGamePopup}></button>
              </div>
            </div>
            <div className="lobby__board-row d-g">
              <div className="lobby__board-column d-f ai-c">
                <img
                  src="https://forkast.news/wp-content/uploads/2022/03/NFT-Avatar.png"
                  alt="avatar"
                />
                <b>Nickname</b>
              </div>
              <div className="lobby__board-column">
                <b>250</b>
              </div>
              <div className="lobby__board-column">
                <b>0.72 ETH</b>
              </div>
              <div className="lobby__board-column">
                <button
                  className="lobby__board-button lobby__board-button--private"
                  onClick={openPrivateGamePopup}></button>
              </div>
            </div>
            <div className="lobby__board-row d-g">
              <div className="lobby__board-column d-f ai-c">
                <img
                  src="https://forkast.news/wp-content/uploads/2022/03/NFT-Avatar.png"
                  alt="avatar"
                />
                <b>Nickname</b>
              </div>
              <div className="lobby__board-column">
                <b>250</b>
              </div>
              <div className="lobby__board-column">
                <b>0.72 ETH</b>
              </div>
              <div className="lobby__board-column">
                <button
                  className="lobby__board-button lobby__board-button--private"
                  onClick={openPrivateGamePopup}></button>
              </div>
            </div>
            <div className="lobby__board-row d-g">
              <div className="lobby__board-column d-f ai-c">
                <img
                  src="https://forkast.news/wp-content/uploads/2022/03/NFT-Avatar.png"
                  alt="avatar"
                />
                <b>Nickname</b>
              </div>
              <div className="lobby__board-column">
                <b>250</b>
              </div>
              <div className="lobby__board-column">
                <b>0.72 ETH</b>
              </div>
              <div className="lobby__board-column">
                <button
                  className="lobby__board-button lobby__board-button--private"
                  onClick={openPrivateGamePopup}></button>
              </div>
            </div>
            <div className="lobby__board-row d-g">
              <div className="lobby__board-column d-f ai-c">
                <img
                  src="https://forkast.news/wp-content/uploads/2022/03/NFT-Avatar.png"
                  alt="avatar"
                />
                <b>Nickname</b>
              </div>
              <div className="lobby__board-column">
                <b>250</b>
              </div>
              <div className="lobby__board-column">
                <b>0.72 ETH</b>
              </div>
              <div className="lobby__board-column">
                <button
                  className="lobby__board-button lobby__board-button--private"
                  onClick={openPrivateGamePopup}></button>
              </div>
            </div>
            <div className="lobby__board-row d-g">
              <div className="lobby__board-column d-f ai-c">
                <img
                  src="https://forkast.news/wp-content/uploads/2022/03/NFT-Avatar.png"
                  alt="avatar"
                />
                <b>Nickname</b>
              </div>
              <div className="lobby__board-column">
                <b>250</b>
              </div>
              <div className="lobby__board-column">
                <b>0.72 ETH</b>
              </div>
              <div className="lobby__board-column">
                <button
                  className="lobby__board-button lobby__board-button--private"
                  onClick={openPrivateGamePopup}></button>
              </div>
            </div>
            <div className="lobby__board-row d-g">
              <div className="lobby__board-column d-f ai-c">
                <img
                  src="https://forkast.news/wp-content/uploads/2022/03/NFT-Avatar.png"
                  alt="avatar"
                />
                <b>Nickname</b>
              </div>
              <div className="lobby__board-column">
                <b>250</b>
              </div>
              <div className="lobby__board-column">
                <b>0.72 ETH</b>
              </div>
              <div className="lobby__board-column">
                <button
                  className="lobby__board-button lobby__board-button--private"
                  onClick={openPrivateGamePopup}></button>
              </div>
            </div>
            <div className="lobby__board-row d-g">
              <div className="lobby__board-column d-f ai-c">
                <img
                  src="https://forkast.news/wp-content/uploads/2022/03/NFT-Avatar.png"
                  alt="avatar"
                />
                <b>Nickname</b>
              </div>
              <div className="lobby__board-column">
                <b>250</b>
              </div>
              <div className="lobby__board-column">
                <b>0.72 ETH</b>
              </div>
              <div className="lobby__board-column">
                <button
                  className="lobby__board-button lobby__board-button--private"
                  onClick={openPrivateGamePopup}></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lobby;
