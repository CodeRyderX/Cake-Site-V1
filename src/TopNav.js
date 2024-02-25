import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const TopNav = () => {
    return ( 
        <div className="topnav w-full h-14 flex gap-14 justify-center items-center">
            <h2 className="page-title text-pink-600 font-bold ">Sugar Mania</h2>
            <ul className="link-list flex gap-5">
                <Link to="/about">
                    <li className="links text-sm">About</li>
                </Link>
                <Link to="/gallery">
                <li className="links text-sm">Gallery</li>
                </Link>
                <Link to="/reachus">
                <li className="links text-sm">Reach Us</li>
                </Link>
                <Link to="/instantorders">
                <li className="instant-order text-sm text-pink-600 font-bold">Instant Orders</li>
                </Link>
                <Link to="/cart">
                <li className="cart mt-1">
                    <FaShoppingCart style={{color: "darkgrey"}} size={15}/>
                </li>
                </Link>
            </ul>
        </div>
     );
}
 
export default TopNav;