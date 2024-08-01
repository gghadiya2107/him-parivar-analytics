import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import style from "./layout.module.css"
import { useRouter } from 'next/router'
import { Box, CircularProgress, IconButton, Menu, MenuItem } from '@mui/material'
import Loader from '@/utils/Loader'
import { IoMenu } from "react-icons/io5";
import { MdAccountCircle } from 'react-icons/md'
import { useLoading } from '@/utils/LoadingContext'
// import i18n from '../../i18n'
// import { getCookieValues, removeCookie } from '@/utils/cookies'

const MainLayout = ({ children }) => {
  const router = useRouter()
  const { loading } = useLoading();
  // const userData = getCookieValues("userData") || null

  const [test, settest] = useState(false)
  const [loading1, setLoading] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setIsSidebarOpen(window.innerWidth< 768 ? false :true)
    };

    setWindowWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    settest(true)
  }, [])

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, []);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

//   const changeLanguae = () => {
//     let cLanguage = i18n.language
//     if (cLanguage == "en") {
//         i18n.changeLanguage("hi")
//     } else {
//         i18n.changeLanguage("en")
//     }
//     handleClose()
// }

const logout = () => {

  removeCookie("userData");
  // router.push("/")
  window.location.pathname = "/urbanregister"
  removeCookie("userData");
  handleClose()


}


  return (
    test && <>

      <div className={style.container}>
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        {/* Main content */}

        <div
          //  className={style.mainContent}
          className={`content ${isSidebarOpen ? 'content-shift' : ''}`}>

         <header style={{
              marginBottom: "20px", height: "45px", backgroundColor: "#fff", borderRadius : "4px",
            boxShadow: "0 .125rem .5rem 0 rgba(47,43,61,.12)", display: "flex", alignItems: "center"
          }}>
            {windowWidth < 768 &&<div style={{ marginLeft: "10px" ,marginTop : '3px'}}>
              <IoMenu size={22} cursor={"pointer"} onClick={toggleSidebar} />

            </div>}
            <div style={{display : "flex", justifyContent : "end", width : "100%", alignItems : "center"}}>
            {/* <p style={{fontSize : "16px"}}>{userData?.user_id || userData?.username}</p> */}
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                  <MdAccountCircle color='#7367F0' />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                style={{marginTop : "20px"}}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>{"Gaurang Ghadiya"}</MenuItem>
                <MenuItem onClick={logout}>Logout</MenuItem>
              </Menu>
            </div>

          </header>
{loading && <Loader />}
          {loading1 ? <Loader /> : children}

          {/* {children} */}
        </div>
      </div>
    </>
  )
}

export default MainLayout
