import React, { useState, useMemo } from 'react';
import type { Symbol, Change, Comment } from 'src/types/Symbol';

import { Badge, Button, Col, Dropdown, DropdownButton, Form, InputGroup, Row, Stack, Table, Pagination } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import _Card from 'src/components/card/Card';
import Loading from 'src/components/Loading';
import Text from 'src/components/Text';
import useAgent from 'src/lib/useAgent';
import { RootState } from 'src/store';
import { setSearch } from 'src/store/settingSlice';
import { FONT, FONT_COLOR } from 'src/variables/css';
import Pagination_ from './Pagination';
import Export from './Export';
import { capitalizeFirstLetter } from 'src/lib/text';

export interface Symbol {
    symbol: string;
    name: string;
    change: Change;
    quantity: Change;
    threads: string[];
    verb: string[];
    chart: string;
}

export interface Change {
    vote: TimeFrame;
    comment: TimeFrame;
}

export interface TimeFrame {
    day: number;
    week: number;
    month: number;
}

interface Props {
    data: Symbol[];
}

function DataTableHeader({ handleClick, sortOrder, sortBy, sortTimeFrame }) {}

export default function DataTable({ data }: Props) {
    //console.log(data);
    const [search, setSearch] = useState<string>('');
    const [sortOrder, setSortOrder] = useState<number>(1);
    const [sortBy, setSortBy] = useState<'change' | 'quantity'>('change');
    const [sortTarget, setSorttarget] = useState<'vote' | 'comment'>('vote');
    const [sortTimeFrame, setSortTimeFrame] = useState<'day' | 'week' | 'month'>('month');    

    /**
     * Pagination setting area
     */
     const [activePage, setActivePage] = useState(1);
     const itemsPerPage = 25;
     
 
     // calculate the current page data
     const lastItem = activePage * itemsPerPage;
     const firstItem = lastItem - itemsPerPage;
 
     const handlePageChange = pageNumber => {
         setActivePage(pageNumber);
     };
 
     /**
      * Pagination setting end
      */

    const sortedData = useMemo(() => {
        return data
            .filter(x => x.symbol.includes(search) || x.name?.includes(search))
            .sort((a, b) => (b[sortBy][sortTarget][sortTimeFrame] - a[sortBy][sortTarget][sortTimeFrame]) * sortOrder)
            .slice(firstItem, lastItem);
    }, [sortTarget, sortTimeFrame, sortOrder, firstItem, lastItem,search]);

    const totalPages = Math.ceil(sortedData.length / itemsPerPage);


    const handleSortTargetSelect = (by: 'change' | 'quantity', timeFrame: 'day' | 'week' | 'month') => {
        if (timeFrame == sortTimeFrame) setSortOrder((pre: number) => pre * -1);
        setSortBy(by);
        setSortTimeFrame(timeFrame);
    };

    return (
        <_Card>
            <Stack style={{ minHeight: '300px' }}>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th >
                                <Form.Control type="text" placeholder="Search" value={search} onChange={(e)=>setSearch(e.target.value)} size="sm"/>
                            </th>
                            <th >
                            {search} 
                            </th>
                            <th colspan={3} className="text-center">
                                <a href="#" onClick={() => setSorttarget('quantity')}>
                                    {capitalizeFirstLetter(sortTarget)} quantity
                                </a>
                            </th>
                            <th colspan={3} className="text-center">
                                <a href="#" onClick={() => setSorttarget('change')}>
                                    {capitalizeFirstLetter(sortTarget)} precentage
                                </a>
                            </th>
                        </tr>
                        <tr>
                            <th className="col-md-5">
                                <Text color={FONT_COLOR.darkGrey}>Title</Text>
                            </th>
                            <th className="col-md-1">
                                <Text color={FONT_COLOR.darkGrey}>Chart</Text>
                            </th>
                            <th className="col-md-1">
                                <Text color={FONT_COLOR.darkGrey} handleClick={() => handleSortTargetSelect('quantity', 'day')}>
                                    1 Day {sortTimeFrame == 'day' && sortBy == 'quantity' && (sortOrder === -1 ? <>⬆</> : <>⬇</>)}
                                </Text>
                            </th>
                            <th className="col-md-1">
                                <Text color={FONT_COLOR.darkGrey} handleClick={() => handleSortTargetSelect('quantity', 'week')}>
                                    7 Days {sortTimeFrame == 'week' && sortBy == 'quantity' && (sortOrder === -1 ? <>⬆</> : <>⬇</>)}
                                </Text>
                            </th>
                            <th className="col-md-1">
                                <Text color={FONT_COLOR.darkGrey} handleClick={() => handleSortTargetSelect('quantity', 'month')}>
                                    30 Days {sortTimeFrame == 'month' && sortBy == 'quantity' && (sortOrder === -1 ? <>⬆</> : <>⬇</>)}
                                </Text>
                            </th>

                            <th className="col-md-1">
                                <Text color={FONT_COLOR.darkGrey} handleClick={() => handleSortTargetSelect('change', 'day')}>
                                    1 Day {sortTimeFrame == 'day' && sortBy == 'change' && (sortOrder === -1 ? <>⬆</> : <>⬇</>)}
                                </Text>
                            </th>
                            <th className="col-md-1">
                                <Text color={FONT_COLOR.darkGrey} handleClick={() => handleSortTargetSelect('change', 'week')}>
                                    7 Days {sortTimeFrame == 'week' && sortBy == 'change' && (sortOrder === -1 ? <>⬆</> : <>⬇</>)}
                                </Text>
                            </th>
                            <th className="col-md-1">
                                <Text color={FONT_COLOR.darkGrey} handleClick={() => handleSortTargetSelect('change', 'month')}>
                                    30 Days {sortTimeFrame == 'month' && sortBy == 'change' && (sortOrder === -1 ? <>⬆</> : <>⬇</>)}
                                </Text>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedData.map(symbol => (
                            <tr key={symbol.symbol}>
                                <td>
                                    <Text color={FONT_COLOR.black} fontWeight={700} fontSize={FONT.large}>
                                        {symbol.symbol.toUpperCase()}
                                    </Text>
                                    <br />
                                    <Text color={FONT_COLOR.darkGrey}>{symbol.name}</Text>
                                </td>
                                <td className="p-0">
                                    <img src={symbol.chart} alt={symbol.symbol} />
                                </td>
                                <td>
                                    <Text color={FONT_COLOR.darkGrey}>{symbol.quantity[sortTarget].day}</Text>
                                </td>
                                <td>
                                    <Text color={FONT_COLOR.darkGrey}>{symbol.quantity[sortTarget].week}</Text>
                                </td>
                                <td>
                                    <Text color={FONT_COLOR.darkGrey}>{symbol.quantity[sortTarget].month}</Text>
                                </td>

                                <td>
                                    <Text color={FONT_COLOR.darkGrey}>{(symbol.change[sortTarget].day * 100).toFixed(0)}%</Text>
                                </td>
                                <td>
                                    <Text color={FONT_COLOR.darkGrey}>{(symbol.change[sortTarget].week * 100).toFixed(0)}%</Text>
                                </td>
                                <td>
                                    <Text color={FONT_COLOR.darkGrey}>{(symbol.change[sortTarget].month * 100).toFixed(0)}%</Text>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <Pagination>
                            {Array.from({ length: totalPages }, (_, index) => {
                                const pageNumber = index + 1;
                                return (
                                    <Pagination.Item
                                        key={pageNumber}
                                        active={pageNumber === activePage}
                                        onClick={() => handlePageChange(pageNumber)}
                                        className="p-0"
                                    >
                                        {pageNumber}
                                    </Pagination.Item>
                                );
                            })}
                        </Pagination>
                    </tfoot>
                </Table>
            </Stack>
        </_Card>
    );
}
