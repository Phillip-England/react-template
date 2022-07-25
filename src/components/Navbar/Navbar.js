import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

export default function Navbar({
    navState,
    setNavState
}) {

    let routeConfig = [
        {key:0, name:'Home', path:'/'},
        {key:1, name:'Ideas', path:'/ideas'},
        {key:2, name:'Contact', path:'/contact'},
    ]

    return(
        <nav className={styles.wrapper}>
            <div className={styles.headerWrapper}>
                {navState 
                    ?   <i className={`fa-solid fa-x ${styles.icon}`} onClick={()=>{setNavState(!navState)}}></i>
                    :   <i className={`fa-solid fa-bars ${styles.icon}`} onClick={()=>{setNavState(!navState)}}></i>
                }
                <h1 className={`${styles.header}`}>Brain Storm</h1>
            </div>
            {navState
                ?   <ul className={styles.menuWrapper}>
                        <div className={styles.spacer}></div>
                        {routeConfig.map((route) => 
                            <li className={styles.route}>
                                <NavLink 
                                    to={route.path}
                                    className={({isActive}) =>
                                        isActive ? `${styles.activeRoute} ${styles.routeWrapper}` : styles.routeWrapper
                                    }
                                    onClick={()=>{setNavState(!navState)}}>
                                    {route.name}
                                </NavLink>
                            </li>



                        )}
                    </ul>
                :   null

            }

        </nav>
    )
}