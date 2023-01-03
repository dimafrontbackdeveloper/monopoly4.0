import { ethers } from 'ethers';
import React, { FC, useEffect, useRef } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { useAppSelector, useGetPriceOfCurrency, useWeb3Helper } from '../hooks/hooks';
import logo from './../assets/images/logo.png';

interface IHeader {
  headerRef?: any;
  toggleDepositFundsPopup: (isCloseOrOpen: boolean) => void;
  toggleTotalBalancePopup: (isCloseOrOpen: boolean) => void;
  toggleNavbar: (isCloseOrOpen: boolean) => void;
}

const Header: FC<IHeader> = ({
  headerRef,
  toggleDepositFundsPopup,
  toggleTotalBalancePopup,
  toggleNavbar,
}) => {
  const walletAddress = useAppSelector((state) => state.profileReducer.walletAddress);
  const balanceETH = useAppSelector((state) => state.profileReducer.balanceETH);
  const balanceUSD = useAppSelector((state) => state.profileReducer.balanceUSD);

  const { httpProvider, wallet, sender } = useWeb3Helper();
  const priceEthToUsd = useGetPriceOfCurrency().then((res) => {
    console.log(res);
  });

  const withdraw = async () => {
    const senderBalanceBefore = await httpProvider.getBalance(sender);
    const recieverBalanceBefore = await httpProvider.getBalance(walletAddress as string);

    console.log(`\nSender balance before: ${ethers.utils.formatEther(senderBalanceBefore)}`);
    console.log(`reciever balance before: ${ethers.utils.formatEther(recieverBalanceBefore)}\n`);
    const gasPrice = await httpProvider.getGasPrice();

    const tx = await wallet.sendTransaction({
      to: walletAddress as string,
      value: ethers.utils.parseEther('0.00000001'),
      gasPrice,
    });

    await tx.wait();
    console.log(tx);

    const senderBalanceAfter = await httpProvider.getBalance(sender);
    const recieverBalanceAfter = await httpProvider.getBalance(walletAddress as string);

    console.log(`\nSender balance after: ${ethers.utils.formatEther(senderBalanceAfter)}`);
    console.log(`reciever balance after: ${ethers.utils.formatEther(recieverBalanceAfter)}\n`);
  };

  const deposit = async () => {
    const gasPrice = await httpProvider.getGasPrice();
    console.log(ethers.utils.formatUnits(gasPrice, 'ether'));
    let params = [
      {
        from: walletAddress, // user account
        to: wallet, // our account
        value: Number(10000000000).toString(16),
        gasPrice,
      },
    ];
    try {
      let result = await window.ethereum.request({ method: 'eth_sendTransaction', params });
      if (result) {
        console.log('success');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className="header" ref={headerRef}>
      <div className="header__row d-f ai-c jc-sb">
        <div className="header__left d-f ai-c">
          <p>
            <a className="link" href="#">
              Play-to-earn
            </a>
          </p>
          <p>
            <Link className="d-f ai-c" to="leaderboard">
              Leaderboard
            </Link>
          </p>
          <p className="logo">
            <a href="#">
              <img src={logo} alt="logo" />
            </a>
          </p>
        </div>
        <div className="header__right d-f ai-c">
          <p>
            <button
              className="d-f"
              onClick={() => {
                toggleDepositFundsPopup(true);
              }}>
              {balanceETH} eth[${balanceUSD}]
            </button>
          </p>
          <p>
            <a
              className="d-f ai-c"
              href="#"
              onClick={() => {
                toggleDepositFundsPopup(true);
                deposit();
              }}>
              Deposit
            </a>
          </p>
          <p>
            <a
              className="d-f ai-c"
              href="#"
              onClick={() => {
                toggleTotalBalancePopup(true);
                withdraw();
              }}>
              Withdraw
            </a>
          </p>
          <p>
            <Link className="d-f ai-c" to="profile">
              <span>Username</span>
              <span></span>
            </Link>
          </p>
          <p>
            <div className="burger" onClick={() => toggleNavbar(true)}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
