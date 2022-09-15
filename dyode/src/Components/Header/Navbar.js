import Announcementbar from './Announcementbar';
import Vector from '../../images/vector-icon.png';
import Logo from '../../images/logo.png';
import Scope from '../../images/scope.png';
import ShoppingCart from '../../images/shopping-cart.png';
import User from '../../images/user.png';

function Navbar() {
    return (
      <section>
           <Announcementbar/>
           <div className = "navbar">
              <img className="vector-img" src={Vector} width="28px" height="28px" alt="Vector"/>
              <img className="logo-img" src={Logo} width="55.44px" height="46px" alt="Logo"/>

              <div className="icon-bar">
                     <img src={Scope} width="20px" height="20px" alt="Scope"/>
                     <img src={User} width="23px" height="23px" alt="User"/>
                     <img src={ShoppingCart} width="20px" height="20px" alt="ShoppingCart"/>
              </div>
           </div>
      </section>
    );
  }
  
export default Navbar;