import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import crownFirstPlace from './../assets/images/Crown_1st.png';
import baseCircle from './../assets/images/Base_circle.png';
import maskProfilePick from './../assets/images/Mask-ProfilePic.png';

const Leaderboard = () => {
  return (
    <section className="leaderboard section">
      <div className="leaderboard__container">
        <h2>Leaderboard</h2>
        <div className="leaderboard__board-wrapper">
          <div className="leaderboard__ranking d-f ai-c jc-sb">
            <div className="leaderboard__ranking-place leaderboard__ranking-second-place">
              <div className="leaderboard__ranking-img">
                <img src={crownFirstPlace} alt="crown" />
                <img src={maskProfilePick} alt="mask profile pick" />
                <img src={baseCircle} alt="base circle" />
              </div>
              <p className="leaderboard__ranking-name">Username</p>
              <p className="leaderboard__ranking-score">000000</p>
            </div>
            <div className="leaderboard__ranking-place leaderboard__ranking-first-place">
              <div className="leaderboard__ranking-img leaderboard__ranking-img-first-place">
                <img src={crownFirstPlace} alt="crown" />
                <img src={maskProfilePick} alt="mask profile pick" />
                <img src={baseCircle} alt="base circle" />
              </div>
              <p className="leaderboard__ranking-name">Username</p>
              <p className="leaderboard__ranking-score">000000</p>
            </div>
            <div className="leaderboard__ranking-place leaderboard__ranking-third-place">
              <div className="leaderboard__ranking-img">
                <img src={crownFirstPlace} alt="crown" />
                <img src={maskProfilePick} alt="mask profile pick" />
                <img src={baseCircle} alt="base circle" />
              </div>
              <p className="leaderboard__ranking-name">Username</p>
              <p className="leaderboard__ranking-score">000000</p>
            </div>
          </div>
          <div className="leaderboard__board">
            <div className="leaderboard__board-container">
              <div className="leaderboard__board-row d-g ">
                <div className="leaderboard__board-column">Rank</div>
                <div className="leaderboard__board-column">Username</div>
                <div className="leaderboard__board-column">Highest Score</div>
              </div>
              <div className="leaderboard__board-row d-g ">
                <div className="leaderboard__board-column">
                  <b>1</b>
                </div>
                <div className="leaderboard__board-column d-f ai-c">
                  <img
                    src="https://forkast.news/wp-content/uploads/2022/03/NFT-Avatar.png"
                    alt="avatar"
                  />
                  <b>Nickname</b>
                </div>
                <div className="leaderboard__board-column">
                  <b>xxxxxx</b>
                </div>
              </div>
              <div className="leaderboard__board-row d-g ">
                <div className="leaderboard__board-column">
                  <b>1</b>
                </div>
                <div className="leaderboard__board-column d-f ai-c">
                  <img
                    src="https://forkast.news/wp-content/uploads/2022/03/NFT-Avatar.png"
                    alt="avatar"
                  />
                  <b>Nickname</b>
                </div>
                <div className="leaderboard__board-column">
                  <b>xxxxxx</b>
                </div>
              </div>
              <div className="leaderboard__board-row d-g ">
                <div className="leaderboard__board-column">
                  <b>1</b>
                </div>
                <div className="leaderboard__board-column d-f ai-c">
                  <img
                    src="https://forkast.news/wp-content/uploads/2022/03/NFT-Avatar.png"
                    alt="avatar"
                  />
                  <b>Nickname</b>
                </div>
                <div className="leaderboard__board-column">
                  <b>xxxxxx</b>
                </div>
              </div>
              <div className="leaderboard__board-row d-g ">
                <div className="leaderboard__board-column">
                  <b>1</b>
                </div>
                <div className="leaderboard__board-column d-f ai-c">
                  <img
                    src="https://forkast.news/wp-content/uploads/2022/03/NFT-Avatar.png"
                    alt="avatar"
                  />
                  <b>Nickname</b>
                </div>
                <div className="leaderboard__board-column">
                  <b>xxxxxx</b>
                </div>
              </div>
              <div className="leaderboard__board-row d-g ">
                <div className="leaderboard__board-column">
                  <b>1</b>
                </div>
                <div className="leaderboard__board-column d-f ai-c">
                  <img
                    src="https://forkast.news/wp-content/uploads/2022/03/NFT-Avatar.png"
                    alt="avatar"
                  />
                  <b>Nickname</b>
                </div>
                <div className="leaderboard__board-column">
                  <b>xxxxxx</b>
                </div>
              </div>
              <div className="leaderboard__board-row d-g ">
                <div className="leaderboard__board-column">
                  <b>1</b>
                </div>
                <div className="leaderboard__board-column d-f ai-c">
                  <img
                    src="https://forkast.news/wp-content/uploads/2022/03/NFT-Avatar.png"
                    alt="avatar"
                  />
                  <b>Nickname</b>
                </div>
                <div className="leaderboard__board-column">
                  <b>xxxxxx</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leaderboard;
