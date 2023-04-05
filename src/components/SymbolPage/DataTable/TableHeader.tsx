import { Form } from 'react-bootstrap';
import Text from 'src/components/Text';
import useAgent from 'src/lib/useAgent';
import { setSearch } from 'src/store/settingSlice';
//import Pagination_ from './Pagination';
import formatDate from 'src/lib/formatDate';
import { capitalizeFirstLetter } from 'src/lib/text';

interface TableHeaderProp {
    search: string;
    sortOrder: number;
    sortBy: string;
    sortTarget: string;
    sortTimeFrame: string;
    setSearch: Function;
    setSortBy?: Function;
    setSorttarget?: Function;
    handleSortTargetSelect: Function;
}
export function TableHeader({ search, sortBy, setSearch, sortOrder, sortTarget, sortTimeFrame, setSortBy, handleSortTargetSelect }: TableHeaderProp) {
    //const breakpoint: Breakpoint = useWindowWidth();
    const isMobile = useAgent();
    return isMobile ? (
        <TableHeaderMobile
            search={search}
            setSearch={setSearch}
            sortBy={sortBy}
            sortOrder={sortOrder}
            sortTarget={sortTarget}
            sortTimeFrame={sortTimeFrame}
            setSortBy={setSortBy}
            handleSortTargetSelect={handleSortTargetSelect}
        />
    ) : (
        <TableHeaderWidth
            search={search}
            setSearch={setSearch}
            sortBy={sortBy}
            sortOrder={sortOrder}
            sortTarget={sortTarget}
            sortTimeFrame={sortTimeFrame}
            handleSortTargetSelect={handleSortTargetSelect}
        />
    );
}

function TableHeaderWidth({ search, setSearch, sortBy, sortOrder, sortTarget, sortTimeFrame, handleSortTargetSelect }: TableHeaderProp) {
    return (
        <thead className="sticky-top bg-primary text-white">
            <tr>
                <th>
                    <Form.Control type="text" placeholder="Search" onChange={e => setSearch(e.target.value)} size="sm" />
                </th>

                <th colSpan={3} className={'text-center'}>
                    <a href="#">{capitalizeFirstLetter(sortTarget)} quantity</a>
                </th>
                <th colSpan={3} className={'text-center'}>
                    <a href="#">{capitalizeFirstLetter(sortTarget)} Change(precentage)</a>
                </th>
                <th></th>
            </tr>
            <tr>
                <th className="col-sm-5 px-2">
                    <Text>TITLE</Text>
                </th>

                <th className="col-sm-1 ps-0">
                    <Text handleClick={() => handleSortTargetSelect('quantity', 'day')}>
                        {formatDate(1)} {sortTimeFrame == 'day' && sortBy == 'quantity' && (sortOrder === -1 ? <>▲</> : <>▼</>)}
                    </Text>
                </th>
                <th className="col-sm-1 px-0">
                    <Text handleClick={() => handleSortTargetSelect('quantity', 'week')}>
                        {formatDate(7)} {sortTimeFrame == 'week' && sortBy == 'quantity' && (sortOrder === -1 ? <>▲</> : <>▼</>)}
                    </Text>
                </th>
                <th className="col-sm-1 px-0">
                    <Text handleClick={() => handleSortTargetSelect('quantity', 'month')}>
                        {formatDate(30)} {sortTimeFrame == 'month' && sortBy == 'quantity' && (sortOrder === -1 ? <>▲</> : <>▼</>)}
                    </Text>
                </th>

                <th className="col-sm-1 pe-0">
                    <Text handleClick={() => handleSortTargetSelect('change', 'day')}>
                        DAY {sortTimeFrame == 'day' && sortBy == 'change' && (sortOrder === -1 ? <>▲</> : <>▼</>)}
                    </Text>
                </th>
                <th className="col-sm-1 px-0">
                    <Text handleClick={() => handleSortTargetSelect('change', 'week')}>
                        WEEK {sortTimeFrame == 'week' && sortBy == 'change' && (sortOrder === -1 ? <>▲</> : <>▼</>)}
                    </Text>
                </th>
                <th className="col-sm-1 px-0">
                    <Text handleClick={() => handleSortTargetSelect('change', 'month')}>
                        MONTH {sortTimeFrame == 'month' && sortBy == 'change' && (sortOrder === -1 ? <>▲</> : <>▼</>)}
                    </Text>
                </th>
                <th className="col-sm-1 px-0">
                    <Text>MONTH CHART</Text>
                </th>
            </tr>
        </thead>
    );
}

function TableHeaderMobile({ search, sortBy, sortOrder, sortTarget, sortTimeFrame, setSortBy, handleSortTargetSelect }: TableHeaderProp) {
    return (
        <thead className="sticky-top bg-primary text-white no-border">
            <tr>
                <th className="px-1">
                    <Form.Control type="text" placeholder="Search" value={search} onChange={e => setSearch(e.target.value)} size="sm" />
                </th>
                <th>{search}</th>
                <th colSpan={3} className={'text-center'}>
                    <a href="#" onClick={() => setSortBy(sortBy == 'change' ? 'quantity' : 'change')}>
                        {capitalizeFirstLetter(sortTarget)} {sortBy}
                    </a>
                </th>
            </tr>
            <tr className="">
                <th className="col-4 px-1">
                    <Text>TITLE</Text>
                </th>

                {sortBy == 'change' ? (
                    <>
                        <th className="col-1 px-1">
                            <Text handleClick={() => handleSortTargetSelect('change', 'day')}>
                                1D {sortTimeFrame == 'day' && (sortOrder === -1 ? <>▲</> : <>▼</>)}
                            </Text>
                        </th>
                        <th className="col-1 px-1">
                            <Text handleClick={() => handleSortTargetSelect('change', 'week')}>
                                7D {sortTimeFrame == 'week' && (sortOrder === -1 ? <>▲</> : <>▼</>)}
                            </Text>
                        </th>
                        <th className="col-1 px-1">
                            <Text handleClick={() => handleSortTargetSelect('change', 'month')}>
                                30D {sortTimeFrame == 'month' && (sortOrder === -1 ? <>▲</> : <>▼</>)}
                            </Text>
                        </th>
                    </>
                ) : (
                    <>
                        <th className="col-1 px-1">
                            <Text handleClick={() => handleSortTargetSelect('quantity', 'day')}>
                                {formatDate(1)} {sortTimeFrame == 'day' && (sortOrder === -1 ? <>▲</> : <>▼</>)}
                            </Text>
                        </th>
                        <th className="col-1 px-1">
                            <Text handleClick={() => handleSortTargetSelect('quantity', 'week')}>
                                {formatDate(7)} {sortTimeFrame == 'week' && (sortOrder === -1 ? <>▲</> : <>▼</>)}
                            </Text>
                        </th>
                        <th className="col-1 px-1">
                            <Text handleClick={() => handleSortTargetSelect('quantity', 'month')}>
                                {formatDate(30)} {sortTimeFrame == 'month' && (sortOrder === -1 ? <>▲</> : <>▼</>)}
                            </Text>
                        </th>
                    </>
                )}
                <th className="col-2 px-0">
                    <Text>CHART</Text>
                </th>
            </tr>
        </thead>
    );
}
