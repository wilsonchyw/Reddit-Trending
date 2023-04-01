import Text from 'src/components/Text';
import useAgent from 'src/lib/useAgent';
import type { Symbol } from 'src/types/Symbol';
import { FONT, FONT_COLOR } from 'src/variables/css';
//import Pagination_ from './Pagination';

interface TableRowProps {
    showName: Function;
    symbol: Symbol;
    sortTarget: string;
    sortBy: string;
}

export default function TableRow({ symbol, sortTarget, sortBy, showName }: TableRowProps) {
    const isMobile = useAgent();
    return isMobile ? (
        <TableRowMobile showName={showName} symbol={symbol} sortTarget={sortTarget} sortBy={sortBy} />
    ) : (
        <TableRowWidth symbol={symbol} sortTarget={sortTarget} />
    );
}

export function TableRowWidth({ symbol, sortTarget }: { symbol: Symbol; sortTarget: string }) {
    return (
        <tr key={symbol.symbol}>
            <td>
                <>
                    <Text color={FONT_COLOR.black} fontWeight={700}>
                        {symbol.symbol.toUpperCase()}
                    </Text>
                    <br />

                    <Text color={FONT_COLOR.darkGrey}>{symbol.name}</Text>
                </>
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
                <Text color={FONT_COLOR.black} fontWeight={700} fontSize={FONT.normal}>
                    {symbol.symbol.toUpperCase()}
                </Text>
                <br />
                {showName && (
                    <Text color={FONT_COLOR.darkGrey} fontSize={FONT.small}>
                        {symbol.name}
                    </Text>
                )}
            </td>

            {sortBy == 'quantity' ? (
                <>
                    <td>
                        <Text color={FONT_COLOR.darkGrey} fontSize={FONT.small}>
                            {symbol.quantity[sortTarget].day}
                        </Text>
                    </td>
                    <td>
                        <Text color={FONT_COLOR.darkGrey} fontSize={FONT.small}>
                            {symbol.quantity[sortTarget].week}
                        </Text>
                    </td>
                    <td>
                        <Text color={FONT_COLOR.darkGrey}>{symbol.quantity[sortTarget].month}</Text>
                    </td>
                </>
            ) : (
                <>
                    <td>
                        <Text color={FONT_COLOR.darkGrey} fontSize={FONT.small}>
                            {(symbol.change[sortTarget].day * 100).toFixed(0)}%
                        </Text>
                    </td>
                    <td>
                        <Text color={FONT_COLOR.darkGrey} fontSize={FONT.small}>
                            {(symbol.change[sortTarget].week * 100).toFixed(0)}%
                        </Text>
                    </td>
                    <td>
                        <Text color={FONT_COLOR.darkGrey} fontSize={FONT.small}>
                            {(symbol.change[sortTarget].month * 100).toFixed(0)}%
                        </Text>
                    </td>
                </>
            )}
            <td className={'p-0 '}>
                <div className="h-100">
                    <img src={symbol.chart} alt={symbol.symbol} width="80px" />
                </div>
            </td>
        </tr>
    );
}
