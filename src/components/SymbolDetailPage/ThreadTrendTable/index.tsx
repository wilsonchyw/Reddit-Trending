import { useState } from 'react';
import { Badge, Button, Col, Dropdown, DropdownButton, Form, InputGroup, Row, Stack, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import _Card from 'src/components/card/Card';
import Loading from 'src/components/Loading';
import Text from 'src/components/Text';
import useAgent from 'src/lib/useAgent';
import { RootState } from 'src/store';
import { setSearch } from 'src/store/settingSlice';
import { FONT, FONT_COLOR } from 'src/variables/css';
import Pagination_ from 'src/components/home/Pagination';
import Export from 'src/components/Export';
import Link from 'next/link';

export default function ThreadTrend({ handleThreadFetch, userSearch, datas }) {

    const [prePage, setPrePage] = useState<number>(10);
    const [sortBy, setSortBy] = useState<string>('change');
    const [sortOrder, setSortOrder] = useState<number>(-1);
    const [currentPage, setCurrent] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const isMobile: Boolean = useAgent();

    if (!datas.length) return <Loading size={300} isWhite={false} />;

    let max = 0;

    const re = new RegExp(`\\b${userSearch}\\b`);
    const _datas = datas
        .map(data => {
            max = Math.max(data.change, max);
            return data;
        })
        .filter(c => c.id == userSearch || re.test(c.title.toLowerCase()))
        .sort((a, b) => (a[sortBy] > b[sortBy] ? 1 : -1) * sortOrder);

    const dataShow = _datas.slice((currentPage - 1) * prePage, (currentPage - 1) * prePage + prePage);

    const handleSortOrder = (t: string) => {
        if (t == sortBy) {
            setSortOrder(sortOrder * -1);
        } else {
            setSortBy(t);
        }
    };

    const sortIndicator = (t: string) => (t == sortBy ? (sortOrder > 0 ? '▲' : '▼') : '');

    return (
        <_Card>
            <Export datas={datas} showModal={showModal} setShowModal={setShowModal} />
            <Header
                dataLength={_datas.length}
                setPrePage={setPrePage}
                currentPage={currentPage}
                prePage={prePage}
                setCurrent={setCurrent}
                setShowModal={setShowModal}
            />
            <Stack style={{ minHeight: '300px' }}>
                {isMobile ? (
                    <_TableMobile
                        data={dataShow}
                        handleSortOrder={handleSortOrder}
                        sortIndicator={sortIndicator}
                    />
                ) : (
                    <_Table
                        data={dataShow}
                        handleSortOrder={handleSortOrder}
                        sortIndicator={sortIndicator}
                    />
                )}
            </Stack>
        </_Card>
    );
}

function _TableMobile({ data,  sortIndicator, handleSortOrder }) {
    return (
        <div>
            <Row className="border sticky-top bg-primary text-white">
                <Row>
                    <Col>
                        <Text handleClick={() => handleSortOrder('title')}>TITLE</Text>
                    </Col>
                </Row>
                <Row>
                    <Col xs={5} className="pe-0">
                        <Text handleClick={() => handleSortOrder('forum')}>FORUM{sortIndicator('forum')}</Text>
                    </Col>

                    <Col xs={3} className="p-0">
                        <Text handleClick={() => handleSortOrder('MAX_VOTE')}>
                            VOTE
                            {sortIndicator('MAX_VOTE')}
                        </Text>
                    </Col>
                    <Col xs={3} className="p-0">
                        <Text handleClick={() => handleSortOrder('MAX_COMMENT')}>
                            COMMENT
                            {sortIndicator('MAX_COMMENT')}
                        </Text>
                    </Col>
                </Row>
            </Row>
            {data.map((el, index, arr) => (
                <Row key={el.id} className="border-bottom">
                    <Row>
                        <Col>
                            <Text className="text-dark">
                                <Link href={`https://www.reddit.com/r/${el.forum}/comments/${el.id}`} target="_blank" rel="noreferrer">
                                    {el.title}
                                </Link>
                            </Text>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={5}>
                            <Text color={FONT_COLOR.grey} fontWeight={700}>
                                {el.forum}
                            </Text>
                        </Col>
                        <Col xs={3} className="p-0">
                            <Text color={FONT_COLOR.grey} fontWeight={600}>
                                {el.MAX_VOTE}
                            </Text>
                        </Col>
                        <Col xs={3} className="p-0">
                            <Text color={FONT_COLOR.grey} fontWeight={600}>
                                {el.MAX_COMMENT}
                            </Text>
                        </Col>
                    </Row>
                </Row>
            ))}
        </div>
    );
}

function _Table({ data,  sortIndicator, handleSortOrder }) {
    return (
        <Table>
            <thead className="bg-primary text-white">
                <tr>
                    <th className="col-md-6">
                        <Text  handleClick={() => handleSortOrder('title')}>
                            TITLE
                        </Text>
                    </th>
                    <th className="col-md-1">
                        <Text  handleClick={() => handleSortOrder('forum')}>
                            FORUM{sortIndicator('forum')}
                        </Text>
                    </th>
                    <th className="col-md-1">
                        <Text handleClick={() => handleSortOrder('MAX_COMMENT')}>
                            COMMENT
                            {sortIndicator('MAX_COMMENT')}
                        </Text>
                    </th>
                    <th className="col-md-1">
                        <Text  handleClick={() => handleSortOrder('MAX_VOTE')}>
                            VOTE
                            {sortIndicator('MAX_VOTE')}
                        </Text>
                    </th>
                    <th className="col-md-2">
                        <Text  handleClick={() => handleSortOrder('created')}>
                            CREATED
                            {sortIndicator('created')}
                        </Text>
                    </th>
                </tr>
            </thead>
            <tbody>
                {data.map((el, index, arr) => (
                    <tr key={el.id} className="my-2">
                        <td>
                            <Text className="text-primary">
                                <a href={`https://www.reddit.com/r/${el.forum}/comments/${el.id}`} target="_blank" rel="noreferrer">
                                    {el.title}
                                </a>
                            </Text>
                        </td>
                        <td>
                            <Text color={FONT_COLOR.darkGrey}>
                                <a href={`https://www.reddit.com/r/${el.forum}/`} target="_blank" rel="noreferrer">
                                    {el.forum}
                                </a>
                            </Text>
                        </td>
                        <td>
                            <Text color={FONT_COLOR.darkGrey}>{el.MAX_COMMENT}</Text>
                        </td>
                        <td>
                            <Text color={FONT_COLOR.darkGrey}>{el.MAX_VOTE}</Text>
                        </td>
                        <td>
                            <Text color={FONT_COLOR.darkGrey}>{new Date(el.created).toLocaleString()}</Text>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

function Header({ dataLength, setPrePage, currentPage, prePage, setCurrent, setShowModal }) {
    const dispatch = useDispatch();
    const { search } = useSelector((state: RootState) => state.setting);

    const handleUserSearch = (s: string) => dispatch(setSearch(s));
    return (
        <Stack>
            <Row className="d-flex justify-content-between p-2 ">
                <Col xs={12} md={4} className="d-flex align-items-center p-1">
                    <Text fontSize={FONT.bigger}>{dataLength} threads related to symbol</Text>
                </Col>
                <Col xs={12} md={4} className="d-flex align-items-center p-1">
                    <InputGroup className="">
                        <Form.Control size="sm" value={search} placeholder={'Search'} onChange={e => handleUserSearch(e.target.value)} />
                        <Button
                            size="sm"
                            variant="primary"
                            onClick={() => {
                                handleUserSearch('');
                            }}
                        >
                            Clear
                        </Button>
                    </InputGroup>
                </Col>
                <Col xs={12} md={4} className="d-flex align-items-center justify-content-md-end justify-content-sm-center p-1">
                    <Button variant="primary" onClick={() => setShowModal(true)} size="sm">
                        Export
                    </Button>
                    <DropdownButton title={`Page size`} size="sm" className="ms-2">
                        <Dropdown.Item onClick={() => setPrePage(10)}>10</Dropdown.Item>
                        <Dropdown.Item onClick={() => setPrePage(25)}>25</Dropdown.Item>
                        <Dropdown.Item onClick={() => setPrePage(50)}>50</Dropdown.Item>
                    </DropdownButton>
                </Col>
            </Row>
            <div className="d-flex justify-content-center mt-2">
                <Pagination_ currentPage={currentPage} total={Math.ceil(dataLength / prePage)} handlePageChange={setCurrent} />
            </div>
        </Stack>
    );
}
