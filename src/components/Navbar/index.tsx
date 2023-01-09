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
            {
                /**
                 * 
                  <Navbar.Brand>
                <Link href="/">Reddit Trending</Link>
            </Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link>
                    <Link href="/">Thread</Link>
                </Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link href="#" onClick={habdleSettingClick}>
                    Settings
                </Nav.Link>
            </Nav>
                 */
            }
           
        </Navbar>
    );
}
