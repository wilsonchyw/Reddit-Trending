
import { Form } from 'react-bootstrap';
import Text from 'src/components/Text';
import useAgent from 'src/lib/useAgent';
import { setSearch } from 'src/store/settingSlice';
import { FONT_COLOR } from 'src/variables/css';
//import Pagination_ from './Pagination';
import { capitalizeFirstLetter } from 'src/lib/text';

interface TableHeaderProp {
    search: string;
    sortOrder: number;
    sortBy: string;
    sortTarget: string;
    sortTimeFrame: string;
    setSortBy: Function;
    setSorttarget: Function;
    handleSortTargetSelect: Function;
}
export function TableHeader({
    search,
    sortBy,
    sortOrder,
    sortTarget,
    sortTimeFrame,
    setSorttarget,
    setSortBy,
    handleSortTargetSelect
}: TableHeaderProp) {
    //const breakpoint: Breakpoint = useWindowWidth();
    const isMobile = useAgent();
    return isMobile ? (
        <TableHeaderMobile
            search={search}
            sortBy={sortBy}
            sortOrder={sortOrder}
            sortTarget={sortTarget}
            sortTimeFrame={sortTimeFrame}
            setSorttarget={setSorttarget}
            setSortBy={setSortBy}
            handleSortTargetSelect={handleSortTargetSelect}
        />
    ) : (
        <TableHeaderWidth
            search={search}
            sortBy={sortBy}
            sortOrder={sortOrder}
            sortTarget={sortTarget}
            sortTimeFrame={sortTimeFrame}
            setSorttarget={setSorttarget}
            setSortBy={setSortBy}
            handleSortTargetSelect={handleSortTargetSelect}
        />
    );
}

function TableHeaderWidth({
    search,
    sortBy,
    sortOrder,
    sortTarget,
    sortTimeFrame,
    setSorttarget,
    setSortBy,
    handleSortTargetSelect
}: TableHeaderProp) {
    return (
        <thead style={{ backgroundColor: 'rgb(247, 250, 252)' }}>
            <tr>
                <th>
                    <Form.Control type="text" placeholder="Search" value={search} onChange={e => setSearch(e.target.value)} size="sm" />
                </th>

                <th colSpan={3} className={'text-center'}>
                    <a href="#">{capitalizeFirstLetter(sortTarget)} quantity</a>
                </th>
                <th colSpan={3} className={'text-center'}>
                    <a href="#">{capitalizeFirstLetter(sortTarget)} precentage</a>
                </th>
                <th></th>
            </tr>
            <tr>
                <th className="col-sm-5 px-0">
                    <Text color={FONT_COLOR.darkGrey}>TITLE</Text>
                </th>

                <th className="col-sm-1 px-0">
                    <Text color={FONT_COLOR.darkGrey} handleClick={() => handleSortTargetSelect('quantity', 'day')}>
                        DAY {sortTimeFrame == 'day' && sortBy == 'quantity' && (sortOrder === -1 ? <>▲</> : <>▼</>)}
                    </Text>
                </th>
                <th className="col-sm-1 px-0">
                    <Text color={FONT_COLOR.darkGrey} handleClick={() => handleSortTargetSelect('quantity', 'week')}>
                        WEEK {sortTimeFrame == 'week' && sortBy == 'quantity' && (sortOrder === -1 ? <>▲</> : <>▼</>)}
                    </Text>
                </th>
                <th className="col-sm-1 px-0">
                    <Text color={FONT_COLOR.darkGrey} handleClick={() => handleSortTargetSelect('quantity', 'month')}>
                        MONTH {sortTimeFrame == 'month' && sortBy == 'quantity' && (sortOrder === -1 ? <>▲</> : <>▼</>)}
                    </Text>
                </th>

                <th className="col-sm-1 pe-0">
                    <Text color={FONT_COLOR.darkGrey} handleClick={() => handleSortTargetSelect('change', 'day')}>
                        DAY {sortTimeFrame == 'day' && sortBy == 'change' && (sortOrder === -1 ? <>▲</> : <>▼</>)}
                    </Text>
                </th>
                <th className="col-sm-1 px-0">
                    <Text color={FONT_COLOR.darkGrey} handleClick={() => handleSortTargetSelect('change', 'week')}>
                        WEEK {sortTimeFrame == 'week' && sortBy == 'change' && (sortOrder === -1 ? <>▲</> : <>▼</>)}
                    </Text>
                </th>
                <th className="col-sm-1 px-0">
                    <Text color={FONT_COLOR.darkGrey} handleClick={() => handleSortTargetSelect('change', 'month')}>
                        MONTH {sortTimeFrame == 'month' && sortBy == 'change' && (sortOrder === -1 ? <>▲</> : <>▼</>)}
                    </Text>
                </th>
                <th className="col-sm-1 px-0">
                    <Text color={FONT_COLOR.darkGrey}>MONTH CHART</Text>
                </th>
            </tr>
        </thead>
    );
}

