import Text from 'src/components/Text';
import useAgent from 'src/lib/useAgent';
import type { Symbol } from 'src/types/Symbol';
import { FONT, FONT_COLOR } from 'src/variables/css';
//import Pagination_ from './Pagination';
import { useRouter } from 'next/router';
import React from 'react';
import { useDispatch } from 'react-redux';

interface TableRowProps {
    showName: Function;
    symbol: Symbol;
    sortTarget: string;
    sortBy: string;
}

export default function TableRow({ symbol, sortTarget, sortBy, showName }: TableRowProps) {
    const isMobile = useAgent();
    const dispatch = useDispatch();
    const router = useRouter();
    const handleSymbolSelect = (e, symbol) => {
        e.preventDefault();
        //dispatch(setSymbol(symbol))
        localStorage.setItem('symbol', JSON.stringify(symbol));
        router.push(`/symbol/${symbol.symbol}`);
    };
    return isMobile ? (
        <TableRowMobile showName={showName} symbol={symbol} sortTarget={sortTarget} sortBy={sortBy} />
    ) : (
        <TableRowWidth symbol={symbol} sortTarget={sortTarget} handleSymbolSelect={handleSymbolSelect} />
    );
}

const SymbolName = React.forwardRef(({ symbol, onClick, href }, ref) => {
    return (
        <a ref={ref} href={href} onClick={onClick}>
            <Text color={FONT_COLOR.black} fontWeight={700}>
                {symbol.symbol.toUpperCase()}
            </Text>
            <br />

            <Text color={FONT_COLOR.darkGrey}>{symbol.name}</Text>
        </a>
    );
});

export function TableRowWidth({ symbol, sortTarget, handleSymbolSelect }: { symbol: Symbol; sortTarget: string; handleSymbolSelect: Function }) {
    return (
        <tr key={symbol.symbol}>
            <td /* onClick={() => handleSymbolSelect(symbol)} */>
                {/* <Link href={{ pathname: '/symbol', query: { ...symbol} }} passHref legacyBehavior> */}
                {/* <SymbolName symbol={symbol} /> */}
                {/* </Link> */}
                <a href={`/symbol/${symbol.symbol}`} onClick={e => handleSymbolSelect(e, symbol)}>
                    <Text color={FONT_COLOR.black} fontWeight={700}>
                        {symbol.symbol.toUpperCase()}
                    </Text>
                    <br />

                    <Text color={FONT_COLOR.darkGrey}>{symbol.name}</Text>
                </a>
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
                <Text
                    color={
                        typeof symbol.change[sortTarget].day == 'string'
                            ? FONT_COLOR.darkGrey
                            : symbol.change[sortTarget].day > 0
                            ? FONT_COLOR.green
                            : FONT_COLOR.red
                    }
                >
                    {typeof symbol.change[sortTarget].day != 'string'
                        ? (symbol.change[sortTarget].day * 100).toFixed(1) + '%'
                        : symbol.change[sortTarget].day}
                </Text>
            </td>
            <td>
                <Text
                    color={
                        typeof symbol.change[sortTarget].week == 'string'
                            ? FONT_COLOR.darkGrey
                            : symbol.change[sortTarget].week > 0
                            ? FONT_COLOR.green
                            : FONT_COLOR.red
                    }
                >
                    {typeof symbol.change[sortTarget].week != 'string'
                        ? (symbol.change[sortTarget].week * 100).toFixed(1) + '%'
                        : symbol.change[sortTarget].week}
                </Text>
            </td>
            <td>
                <Text
                    color={
                        typeof symbol.change[sortTarget].month == 'string'
                            ? FONT_COLOR.darkGrey
                            : symbol.change[sortTarget].month > 0
                            ? FONT_COLOR.green
                            : FONT_COLOR.red
                    }
                >
                    {typeof symbol.change[sortTarget].month != 'string'
                        ? (symbol.change[sortTarget].month * 100).toFixed(1) + '%'
                        : symbol.change[sortTarget].month}
                </Text>
            </td>
            <td className="p-0">
                <img src={symbol.chart} alt={symbol.symbol} />
            </td>
        </tr>
    );
}

export function TableRowMobile({ symbol, sortTarget, sortBy, showName }: { showName: Function; symbol: Symbol; sortTarget: string; sortBy: string }) {
    return (
        <tr key={symbol.symbol}>
            <td>
                <Text color={FONT_COLOR.black} fontWeight={700} fontSize={FONT.small} className="px-1">
                    {symbol.symbol.toUpperCase()}
                </Text>

                {showName && (
                    <div style={{ color: FONT_COLOR.darkGrey, fontSize: FONT.small }} className="px-1">
                        {symbol.name}
                    </div>
                )}
            </td>

            {sortBy == 'quantity' ? (
                <>
                    <td>
                        <Text color={FONT_COLOR.darkGrey} fontSize={FONT.small} className="p-1 px-2">
                            {symbol.quantity[sortTarget].day}
                        </Text>
                    </td>
                    <td>
                        <Text color={FONT_COLOR.darkGrey} fontSize={FONT.small} className="p-1 ">
                            {symbol.quantity[sortTarget].week}
                        </Text>
                    </td>
                    <td>
                        <Text color={FONT_COLOR.darkGrey} fontSize={FONT.small} className="p-1">
                            {symbol.quantity[sortTarget].month}
                        </Text>
                    </td>
                </>
            ) : (
                <>
                    <td>
                        <Text color={symbol.change[sortTarget].day > 0 ? FONT_COLOR.green : FONT_COLOR.red} fontSize={FONT.small} className="p-1">
                            {(symbol.change[sortTarget].day * 100).toFixed(0)}%
                        </Text>
                    </td>
                    <td>
                        <Text color={symbol.change[sortTarget].week > 0 ? FONT_COLOR.green : FONT_COLOR.red} fontSize={FONT.small} className="p-1">
                            {(symbol.change[sortTarget].week * 100).toFixed(0)}%
                        </Text>
                    </td>
                    <td>
                        <Text color={symbol.change[sortTarget].month > 0 ? FONT_COLOR.green : FONT_COLOR.red} fontSize={FONT.small} className="p-1">
                            {(symbol.change[sortTarget].month * 100).toFixed(0)}%
                        </Text>
                    </td>
                </>
            )}
            <td className={'p-1'}>
                <div className="h-100">
                    <img src={symbol.chart} alt={symbol.symbol} width="80px" />
                </div>
            </td>
        </tr>
    );
}
