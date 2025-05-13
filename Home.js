import 'animate.css';
import cccc from './Bakery.jpeg';
import aaaa from './cold.jpg';
import './CSS.css';
import nathu from './Hotbeverage.jpg';
import bbbb from './SpecialtyDrinks.jpeg';
function Home(){
    return(
        <>
        <img src="./home.jpg" alt="Home Background" className="home-image" />
        <h1 style={{textAlign:'center'}} class="animate__animated animate__flash">Menu</h1>

        <section className="menu-section">
            <div className="menu-item">
                <img className="menu-image" src={nathu} alt="Hot Beverages"/>
                <div className="menu-description">
                    <b>Hot Beverages:</b>
                    <p>Espresso, Americano, Cappuccino, Latte, Mocha</p>
                </div>
            </div>

            <div className="menu-item">
                <img className="menu-image" src={aaaa} alt="Cold Beverages"/>
                <div className="menu-description">
                    <b>Cold Beverages:</b>
                    <p>Iced Latte, Cold Brew, Iced Mocha, Frappes</p>
                </div>
            </div>
            <div className="menu-item">
                <img className="menu-image" src={bbbb} alt="Specialty Drinks"/>
                <div className="menu-description">
                    <b>Specialty Drinks:</b>
                    <p>Seasonal specials, flavored lattes, and unique blends.</p>
                </div>
            </div>
            <div className="menu-item">
                <img className="menu-image" src={cccc} alt="Bakery & Snacks"/>
                <div className="menu-description">
                    <b>Bakery & Snacks:</b>
                    <p>Freshly baked pastries, sandwiches, muffins, and vegan options.</p>
                </div>
            </div>
        </section>
        </>
    )
}
export default Home;

