import { useMemo, useState } from 'react';
import type { Symbol } from 'src/types/Symbol';
import { Col, Row, Table } from 'react-bootstrap';
import _Card from 'src/components/card/Card';
import useAgent from 'src/lib/useAgent';

import Pagination_ from 'src/components/home/Pagination';
import Header from './Header';
import { TableHeader } from './TableHeader';
import TableRow from './TablwRow';

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
    const [itemsPerPage, setItemPerPage] = useState<number>(25);
    const [search, setSearch] = useState<string>('');
    const [sortOrder, setSortOrder] = useState<number>(1);
    const [sortBy, setSortBy] = useState<'change' | 'quantity'>('change');
    const [sortTarget, setSorttarget] = useState<'vote' | 'comment'>('vote');
    const [sortTimeFrame, setSortTimeFrame] = useState<'day' | 'week' | 'month'>('month');
    const [showName, toggleName] = useState<boolean>(true);

    /**
     * Pagination setting area
     */
    const [activePage, setActivePage] = useState(1);

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
            .sort((a, b) => (b[sortBy][sortTarget][sortTimeFrame] - a[sortBy][sortTarget][sortTimeFrame]) * sortOrder);
    }, [sortTarget, sortTimeFrame, sortBy, sortOrder, search]);

    const handleSortTargetSelect = (by: 'change' | 'quantity', timeFrame: 'day' | 'week' | 'month') => {
        if (timeFrame == sortTimeFrame) setSortOrder((pre: number) => pre * -1);
        setSortBy(by);
        setSortTimeFrame(timeFrame);
    };

    const isMobile = useAgent();

    return (
        <_Card className={'mt-2 ' + isMobile && 'm-0'} nopadding={isMobile}>
            <Header
                currentPage={activePage}
                data={sortedData}
                sortTarget={sortTarget}
                setSorttarget={setSorttarget}
                toggleName={toggleName}
                handlePageChange={handlePageChange}
                itemsPerPage={itemsPerPage}
                setItemPerPage={setItemPerPage}
            />
            <Table hover striped borderless>
                <TableHeader
                    search={search}
                    setSearch={setSearch}
                    sortBy={sortBy}
                    sortOrder={sortOrder}
                    sortTarget={sortTarget}
                    sortTimeFrame={sortTimeFrame}
                    setSortBy={setSortBy}
                    setSorttarget={setSorttarget}
                    handleSortTargetSelect={handleSortTargetSelect}
                />
                <tbody>
                    {sortedData.slice(firstItem, lastItem).map((symbol: Symbol) => (
                        <TableRow showName={showName} symbol={symbol} sortTarget={sortTarget} sortBy={sortBy} />
                    ))}
                </tbody>
            </Table>
            <Row className="mx-1">
                <Col className="d-flex justify-content-center">
                    <Pagination_ currentPage={activePage} total={Math.ceil(sortedData.length / itemsPerPage)} handlePageChange={handlePageChange} />
                </Col>
            </Row>
        </_Card>
    );
}
