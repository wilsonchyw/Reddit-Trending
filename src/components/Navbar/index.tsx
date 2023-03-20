import Link from 'next/link';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { setVisible } from 'src/store/settingSlice';

export default function _Navbar() {
    const dispatch = useDispatch();
    const habdleSettingClick = () => dispatch(setVisible(true));
    return (
        <Navbar variant="dark" className="px-2" style={{ color: 'white', background: 'linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)' }}>
            <h1 className="navbar-brand">
                <Link href="/">Reddit Trending</Link>
            </h1>
            {/* <Nav className="mx-2">
                <Link href="/">Thread</Link>
            </Nav> */}

            <h1 className="navbar-brand  me-auto">
                <span className="me-2" >{'| '}</span>
                <Link href="https://rtrending.wordpress.com/">
                    Blog
                </Link>
            </h1>
            <Nav>
                <Nav.Link href="#" onClick={habdleSettingClick}>
                    Settings
                </Nav.Link>
            </Nav>
        </Navbar>
    );
}
