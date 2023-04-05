import { ReactElement, useState } from 'react';
import { Button, Col, Container, Form, Modal, Row } from 'react-bootstrap';
import { capitalizeFirstLetter } from 'src/lib/text';
import Text from 'src/components/Text';
import { CSVLink, CSVDownload } from 'react-csv';
import { FONT,LAYOUT } from 'src/variables/css';
interface Props {
    datas: {
        title: string;
        forum: string;
        id: string;
        MAX: number;
        MIN: number;
        change: number;
    }[];
}

function exportJsonOnNewTab(data, displayedKeys) {
    const tab = window.open('', '_blank');
    data = data.map(x => {
        const _data = {};
        for (const key of displayedKeys) {
            _data[key] = x[key];
        }
        return _data;
    });
    tab.document.body.innerHTML = JSON.stringify(data);
}

function ExportCSV({ data, displayedKeys }) {
    if (!displayedKeys) return null;
    data = data.map(x => {
        const _data = {};
        for (const key of displayedKeys) {
            _data[key] = x[key];
        }
        return _data;
    });
    return (
        <Button variant="primary" size="sm" className="mx-1">
            <CSVLink data={data}>Download</CSVLink>
        </Button>
    );
    //return <CSVDownload data={data} target="_blank" />;
}

function exportToTable(data, displayedKeys, html = false) {
    let table = `<table style="border-collapse: collapse; width: 100%; font-family:Roboto, sans-serif;"><thead><tr>`;
    for (const key of displayedKeys) {
        table += `<th style="text-align: left; padding: 8px; background-color: #f2f2f2;">${key}</th>`;
    }
    table += '</tr></thead><tbody>';

    for (let i = 0; i < data.length; i++) {
        table += '<tr style="border-bottom: 1px solid rgb(183 183 183);font-weight:500;">';
        for (const key of displayedKeys) {
            if (key == 'title') {
                table +=
                    `<td style="text-align: left; padding: 8px;"><a href="https://www.reddit.com/r/${data[i].forum}/comments/${data[i].id}" target="_blank" rel="noreferrer" style="text-decoration: none;">` +
                    data[i].title +
                    '</a></td>';
            } else {
                table += `<td style="text-align: left; padding: 8px;">${data[i][key]}</td>`;
            }
        }
        table += '</tr>';
    }

    table += '</tbody></table>';
    const tab = window.open('', '_blank');
    if (html) {
        tab.document.body.innerText = table;
    } else {
        tab.document.body.innerHTML = table;
    }
}

/* export default function Export({ datas }: Props): ReactElement {
    datas = datas.sort((a, b) => b.change - a.change);
    return (
        <DropdownButton title={`Export`} size="sm">
            <Dropdown.Item as="button">
                <CSVLink data={datas}>CSV</CSVLink>
            </Dropdown.Item>
            <Dropdown.Item onClick={() => exportJsonOnNewTab(datas)}>JSON</Dropdown.Item>

            <Dropdown.Item onClick={() => exportToTable(datas.slice(0, 10))}>Table</Dropdown.Item>
            <Dropdown.Item onClick={() => exportToTable(datas.slice(0, 10), true)}>Table(HTML)</Dropdown.Item>
        </DropdownButton>
    );
} */

export default function Export({ datas, showModal, setShowModal }: any): ReactElement {
    //datas = datas.sort((a, b) => b.change - a.change);

    const [displayedKeys, setDisplayedKeys] = useState([]);
    const [objectLength, setObjectLength] = useState(datas.length);
    const [csvMount, setCsvMount] = useState<boolean>(false);

    const handleCheckboxChange = event => {
        const { name, checked } = event.target;
        if (checked) {
            setDisplayedKeys(prevDisplayedKeys => [...prevDisplayedKeys, name]);
        } else {
            setDisplayedKeys(prevDisplayedKeys => prevDisplayedKeys.filter(key => key !== name));
        }
    };
    const handleLengthChange = event => {
        const newLength = event.target.value;
        setObjectLength(newLength);
    };

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
        <>

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Export</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CheckboxObjectList
                        objects={datas}
                        displayedKeys={displayedKeys}
                        handleCheckboxChange={handleCheckboxChange}
                        handleLengthChange={handleLengthChange}
                        objectLength={objectLength}
                    />
                </Modal.Body>
                <Modal.Body>
                    <Button variant="primary" size="sm" className="mx-1" onClick={() => exportJsonOnNewTab(datas, displayedKeys)}>
                        JSON
                    </Button>
                    <Button variant="primary" size="sm" className="mx-1" onClick={() => exportToTable(datas.slice(0, objectLength), displayedKeys)}>
                        Table
                    </Button>
                    <Button
                        variant="primary"
                        size="sm"
                        className="mx-1"
                        onClick={() => exportToTable(datas.slice(0, objectLength), displayedKeys, true)}
                    >
                        Table(HTML)
                    </Button>
                    <Button variant="primary" size="sm" className="mx-1" onClick={() => setCsvMount(true)}>
                        CSV
                    </Button>
                    {csvMount && <ExportCSV data={datas.slice(0, objectLength)} displayedKeys={displayedKeys} />}
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

const CheckboxObjectList = ({ displayedKeys, handleCheckboxChange, objects, handleLengthChange, objectLength }) => {
    const isNestedKey = key => key.includes('.');
    const getObjectKeys = obj => {
        let keys = Object.keys(obj);
        keys = keys.filter(key => {
            if (typeof obj[key] === 'object') {
                return true;
            } else {
                return !isNestedKey(key);
            }
        });
        return keys;
    };

    return (
        <Container>
            <Row>
                <Col>
                    <Form>
                        <Row className="my-2">
                            <Text fontWeight={700} fontSize={FONT.bigger}>
                                Data keys
                            </Text>
                        </Row>

                        {getObjectKeys(objects[0]).map(key => (
                            <Form.Check
                                inline
                                key={key}
                                type="checkbox"
                                label={capitalizeFirstLetter(key)}
                                name={key}
                                checked={displayedKeys.includes(key)}
                                onChange={handleCheckboxChange}
                            />
                        ))}
                        <Row  className="my-2">
                            <Text fontWeight={700} fontSize={FONT.bigger}>
                                Data length
                            </Text>
                        </Row>
                        <Form.Group controlId="formObjectLength">
                            <Row>
                                <Col className={LAYOUT.middle}>
                                    <input
                                        type="range"
                                        className="form-range"
                                        min="1"
                                        max={objects.length}
                                        value={objectLength}
                                        onChange={handleLengthChange}
                                    />
                                </Col>
                                <Col>
                                    <Form.Control
                                        type="number"
                                        placeholder="Enter object length"
                                        value={objectLength}
                                        onChange={handleLengthChange}
                                    />
                                </Col>
                            </Row>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};
