import React from 'react' 

  import * as FaIcons from 'react-icons/fa'
  import * as AiIcons from 'react-icons/ai'
  import * as IoIcons from 'react-icons/io'


export const SidebarData = [
    {
        title: 'Home',
        path:  '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Projects',
        path:  '/projects',
        icon: <IoIcons.IoIosApps />,
        cName: 'nav-text'
    },
    {
        title: 'Contact',
        path:  '/contact',
        icon: <IoIcons.IoIosContact/>,
        cName: 'nav-text'
    }
    
]
