import React, { useState, useMemo } from 'react';
import type { Symbol, Change, Comment } from 'src/types/Symbol';

import { Badge, Button, Col, Dropdown, DropdownButton, Form, InputGroup, Row, Stack, Table } from 'react-bootstrap';
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

interface Props {
    data: Symbol[];
}

export default function DataTable({ data }: Props) {
    const [sortByVote, setSortByVote] = useState<'asc' | 'desc'>('desc');
    const [sortByComment, setSortByComment] = useState<'asc' | 'desc'>('desc');
    const [changeDisplay, setChangeDisplay] = useState<'min' | 'max' | 'percentage' | 'quantity'>('percentage');

    const sortedData = useMemo(() => {
        return data.sort((a, b) => {
            if (sortByVote === 'asc') {
                return a.change.vote[changeDisplay] - b.change.vote[changeDisplay];
            } else {
                return b.change.vote[changeDisplay] - a.change.vote[changeDisplay];
            }
        });
    }, [data, sortByVote, changeDisplay]);

    const handleVoteSortClick = () => {
        setSortByVote(sortByVote === 'asc' ? 'desc' : 'asc');
    };

    const handleCommentSortClick = () => {
        setSortByComment(sortByComment === 'asc' ? 'desc' : 'asc');
    };

    const handleDisplayChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setChangeDisplay(event.target.value as 'min' | 'max' | 'percentage' | 'quantity');
    };

    return (
        <_Card>
            <Stack style={{ minHeight: '300px' }}>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th className="col-md-6">
                            <Text color={FONT_COLOR.darkGrey}>Title</Text>
                        </th>
                        <th className="col-md-3">
                            <Text color={FONT_COLOR.darkGrey}>Chart</Text>
                        </th>
                        <th className="col-md-1">
                            <Text color={FONT_COLOR.darkGrey} handleClick={handleVoteSortClick}>
                                Vote Min {sortByVote === 'asc' ? <>⬆</> : <>⬇</>}
                            </Text>
                        </th>
                        <th className="col-md-1">
                            <Text color={FONT_COLOR.darkGrey} handleClick={handleVoteSortClick}>
                                Vote Max {sortByVote === 'asc' ? <>⬆</> : <>⬇</>}
                            </Text>
                        </th>
                        <th className="col-md-1">
                            <Text color={FONT_COLOR.darkGrey} handleClick={handleCommentSortClick}>
                                Comment {sortByComment === 'asc' ? <>⬆</> : <>⬇</>}
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
                            <td>
                                <img src={symbol.chart} alt={symbol.symbol} />
                            </td>
                            <td>{symbol.change.vote.min}</td>
                            <td>{symbol.change.vote.max}</td>
                            <td>{symbol.change.comment[changeDisplay]}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={4}>
                            <label htmlFor="changeDisplay">Display Change as:</label>{' '}
                            <select id="changeDisplay" value={changeDisplay} onChange={handleDisplayChange}>
                                <option value="min">Min</option>
                                <option value="max">Max</option>
                                <option value="percentage">Percentage</option>
                                <option value="quantity">Quantity</option>
                            </select>
                        </td>
                    </tr>
                </tfoot>
            </Table>
            </Stack>
        </_Card>
    );
}
