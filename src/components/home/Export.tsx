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

function exportToTable(data, text = false) {
    let table = `<table style="border-collapse: collapse; width: 100%; font-family:Roboto, sans-serif;">`;
    table += '<thead><tr><th style="text-align: left; padding: 8px; background-color: #f2f2f2;">Title</th>';
    table += '<th style="text-align: left; padding: 8px; background-color: #f2f2f2;">Forum</th>';
    table += '<th style="text-align: left; padding: 8px; background-color: #f2f2f2; padding-right: 16px;">UpVote</th>';
    table += '<th style="text-align: right; padding: 8px; background-color: #f2f2f2; padding-right: 16px;">Change</th></tr></thead>';
    table += '<tbody>';

    for (let i = 0; i < data.length; i++) {
        table += '<tr style="border-bottom: 1px solid rgb(183 183 183);font-weight:500;">';
        table +=
            `<td style="text-align: left; padding: 8px;"><a href="https://www.reddit.com/r/${data[i].forum}/comments/${data[i].id}" target="_blank" rel="noreferrer" style="text-decoration: none;">` +
            data[i].title +
            '</a></td>';
        table += '<td style="text-align: left; padding: 8px;color: rgb(113, 128, 150);font-weight:600;">' + data[i].forum + '</td>';
        table +=
            '<td style="text-align: left; padding: 8px; padding-right: 16px;color: rgb(113, 128, 150);font-weight:600;">' + data[i].MAX + '</td>';
        table +=
            '<td style="text-align: right; padding: 8px; padding-right: 16px;color: rgb(113, 128, 150);font-weight:600;">↑' +
            data[i].change +
            '%</td>';
        table += '</tr>';
    }

    table += '</tbody></table>';
    const tab = window.open('', '_blank');
    if (text) {
        tab.document.body.innerText = table;
    } else {
        tab.document.body.innerHTML = table;
    }
}

export default function Export({ datas }: Props): ReactElement {
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
}
