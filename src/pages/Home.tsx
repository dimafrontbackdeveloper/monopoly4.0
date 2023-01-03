import { Link } from 'react-router-dom';
import Header from '../components/Header';
import GameBackground from './../assets/images/Game-Background.png';
import { Unity, useUnityContext } from 'react-unity-webgl';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useOutside, useWindowSize } from '../hooks/hooks';
import Navbar from '../components/Navbar';

const Home = () => {
  const [unityContainerHeight, setInityContainerHeight] = useState<number>(0);
  const [unityContainerWidth, setInityContainerWidth] = useState<number>(0);
  const [headerHeight, setHeaderHeight] = useState<number>(0);
  const unityContainerRef = useRef<any>(null);
  const headerRef = useRef<any>(null);

  const [windowWidth, windowHeight] = useWindowSize();

  // welcome popup
  const { ref: refWelcome, isShow: isShowWelcome, setIsShow: setIsShowWelcome } = useOutside(false);

  const closeWelcomePopup = () => {
    setIsShowWelcome(false);
  };

  // show welcome popup
  useEffect(() => {
    setIsShowWelcome(true);
  }, []);

  // set width and height of game firstly and on display resize
  useEffect(() => {
    if (unityContainerRef.current && headerRef.current) {
      setInityContainerHeight(unityContainerRef.current.clientHeight);
      setInityContainerWidth(unityContainerRef.current.clientWidth);
      setHeaderHeight(headerRef.current.clientHeight);
    }
  }, [windowWidth, windowHeight]);

  const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
    loaderUrl: '/Build/Builds.loader.js',
    dataUrl: '/Build/Builds.data',
    frameworkUrl: '/Build/Builds.framework.js',
    codeUrl: '/Build/Builds.wasm',
    streamingAssetsUrl: 'StreamingAssets',
    companyName: 'DefaultCompany',
    // productName: 'Metamonopoly',
    productVersion: '1.0',
  });

  const loadingPercentage: number = Math.round(loadingProgression * 100);

  return (
    <section className="home section">
      <div
        className={`home__welcome-popup popup d-f ai-c jc-c ${isShowWelcome && 'popup--active'}`}>
        <div className="home__welcome-popup-container" ref={refWelcome}>
          <div className="close-popup" onClick={closeWelcomePopup}></div>
          <h2>Welcome</h2>
          <p>
            To play any game,
            <br /> make sure you have ETH
            <br /> in your Metamask Wallet
          </p>
          <button></button>
        </div>
      </div>

      <div id="unity-container" className="unity-desktop" ref={unityContainerRef}>
        <Unity
          unityProvider={unityProvider}
          style={{
            background: '#1F1F20',
            width: `${unityContainerWidth}px`,
            height: `${window.innerHeight - headerHeight}px`,
            position: 'absolute',
            left: '0',
            top: '0',
          }}
        />
        {isLoaded === false && (
          <div id="unity-loading-bar">
            <div id="unity-logo"></div>
            <div id="unity-progress-bar-empty">
              <div id="unity-progress-bar-full" style={{ width: `${loadingPercentage}%` }}></div>
            </div>
          </div>
        )}

        <div id="unity-warning"> </div>
        <div id="unity-footer">
          <div id="unity-webgl-logo"></div>
          <div id="unity-fullscreen-button"></div>
          {/* <div id="unity-build-title">Metamonopoly</div> */}
        </div>
      </div>

      {/* <div className="home__bottom">
        <ul className="soc d-f jc-c ai-c">
          <li>
            <a className="soc__link" href="#"></a>
          </li>
          <li>
            <a className="soc__link" href="#"></a>
          </li>
          <li>
            <a className="soc__link" href="#"></a>
          </li>
          <li>
            <a className="soc__link" href="#"></a>
          </li>
        </ul>
      </div> */}
    </section>
  );
};

export default Home;
