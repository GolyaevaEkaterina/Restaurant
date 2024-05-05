import Nav from "components/Nav";
import './Header.css';

const Header = () => {
    return(
        <div>
            <Nav />
            <div className="my-8">
                <h1 className="text-5xl font-semibold">G o o d  F o o d</h1>
            </div>
            
        </div>
    )
}

export default Header;