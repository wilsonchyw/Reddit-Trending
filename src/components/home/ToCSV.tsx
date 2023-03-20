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

export default function ToCSV({ datas }: Props): ReactElement {
    datas = datas.sort((a, b) => b.change - a.change);
    return (
        <Button size="sm" className="mx-2">
            <CSVLink data={datas}>CSV</CSVLink>
        </Button>
    );
}
