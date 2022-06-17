import Announcementbar from './Announcementbar';
import Vector from '../../images/vector-icon.png';
import Logo from '../../images/logo.png';

function Navbar() {
    return (
      <section>
           <Announcementbar/>
           <div className = "navbar">
              <img className="vector-img" src={Vector} width="28px" height="28px"/>
              <img className="logo-img" src={Logo} width="55.44px" height="46px"/>
           </div>
      </section>
    );
  }
  
  export default Navbar;