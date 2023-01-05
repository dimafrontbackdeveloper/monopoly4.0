import React, { ChangeEvent, useState } from 'react';
import { Outlet, useOutletContext } from 'react-router-dom';
import { useAppSelector, useOutside } from '../hooks/hooks';
import Header from './Header';
import Navbar from './Navbar';
import transactionSuccessful from './../assets/images/transaction-successful.png';
import arrowLeft from './../assets/images/Arrow-.png';
import { ethers } from 'ethers';

const Layout2 = () => {
  const [
    refDepositFunds,
    isShowDepositFunds,
    setIsShowDepositFunds,
    toggleDepositFundsPopup,
    refApproveDeposit,
    isShowApproveDeposit,
    setIsShowApproveDeposit,
    toggleApproveDepositPopup,
    refTransactionSuccess,
    isShowTransactionSuccess,
    setIsShowTransactionSuccess,
    toggleTransactionSuccessPopup,
    refAddFunds,
    isShowAddFunds,
    setIsShowAddFunds,
    toggleAddFundsPopup,
    refTotalBalance,
    isShowTotalBalance,
    setIsShowTotalBalance,
    toggleTotalBalancePopup,
  ] = useOutletContext<any>();

  // are you ready popup
  const {
    ref: refAreYouReady,
    isShow: isShowAreYouReady,
    setIsShow: setIsShowAreYouReady,
  } = useOutside(false);

  // private game popup
  const {
    ref: refPrivateGamePopup,
    isShow: isShowPrivateGamePopup,
    setIsShow: setIsShowPrivateGamePopup,
  } = useOutside(false);

  // create room popup
  const {
    ref: refCreateYourRoom,
    isShow: isShowCreateYourRoom,
    setIsShow: setIsShowCreateYourRoom,
  } = useOutside(false);

  const toggleAreYouReadyPopup = (isCloseOrOpen: boolean) => {
    setIsShowAreYouReady(isCloseOrOpen);
  };

  const openPrivateGamePopup = () => {
    setIsShowPrivateGamePopup(true);
  };

  const openCreateGamePopup = () => {
    setIsShowCreateYourRoom(true);
  };

  // delete all
  const delete1 = () => {
    toggleDepositFundsPopup(false);
    toggleAddFundsPopup(true);
  };

  const delete2 = () => {
    toggleAddFundsPopup(false);
    toggleTransactionSuccessPopup(true);
  };

  const delete3 = () => {
    toggleTransactionSuccessPopup(false);
    toggleApproveDepositPopup(true);
  };

  return (
    <>
      <div
        className={`deposit-funds-popup popup d-f ai-c jc-c ${
          isShowDepositFunds && 'popup--active'
        }`}>
        <div className="deposit-funds-popup__container" ref={refDepositFunds}>
          <div
            className="close-popup"
            onClick={() => {
              toggleDepositFundsPopup(false);
            }}></div>
          <h3>Deposit funds</h3>
          <p className="deposit-funds-popup__amount">Amount in ETH</p>
          <input type="text" placeholder="Enter Amount in ETH" />
          <p className="deposit-funds-popup__total-price d-f jc-sb ai-c">
            <span>Total price</span>
            <span>11 ETH</span>
          </p>
          <p className="deposit-funds-popup__price-usd">11</p>
          <button></button>
        </div>
      </div>

      <div
        className={`approve-deposit-popup popup d-f ai-c jc-c ${
          isShowApproveDeposit && 'popup--active'
        }`}>
        <div className="approve-deposit-popup__container" ref={refApproveDeposit}>
          <div className="close-popup" onClick={() => toggleApproveDepositPopup(false)}></div>
          <h3>Approve deposit</h3>
          <p className="approve-deposit-popup__amount">Amount deposited</p>
          <input type="text" value={`11 ETH`} />
          <p className="approve-deposit-popup__total-price d-f jc-sb ai-c">
            <span>Total price</span>
            <span> ETH</span>
          </p>
          <p className="approve-deposit-popup__price-usd"> 11</p>
          <div className="approve-deposit-popup__bottom">
            <h4>Go to your wallet</h4>
            <p>Approved this purchase from your wallet</p>
          </div>
        </div>
      </div>

      <div
        className={`transaction-success-popup popup d-f ai-c jc-c ${
          isShowTransactionSuccess && 'popup--active'
        }`}>
        <div className="transaction-success-popup__container" ref={refTransactionSuccess}>
          <div className="close-popup" onClick={() => toggleTransactionSuccessPopup(false)}></div>
          <h3>Transaction Successful</h3>
          <p>You deposited eth</p>
          <div className="transaction-success-popup__img">
            <img src={transactionSuccessful} alt="transaction success" />
          </div>
          <a href="#">View on Etherscan</a>
          <button onClick={delete3}></button>
        </div>
      </div>

      <div className={`add-funds-popup popup d-f ai-c jc-c ${isShowAddFunds && 'popup--active'}`}>
        <div className="add-funds-popup__container" ref={refAddFunds}>
          <div className="close-popup" onClick={() => toggleAddFundsPopup(false)}></div>
          <h3>Add funds</h3>
          <div className="add-funds-popup__need">
            You need 0.8 eth <span>+ gas fees</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sint quibusdam autem.
            Fugit natus, quod enim iusto earum
          </p>
          <div className="add-funds-popup__wallet-balance d-f jc-sb ai-c">
            <span>Your ETH wallet:</span>
            <span>Balance: 0.0176 eth</span>
          </div>
          <div className="ladd-funds-popup__link">
            <div className="add-funds-popup__link-container">full link for invitation</div>
          </div>
          <button onClick={delete2}></button>
        </div>
      </div>

      <div
        className={`total-balance-popup popup d-f ai-c jc-c ${
          isShowTotalBalance && 'popup--active'
        }`}>
        <div className="total-balance-popup__container" ref={refTotalBalance}>
          <div className="close-popup" onClick={() => toggleTotalBalancePopup(false)}></div>
          <h3>Total Balance</h3>
          <div className="total-balance-popup__need"> ETH</div>
          <p className="total-balance-popup__enter-amount">Enter the amount you want to withdraw</p>
          <input
            className="total-balance-popup__enter-amount-input"
            type="text"
            placeholder="Enter Amount in ETH"
          />
          <p className="total-balance-popup__total-price d-f jc-sb ai-c">
            <span>Total price</span>
            <span> ETH</span>
          </p>
          <p className="total-balance-popup__price-usd"></p>
          <div className="total-balance-popup__bottom">
            <p>The amount will be withdraw to your account of MetaMask connected</p>
            <p>
              <b>Send to a different wallet</b>
            </p>
          </div>
          <input className="total-balance-popup__different-wallet" placeholder="full link wallet" />
          <button></button>
        </div>
      </div>

      <div
        className={`are-you-ready-popup popup d-f ai-c jc-c ${
          isShowAreYouReady && 'popup--active'
        }`}>
        <div className="are-you-ready-popup__container" ref={refAreYouReady}>
          <h2>
            <span>Are</span>
            <span>You</span>
            <span>Ready?</span>
          </h2>
          <button>Play Now 0.3 ETH</button>
        </div>
      </div>

      <div
        className={`lobby__private-game-popup popup d-f ai-c jc-c ${
          isShowPrivateGamePopup && 'popup--active'
        }`}>
        <div className="lobby__private-game-popup-container" ref={refPrivateGamePopup}>
          <h2>Private Game</h2>
          <input type="text" placeholder="Enter Code" />
          <button></button>
        </div>
      </div>

      <div
        className={`lobby__private-room-popup popup d-f ai-c jc-c ${
          isShowCreateYourRoom && 'popup--active'
        }`}>
        <img className="lobby__private-room-popup-arrow-left" src={arrowLeft} alt="arrow to left" />
        <div className="lobby__private-room-popup-container " ref={refCreateYourRoom}>
          <h2>Create Your Room</h2>
          <div className="lobby__private-room-popup-content">
            <h2 className="lobby__private-room-popup-price">0.0</h2>
            <p className="lobby__private-room-popup-min-price">minimum 0.008 eth</p>
            <div className="lobby__private-room-popup-make-private">
              <div className="lobby__private-room-popup-checkbox"></div>
              <label htmlFor="lobby__private-room-popup-make-private">Make it private</label>
            </div>
            <p className="lobby__private-room-popup-make-private-code">0000000000</p>
            <p className="lobby__private-room-popup-make-private-link">
              <span>full link of game for play</span>
            </p>
            <div className="lobby__private-room-popup-make-private-button"></div>
          </div>
        </div>
      </div>

      <Outlet
        context={[
          toggleAreYouReadyPopup,
          openPrivateGamePopup,
          openCreateGamePopup,
          toggleDepositFundsPopup,
          toggleTransactionSuccessPopup,
          toggleApproveDepositPopup,
          toggleAddFundsPopup,
          toggleTotalBalancePopup,
        ]}
      />
    </>
  );
};

export default Layout2;
