import { useState } from 'react';
import { Badge, Button, Col, Dropdown, DropdownButton, Form, InputGroup, Row, Stack, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import _Card from 'src/components/card/Card';
import Loading from 'src/components/Loading';
import Text from 'src/components/Text';
import { RootState } from 'src/store';
import { FONT, FONT_COLOR } from 'src/variables/css';
import Pagination_ from './Pagination';
import useAgent from 'src/lib/useAgent';

export default function ThreadTrend({ showForums, handleThreadFetch, userSearch, setUserSearch, target, datas }) {
    const [prePage, setPrePage] = useState<number>(10);
    const [sortBy, setSortBy] = useState<string>('change');
    const [sortOrder, setSortOrder] = useState<number>(-1);
    const [currentPage, setCurrent] = useState(1);
    const { dateRange } = useSelector((state: RootState) => state.setting);
    const isMobile: boolean = useAgent();

    if (!datas.length) return <Loading size={300} isWhite={false} />;

    const sortIndicator = (t: string) => (t == sortBy ? (sortOrder > 0 ? '⬆' : '⬇') : '');

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
                <Row className="d-flex justify-content-between p-2">
                    <Col xs={12} md={4} className="d-flex align-items-center p-1">
                        <Text fontSize={FONT.bigger}>
                            Changes within {dateRange * 24} hours, Total {_datas.length} record
                        </Text>
                    </Col>
                    <Col xs={12} md={4} className="d-flex align-items-center p-1">
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
                    <Col xs={12} md={4} className="d-flex align-items-center justify-content-md-end justify-content-sm-center p-1">
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

            <Stack style={{  minHeight: '300px' }}>
                {isMobile ? (
                    <div>
                        <Row className="border">
                            <Row>
                                <Col>
                                    <Text color={FONT_COLOR.darkGrey} handleClick={() => handleSortOrder('title')}>
                                        Title
                                    </Text>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={4}>
                                    <Text color={FONT_COLOR.darkGrey} handleClick={() => handleSortOrder('forum')}>
                                        Forum{sortIndicator('forum')}
                                    </Text>
                                </Col>
                                <Col xs={4}>
                                    <Text color={FONT_COLOR.darkGrey} handleClick={() => handleSortOrder('MAX')}>
                                        {target}
                                        {sortIndicator('MAX')}
                                    </Text>
                                </Col>
                                <Col xs={4}>
                                    <Text color={FONT_COLOR.darkGrey} handleClick={() => handleSortOrder('change')}>
                                        Change{sortIndicator('change')}
                                    </Text>
                                </Col>
                            </Row>
                        </Row>
                        {_datas.slice((currentPage - 1) * prePage, (currentPage - 1) * prePage + prePage).map((el, index, arr) => (
                            <Row key={el.id} className="p-1 border-bottom">
                                <Row>
                                    <Col>
                                        <Text color={FONT_COLOR.darkGrey}>
                                            <a href={`https://www.reddit.com/r/${el.forum}/comments/${el.id}`} target="_blank" rel="noreferrer">
                                                {el.title}
                                            </a>
                                        </Text>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={5} className="pe-0">
                                        <Text color={FONT_COLOR.grey} fontWeight={600}>
                                            {el.forum}
                                        </Text>
                                    </Col>
                                    <Col xs={3} className="p-0">
                                        <Text color={FONT_COLOR.grey} fontWeight={600}>
                                            {el.MAX}
                                        </Text>
                                    </Col>
                                    <Col xs={3} className="p-0">
                                        <Text color={FONT_COLOR.grey} fontWeight={600}>
                                            &#x2B06;{`${el.change}%`}
                                        </Text>
                                    </Col>
                                    <Col xs={1} className="p-0">
                                        <Text fontSize={FONT.small}>
                                            <Badge bg="primary" onClick={() => handleThreadFetch(el.id)}>
                                                CHART
                                            </Badge>
                                        </Text>
                                    </Col>
                                </Row>
                            </Row>
                        ))}
                    </div>
                ) : (
                    <Table>
                        <thead style={{ backgroundColor: 'rgb(247, 250, 252)' }}>
                            <tr>
                                <th className="col-md-8">
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
                                        {target}
                                        {sortIndicator('MAX')}
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
                )}
            </Stack>
        </_Card>
    );
}
/**
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
                            

                            <div>
                    {_datas.slice((currentPage - 1) * prePage, (currentPage - 1) * prePage + prePage).map((el, index, arr) => (
                        <Row key={el.id} className="m-1 border-bottom">
                            <Col md={8}>
                                <Badge bg="primary" onClick={() => handleThreadFetch(el.id)}>
                                    CHART
                                </Badge>{' '}
                                <Text color={FONT_COLOR.darkGrey}>
                                    <a href={`https://www.reddit.com/r/${el.forum}/comments/${el.id}`} target="_blank" rel="noreferrer">
                                        {el.title}
                                    </a>
                                </Text>
                            </Col>
                            <Col md={1}>
                                <Text color={FONT_COLOR.darkGrey}>{el.forum}</Text>
                            </Col>
                            <Col md={1}>
                                <Text color={FONT_COLOR.darkGrey}>{el.MAX}</Text>
                            </Col>
                            <Col md={1}>
                                <Text color={FONT_COLOR.darkGrey}>&#x2B06;{`${el.change}%`}</Text>
                            </Col>
                            <Col md={1} className=" px-0">
                                <div className="progress p-0 mt-2" style={{ maxHeight: '10px' }}>
                                    <div className="progress-bar" style={{ width: `${(el.change / max) * 100}%` }}></div>
                                </div>
                            </Col>
                        </Row>
                    ))}
                </div>
                            */
