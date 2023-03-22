import React, { ReactElement } from 'react';
import { CSVLink, CSVDownload } from 'react-csv';
import { Badge, Button, Col, Dropdown, DropdownButton, Form, InputGroup, Row, Stack, Table } from 'react-bootstrap';

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

function exportJsonOnNewTab(data) {
    const tab = window.open('', '_blank');
    tab.document.body.innerHTML = JSON.stringify(data);
}


export default function Export({ datas }: Props): ReactElement {
    datas = datas.sort((a, b) => b.change - a.change);
    return (
        <DropdownButton title={`Export`} size="sm">
            <Dropdown.Item as="button"><CSVLink data={datas}>CSV</CSVLink></Dropdown.Item>
            <Dropdown.Item onClick={() => exportJsonOnNewTab(datas)}>JSON</Dropdown.Item>
        </DropdownButton>
    );
}