function TableHeaderMobile({
    search,
    sortBy,
    sortOrder,
    sortTarget,
    sortTimeFrame,
    setSorttarget,
    setSortBy,
    handleSortTargetSelect
}: TableHeaderProp) {
    return (
        <thead style={{ backgroundColor: 'rgb(247, 250, 252)' }} className="sticky-top">
            <tr>
                <th>
                    <Form.Control type="text" placeholder="Search" value={search} onChange={e => setSearch(e.target.value)} size="sm" />
                </th>
                <th>{search}</th>
                <th colSpan={3} className={'text-center'}>
                    <a href="#" onClick={() => setSortBy(sortBy == 'change' ? 'quantity' : 'change')}>
                        {capitalizeFirstLetter(sortTarget)} {sortBy}
                    </a>
                </th>
            </tr>
            <tr>
                <th className="col-sm-4 px-0">
                    <Text color={FONT_COLOR.darkGrey}>TITLE</Text>
                </th>

                {sortBy == 'change' ? (
                    <>
                        <th className="col-sm-1 px-0">
                            <Text color={FONT_COLOR.darkGrey} handleClick={() => handleSortTargetSelect('change', 'day')}>
                                1D {sortTimeFrame == 'day' && (sortOrder === -1 ? <>▲</> : <>▼</>)}
                            </Text>
                        </th>
                        <th className="col-sm-1 px-0">
                            <Text color={FONT_COLOR.darkGrey} handleClick={() => handleSortTargetSelect('change', 'week')}>
                                7D {sortTimeFrame == 'week' && (sortOrder === -1 ? <>▲</> : <>▼</>)}
                            </Text>
                        </th>
                        <th className="col-sm-1 px-0">
                            <Text color={FONT_COLOR.darkGrey} handleClick={() => handleSortTargetSelect('change', 'month')}>
                                30D {sortTimeFrame == 'month' && (sortOrder === -1 ? <>▲</> : <>▼</>)}
                            </Text>
                        </th>
                    </>
                ) : (
                    <>
                        {' '}
                        <th className="col-sm-1 px-0">
                            <Text color={FONT_COLOR.darkGrey} handleClick={() => handleSortTargetSelect('quantity', 'day')}>
                                1D {sortTimeFrame == 'day' && (sortOrder === -1 ? <>▲</> : <>▼</>)}
                            </Text>
                        </th>
                        <th className="col-sm-1 px-0">
                            <Text color={FONT_COLOR.darkGrey} handleClick={() => handleSortTargetSelect('quantity', 'week')}>
                                7D {sortTimeFrame == 'week' && (sortOrder === -1 ? <>▲</> : <>▼</>)}
                            </Text>
                        </th>
                        <th className="col-sm-1 px-0">
                            <Text color={FONT_COLOR.darkGrey} handleClick={() => handleSortTargetSelect('quantity', 'month')}>
                                30D {sortTimeFrame == 'month' && (sortOrder === -1 ? <>▲</> : <>▼</>)}
                            </Text>
                        </th>
                    </>
                )}
                <th className="col-sm-1 px-0">
                    <Text color={FONT_COLOR.darkGrey}>CHART</Text>
                </th>
            </tr>
        </thead>
    );
}
