import { NavLink } from 'react-router-dom';
import { NavDropdown, Nav } from 'react-bootstrap';
import '../../styles/header-dropdown.css'
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
        path: '/prosthetics',
        display: ' پروتز'
    }
]

function HeaderDropdown() {
    return (
        <>
            <Nav  className='dropdown__nav'>
                <NavDropdown className='dropdown__menu' >
                    <NavDropdown.Item className='dropdown__item'>
                        <ul >
                            {navLinks.map((item, index) => (
                                <NavLink to={item.path} key={index} className={navClass => navClass.isActive ? 'nav__active nav__item' : 'nav__item'}>
                                    <li>
                                        {item.display}
                                    </li>
                                </NavLink>
                            ))
                            }
                        </ul>
                    </NavDropdown.Item>

                </NavDropdown>
            </Nav>

        </>
    );
}

export default HeaderDropdown;