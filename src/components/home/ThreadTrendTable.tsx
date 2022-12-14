import { useState } from 'react';
import { Badge, Button, Col, Dropdown, DropdownButton, Form, InputGroup, Row, Stack, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import _Card from 'src/components/card/Card';
import Loading from 'src/components/Loading';
import Text from 'src/components/Text';
import { RootState } from 'src/store';
import { FONT, FONT_COLOR } from 'src/variables/css';
import Pagination_ from './Pagination';

export default function ThreadTrend({ showForums, handleThreadFetch, userSearch, setUserSearch, target, datas }) {
    const [prePage, setPrePage] = useState<number>(10);
    const [sortBy, setSortBy] = useState<string>('change');
    const [sortOrder, setSortOrder] = useState<number>(-1);
    const [currentPage, setCurrent] = useState(1);
    const { dateRange } = useSelector((state: RootState) => state.setting);

    if (!datas.length) return <Loading size={300} isWhite={false} />;

    const sortIndicator = (t:string)=> t==sortBy?(sortOrder>0?"⬆":"⬇"):""

    let max = 0;
    const _datas = datas
        .map(data => {
            max = Math.max(data.change, max);
            return data;
        })
        .filter(c => showForums[c.forum] && (c.id == userSearch || c.title.toLowerCase().includes(userSearch)))
        .sort((a, b) => (a[sortBy] > b[sortBy] ? 1 : -1) * sortOrder);

    const handleSortOrder = (t: string) => {
        if (t == sortBy) {
            setSortOrder(sortOrder * -1);
        } else {
            setSortBy(t);
        }
    };

    return (
        <_Card>
            <Stack>
                <Row className="d-flex justify-content-between m-2">
                    <Col className="d-flex align-items-center ">
                        <Text fontSize={FONT.bigger}>
                            Changes within {dateRange * 24} hours, Total {_datas.length} record
                        </Text>
                    </Col>
                    <Col className="d-flex align-items-center ">
                        <InputGroup className="">
                            <Form.Control size="sm" placeholder={userSearch || 'Search'} />
                            <Button
                                size="sm"
                                variant="primary"
                                onClick={() => {
                                    setUserSearch('');
                                }}
                            >
                                Clear
                            </Button>
                        </InputGroup>
                    </Col>
                    <Col className="d-flex align-items-center justify-content-end ">
                        <DropdownButton title={`Page size`} size="sm">
                            <Dropdown.Item onClick={() => setPrePage(10)}>10</Dropdown.Item>
                            <Dropdown.Item onClick={() => setPrePage(25)}>25</Dropdown.Item>
                            <Dropdown.Item onClick={() => setPrePage(50)}>50</Dropdown.Item>
                        </DropdownButton>
                    </Col>
                </Row>
                <div className="d-flex justify-content-center mt-2">
                    <Pagination_ currentPage={currentPage} total={Math.ceil(_datas.length / prePage)} handlePageChange={setCurrent} />
                </div>
            </Stack>

            <Stack style={{ overflowY: 'scroll', minHeight: '300px' }}>
                <Table>
                    <thead style={{ backgroundColor: 'rgb(247, 250, 252)' }}>
                        <tr>
                            <th className="col-md-7">
                                <Text color={FONT_COLOR.darkGrey} handleClick={() => handleSortOrder('title')}>
                                    Title
                                </Text>
                            </th>
                            <th className="col-md-1">
                                <Text color={FONT_COLOR.darkGrey} handleClick={() => handleSortOrder('forum')}>
                                    Forum{sortIndicator('forum')}
                                </Text>
                            </th>
                            <th className="col-md-1">
                                <Text color={FONT_COLOR.darkGrey} handleClick={() => handleSortOrder('MAX')}>
                                    {target}{sortIndicator('MAX')}
                                </Text>
                            </th>
                            <th className="col-md-1">
                                <Text color={FONT_COLOR.darkGrey} handleClick={() => handleSortOrder('change')}>
                                    Change{sortIndicator('change')}
                                </Text>
                            </th>
                            <th className="col-lg-1  col-md-0 px-0"></th>
                        </tr>
                    </thead>

                    <tbody>
                        {_datas.slice((currentPage - 1) * prePage, (currentPage - 1) * prePage + prePage).map((el, index, arr) => (
                            <tr key={el.id} className="my-2">
                                <td>
                                    <Badge bg="primary" onClick={() => handleThreadFetch(el.id)}>
                                        CHART
                                    </Badge>{' '}
                                    <Text color={FONT_COLOR.darkGrey}>
                                        <a href={`https://www.reddit.com/r/${el.forum}/comments/${el.id}`} target="_blank" rel="noreferrer">
                                            {el.title}
                                        </a>
                                    </Text>
                                </td>
                                <td>
                                    <Text color={FONT_COLOR.darkGrey}>{el.forum}</Text>
                                </td>
                                <td>
                                    <Text color={FONT_COLOR.darkGrey}>{el.MAX}</Text>
                                </td>
                                <td>
                                    <Text color={FONT_COLOR.darkGrey}>&#x2B06;{`${el.change}%`}</Text>
                                </td>
                                <td className="col-lg-1  col-md-0 px-0">
                                    <div className="progress p-0 mt-2" style={{ maxHeight: '10px' }}>
                                        <div className="progress-bar" style={{ width: `${(el.change / max) * 100}%` }}></div>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Stack>
        </_Card>
    );
}
