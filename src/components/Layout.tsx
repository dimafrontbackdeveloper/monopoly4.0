import React, { useEffect, useRef, useState } from 'react';
import { Outlet, redirect } from 'react-router-dom';
import { useAppSelector, useOutside } from '../hooks/hooks';
import Header from './Header';
import Navbar from './Navbar';

const Layout = () => {


  // deposit funds popup
  const {
    ref: refDepositFunds,
    isShow: isShowDepositFunds,
    setIsShow: setIsShowDepositFunds,
  } = useOutside(false);

  // approve deposit popup
  const {
    ref: refApproveDeposit,
    isShow: isShowApproveDeposit,
    setIsShow: setIsShowApproveDeposit,
  } = useOutside(false);

  // transaction success popup
  const {
    ref: refTransactionSuccess,
    isShow: isShowTransactionSuccess,
    setIsShow: setIsShowTransactionSuccess,
  } = useOutside(false);

  // add funds popup
  const {
    ref: refAddFunds,
    isShow: isShowAddFunds,
    setIsShow: setIsShowAddFunds,
  } = useOutside(false);

  // total balance popup
  const {
    ref: refTotalBalance,
    isShow: isShowTotalBalance,
    setIsShow: setIsShowTotalBalance,
  } = useOutside(false);

  // navbar
  const { ref: refNavbar, isShow: isShowNavbar, setIsShow: setIsShowNavbar } = useOutside(false);

  const toggleDepositFundsPopup = (isCloseOrOpen: boolean) => {
    setIsShowDepositFunds(isCloseOrOpen);
  };

  const toggleApproveDepositPopup = (isCloseOrOpen: boolean) => {
    setIsShowApproveDeposit(isCloseOrOpen);
  };

  const toggleTransactionSuccessPopup = (isCloseOrOpen: boolean) => {
    setIsShowTransactionSuccess(isCloseOrOpen);
  };

  const toggleAddFundsPopup = (isCloseOrOpen: boolean) => {
    setIsShowAddFunds(isCloseOrOpen);
  };

  const toggleTotalBalancePopup = (isCloseOrOpen: boolean) => {
    setIsShowTotalBalance(isCloseOrOpen);
  };

  const toggleNavbar = (isCloseOrOpen: boolean) => {
    setIsShowNavbar(isCloseOrOpen);
  };

  return (
    <>
      <div className="main">
        <div className="main__row d-g">
          <Navbar refNavbar={refNavbar} isShowNavbar={isShowNavbar} toggleNavbar={toggleNavbar} />
          <Header
            toggleDepositFundsPopup={toggleDepositFundsPopup}
            toggleTotalBalancePopup={toggleTotalBalancePopup}
            toggleNavbar={toggleNavbar}
          />
          <div className="main__content">
            <Outlet
              context={[
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
              ]}
            />
          </div>
          <div className="main__bottom">
            <ul className="soc d-f ai-c jc-c">
              <li>
                <a href="#"></a>
              </li>
              <li>
                <a href="#"></a>
              </li>
              <li>
                <a href="#"></a>
              </li>
              <li>
                <a href="#"></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
