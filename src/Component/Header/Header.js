import { FaUserCircle } from 'react-icons/fa';
import { IoShareSocialOutline } from 'react-icons/io5'
import style from './Header.module.css'
export default function Header() {
    return(
        <>
       
       <div className={style.main}>
       <div className={style.titleBox}>
           <div>
            <div className={style.menu}>
            <p>File</p>
            <p>Edit</p>
            <p>View</p>
            <p>Insert</p>
            <p>Format</p>
            <p>Tools</p>
            <p>Extensions</p>
            <p>Help</p>
            </div>
            </div>

            </div>
           <div  className={style.profileDiv}>
           <IoShareSocialOutline  className={style.share} />
           <FaUserCircle  className={style.profile}/>
           
           </div>
            </div>
        </>
    )
}