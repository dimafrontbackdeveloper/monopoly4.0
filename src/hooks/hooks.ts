import { AppDispatch, RootState } from '../store/store';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import Cookies from 'js-cookie';
import { ethers } from 'ethers';
import axios from 'axios';

// use dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();

// use selector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// for using local storage
export const useLocalStorage = (key: string, initialValue: any) => {
  const [value, setValue] = useState(() => {
    const jsonVal = localStorage.getItem(key);
    if (jsonVal !== null) return JSON.parse(jsonVal);

    return initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];

  // const [todos,setTodos] = useLocalStorage('todos',initialState). We can use this hook as useState
};

// for controlled input
export const useInput = (initialVal: any) => {
  /*
  const {bind,val} = useInput('')
  <input {...bind} />
  */

  const [val, setVal] = useState(initialVal);

  const reset = () => {
    setVal(initialVal);
  };

  const bind = {
    value: val,
    onChange: (e: ChangeEvent<HTMLInputElement>) => setVal(e.target.value),
  };

  return { val, reset, bind };
};

type TypeOut = {
  ref: any;
  isShow: boolean;
  setIsShow: Dispatch<SetStateAction<boolean>>;
};

// 	Hide element when click outside

export const useOutside = (initialIsVisible: boolean): TypeOut => {
  const [isShow, setIsShow] = useState(initialIsVisible);
  const ref = useRef<HTMLElement>(null);

  const handleClickOutside = (event: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });
  return { ref, isShow, setIsShow };

  // const {ref,isShow,setIsShow} = useOutside(false).
};

export const useCookie = (name: any, initialValue: any) => {
  const [value, setValue] = useState(() => {
    const cookie = Cookies.get(name);
    if (cookie) return cookie;

    Cookies.set(name, initialValue);
    return initialValue;
  });

  const updateCookie = useCallback(
    (newVal: any, options: any) => {
      Cookies.set(name, newVal, options);
      setValue(newVal);
    },
    [name],
  );

  const deleteCookie = useCallback(() => {
    Cookies.remove(name);
    setValue(null);
  }, [name]);

  return [value, updateCookie, deleteCookie];

  // const [value,updateCookie,deleteCookie] = useCookie('token','')
};

export function useWindowSize() {
  const [size, setSize] = useState<Array<number>>([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

// export async function useGetPriceOfCurrency(from = 'ETH', to = 'USD') {
//   const responce = await axios(
//     `https://min-api.cryptocompare.com/data/price?fsym=${from}&tsyms=${to}`,
//   );

//   return responce.data;
// }
