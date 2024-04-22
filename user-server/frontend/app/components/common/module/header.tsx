'use client';
import { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useRouter } from 'next/navigation';
import { PG } from '@/app/components/common/enums/PG';
import Link from 'next/link';
import Linkbutton, { pages } from '@/app/atoms/button/LinkButton';
import { parseCookie } from 'next/dist/compiled/@edge-runtime/cookies';
import { destroyCookie, parseCookies } from 'nookies';
import { useDispatch } from 'react-redux';
import { logout } from '../../users/service/user-service';


function Header() {

  const [showProfile,setShowProfile] = useState(false)
  const dispatch = useDispatch()
  const router = useRouter()
  useEffect(()=>{
    if(parseCookies().accessToken){
      setShowProfile(true)
    }else{
      setShowProfile(false)
    }
  },[parseCookies().accessToken])


  const logoutHandler = ()=>{
    console.log('로그아웃 적용 전: ' + parseCookies().accessToken)
    dispatch(logout())
    .then((res:any)=>{
      destroyCookie(null,'accessToken')
      setShowProfile(false)
      router.push('/')
    })
    .catch((err:any)=>{
      console.log('로그아웃 실행에서 에러 발생 : ' + err)
    })
  }

  
  return (<>


    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="data:image/png;base64,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" className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">NAVER BIT CAMP</span>
        </Link>
        {showProfile && <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
            <span className="sr-only">Open user menu</span>
            <img className="w-8 h-8 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_RlT-ytB9A_TQFLKMqVYpdJiiRbckTCThmw&usqp=CAU" />
          </button>
          {showProfile &&
          <div className="flex px-4 py-3 float-end">
            <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
            <span className="block text-sm  text-gray-500 truncate dark:text-gray-400 mx-5">name@flowbite.com</span>
            <span className="block text-sm  text-gray-500 truncate dark:text-gray-400" onClick={logoutHandler}> <a href="#">log out</a> </span>
          </div>
          
        }
        <ul className="py-2" aria-labelledby="user-menu-button">
              <li>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
              </li>
            </ul>
          <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        }
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

            {pages.map((item) => (
              <Linkbutton key={item.id} title={item.title} path={item.path} />
            ))}
          </ul>
        </div>
      </div>
    </nav>

  </>
  )
}

export default Header;