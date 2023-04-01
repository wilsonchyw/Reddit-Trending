import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { setVisible } from 'src/store/settingSlice';
import useAgent from 'src/lib/useAgent';

export default function _Navbar() {
    const dispatch = useDispatch();
    const isMobile = useAgent();
    const habdleSettingClick = () => dispatch(setVisible(true));
    return (
        <Navbar variant="dark" className="px-2" style={{ color: 'white', background: 'linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)' }}>
            <Navbar.Brand>
                <Nav.Link href="/">
                    <img alt="" src="/logos/logo-transparent-svg.svg" width="30" height="30" className="d-inline-block align-top" />
                    {!isMobile && "Reddit Trending"}
                </Nav.Link>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="navbar-nav" />
            <Nav className="me-auto">
                <Nav.Link href="/stocks">Stocks</Nav.Link>
                <Nav.Link href="/cryptos">Cryptos</Nav.Link>
                <Nav.Link href="/post">Blog</Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link href="#" onClick={habdleSettingClick}>
                    Settings
                </Nav.Link>
            </Nav>
        </Navbar>
    );
}
