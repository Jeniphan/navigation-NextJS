import Link from 'next/link'
import React from 'react'
import style from './navigation.module.css'
import menudata from './menudata'
import parse from 'html-react-parser'


export default function Navigation() {

  const [showmenu, setShowmenu] = React.useState(false)
  const toggleMenu = () => setShowmenu(!showmenu)
  return (
    <div>
      <aside>
        <div className={style.navbar}>
          <div className={style.navbartoggle}>
            <button className={style.menu_bar} onClick={toggleMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" className="style.h-6 w-[2rem]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        <nav className={showmenu ? `${style.nav_menu} ${style.active}` : style.nav_menu}>
          <ul className={`w-full ${style.nav_menu_item}`}>

            <li>
              <button className={`${style.menu_bar} mt-[2rem]`} onClick={toggleMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" className="style.h-6 w-[2rem] ml-[2rem] mb-[16px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
            </li>

            {menudata.map((menu, index) => {
              return (
                <li key={index} onClick={toggleMenu}>
                  <Link href={menu.path}>
                    <div className={style.menu_text}>
                      {parse(menu.icon)}
                      <span>{menu.title}</span>
                    </div>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </aside>
    </div>
  )
}
