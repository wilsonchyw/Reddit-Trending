import { useMemo, useState } from 'react';
import type { Change, Symbol } from 'src/types/Symbol';

import { Table } from 'react-bootstrap';
import _Card from 'src/components/card/Card';
import useAgent from 'src/lib/useAgent';
//import Pagination_ from './Pagination';
import Pagination_ from 'src/components/home/Pagination';
import type { Breakpoint } from 'src/lib/useWindowWidth';
import useWindowWidth from 'src/lib/useWindowWidth';
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
    //console.log(data);
    const [itemsPerPage, setItemPerPage] = useState<number>(25);
    const [search, setSearch] = useState<string>('');
    const [sortOrder, setSortOrder] = useState<number>(1);
    const [sortBy, setSortBy] = useState<'change' | 'quantity'>('change');
    const [sortTarget, setSorttarget] = useState<'vote' | 'comment'>('vote');
    const [sortTimeFrame, setSortTimeFrame] = useState<'day' | 'week' | 'month'>('month');
    const [showName, toggleName] = useState<boolean>(true);
    const breakpoint: Breakpoint = useWindowWidth();

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
            .sort((a, b) => (b[sortBy][sortTarget][sortTimeFrame] - a[sortBy][sortTarget][sortTimeFrame]) * sortOrder)
            .slice(firstItem, lastItem);
    }, [sortTarget, sortTimeFrame, sortBy, sortOrder, firstItem, lastItem, search]);

    const handleSortTargetSelect = (by: 'change' | 'quantity', timeFrame: 'day' | 'week' | 'month') => {
        if (timeFrame == sortTimeFrame) setSortOrder((pre: number) => pre * -1);
        setSortBy(by);
        setSortTimeFrame(timeFrame);
    };

    const isMobile = useAgent();

    return (
        <_Card className={isMobile && 'm-0'}>
            <Header
                currentPage={activePage}
                data={data}
                sortTarget={sortTarget}
                setSorttarget={setSorttarget}
                toggleName={toggleName}
                handlePageChange={handlePageChange}
                itemsPerPage={itemsPerPage}
                setItemPerPage={setItemPerPage}
            />
            <Table hover>
                <TableHeader
                    search={search}
                    sortBy={sortBy}
                    sortOrder={sortOrder}
                    sortTarget={sortTarget}
                    sortTimeFrame={sortTimeFrame}
                    setSortBy={setSortBy}
                    setSorttarget={setSorttarget}
                    handleSortTargetSelect={handleSortTargetSelect}
                />
                <tbody>
                    {sortedData.map((symbol: Symbol) => (
                        <TableRow showName={showName} symbol={symbol} sortTarget={sortTarget} sortBy={sortBy} />
                    ))}
                </tbody>
            </Table>
            <Pagination_ currentPage={activePage} total={Math.ceil(data.length / itemsPerPage)} handlePageChange={handlePageChange} />
        </_Card>
    );
}
