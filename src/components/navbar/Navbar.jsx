import './Navbar.css';
// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <>
            <nav className="navbar flex justify-between">
                <div className="logo">
                    JustAnotherUIKit
                </div>

                <div className="links flex justify-between">
                    {/* <NavLink to={'/#'}> Home</NavLink>
                    <NavLink to={'/#about'}>About</NavLink>
                    <NavLink to={'/#contact'}>Contact</NavLink>
                    <NavLink to={'/#blog'}>Blog</NavLink> */}

                    
                    <a href="#" className='mr-4'>Home</a>
                    <a href="#about" className='mr-4'>About</a>
                    <a href="#contact" className='mr-4'>Contact</a>
                    <a href="#blog" className=''>Blog</a>
                </div>
            </nav>
        </>
     );
}
 
export default Navbar;