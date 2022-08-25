import React from 'react';
import { NavLink } from 'react-router-dom';




const navLinks = [

    {
        path: '/Ortho',
        display: ' ارتودونسی'
    },
    {
        path: '/endo',
        display: 'اندودانتیکس '
    },
    {
        path: '/tarmim',
        display: 'ترمیمی '
    },
    {
        path: '/surgery',
        display: 'جراحی '
    },
    {
        path: '/perio',
        display: ' پریودانتیکس'
    },
    {
        path: '/perio',
        display: ' پریودانتیکس'
    },
    {
        path: '/perio',
        display: ' پریودانتیکس'
    },
    {
        path: '/prosthetics',
        display: ' پروتز'
    }
]

const CategoryList = () => {
    return (
        <div>
            {
                navLinks.map((item, index) => (
                    <NavLink to={item.path} key={index} className={navClass => navClass.isActive ? 'nav__active nav__item' : 'nav__item'}>
                         {item.display}
                    </NavLink>
                ))
            }
        </div>
    )
}

export default CategoryList
