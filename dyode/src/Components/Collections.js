import AccessoriesImageMobile from '../images/AccessoriesImageMobile1.png';
import MensImage from '../images/MensImage1.png';
import WomenImage from '../images/WomensImage1.png';

function Collections() {
    return (
      <section class="Collections">
        <div class="collection-container">
            <div class="collection-top">
                <div>
                <img src={WomenImage} alt="Women"/>
                     
                </div>
                <div>
                   <img src={MensImage} alt="Men"/>
                </div>
            </div>
            <div class="collection-bottom">
               <img src={AccessoriesImageMobile} alt="Asscessories" />
            </div>
        </div>
      </section>
    );
  }
  
export default Collections;