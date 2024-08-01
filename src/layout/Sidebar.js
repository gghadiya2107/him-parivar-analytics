import React from 'react'
import style from "./layout.module.css"
import { IoMdPersonAdd } from "react-icons/io";
import { FaUserEdit } from "react-icons/fa";
import { MdVerifiedUser } from "react-icons/md";
import { TbReportSearch } from "react-icons/tb";
import { IoDocumentsOutline } from "react-icons/io5";
import { BsPersonBoundingBox } from "react-icons/bs";
import { useRouter } from 'next/router';
import { IoLogOut } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { Divider } from '@mui/material';
import { getImagePath } from '@/utils/CustomImagePath';
import Image from 'next/image';
import { getCookieValues, removeCookie } from '@/utils/cookies';

import { MdGTranslate } from "react-icons/md";
// import { useTranslation } from 'react-i18next';
// import i18n from '../../i18n';
import { FaRegListAlt } from "react-icons/fa";
import { MdOutlineFamilyRestroom } from "react-icons/md";
import { MdOutlineTransferWithinAStation } from "react-icons/md";

import { TbForms } from "react-icons/tb";

import { HiOutlineClipboardDocumentList } from "react-icons/hi2";

import { TbSmartHome } from "react-icons/tb";

import { IoBarChartOutline } from "react-icons/io5";

import { TbTablePlus } from "react-icons/tb";

const menu = [
    {
        title: "Dashboard",
        url: "/dashboard",
        icon: <TbSmartHome size={20} />
    },
    {
        title: "Integration",
        url: "/integration",
        icon: <TbForms size={20} />
    },
    // {
    //     title: "Surveys",
    //     url: "/surveys",
    //     icon: <HiOutlineClipboardDocumentList size={20} />
    // },
    
]

const Sidebar = ({ isOpen, toggleSidebar }) => {
    const router = useRouter()
    const userData = getCookieValues("userData") || null
    console.log("userData",userData)
    const currentPath = router.asPath;
    const logout = () => {

        removeCookie("userData");
        // router.push("/")
        window.location.pathname = "/"
        removeCookie("userData");


    }

    // const changeLanguae = () => {
    //     let cLanguage = i18n.language
    //     if (cLanguage == "en") {
    //         i18n.changeLanguage("hi")
    //     } else {
    //         i18n.changeLanguage("en")
    //     }
    // }
    return (
        <>
        <div className={`sidebar ${isOpen ? 'sidebar-open' : ''}`} >
            {/* <button onClick={toggleSidebar} style={{background : "red"}}>Toggle Sidebar</button> */}
            <div className={style.topMenu}>
                <Image
                    src={"/HPGovt.png"}
                    width="50"
                    height="35"
                    alt="Himachal Pradesh Logo"

                    // className={style.hpLogo}
                />
                <div className={style.title}>Him Parivar</div>
            </div>
            <Divider style={{ marginBottom: "15px" }} />
            <div className={style.outer}>
                <div>
                    {menu?.map(v => (<>
                        <div onClick={() => router.push(v?.url)} className={style.menu}
                            style={{ background: currentPath?.includes(v?.url) ? "linear-gradient(270deg, rgba(115, 103, 240, 0.7) 0%, #7367f0 100%)" : "transperant", 
                                borderRadius: currentPath?.includes(v?.url) ? "4px" : "4px",
                                boxShadow: currentPath?.includes(v?.url) ? "0px 2px 6px 0px rgba(115,103,240,.3)" : "0px",
                                color: currentPath?.includes(v?.url) ? "#fff" : "#222222",
                            
                            }}
                        >
                            <div style={{marginLeft : "10px", marginTop : "3px", marginBottom : "0px"}}>{v?.icon}</div>
                            <div className={style.menuTitle}>{v?.title}</div>
                        </div>
                    </>))}
                </div>
                {/* <div>
                    <Divider style={{ marginBottom: "7px" }} />
                    <div className={style.menu} onClick={logout}>
                        <div><IoLogOut size={21} style={{ marginTop: "5px" }} /></div>
                        <div className={style.menuTitle} >Logout</div>
                    </div>
                    <div className={style.menu}>
                        <div><FaUserCircle size={20} style={{ marginTop: "5px" }} /></div>
                        <div className={style.menuTitle}>{userData?.user_id || userData?.username}</div>
                    </div>
                    <div className={style.menu} onClick={changeLanguae}>
                        <div><MdGTranslate size={20} style={{ marginTop: "5px" }} /></div>
                        <div className={style.menuTitle} >Change Language to {i18n.language == "en" ? "Hindi" : "English"}</div>
                    </div>
                </div> */}
            </div>
        </div>
        
        </>
    )
}

export default Sidebar
