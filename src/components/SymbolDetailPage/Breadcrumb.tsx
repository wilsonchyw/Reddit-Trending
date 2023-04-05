import Link from 'next/link';
import { ReactElement } from 'react';
import _Card from 'src/components/card/Card';
import { capitalizeFirstLetter } from 'src/lib/text';
import { Symbol } from 'src/types/Symbol';
import { FONT, FONT_COLOR } from 'src/variables/css';
import Text from '../Text';

interface Props {
    symbol: Symbol;
}

export default function Breadcrumbs({ symbol }: Props): ReactElement {
    return (
        <_Card className="mt-3">
            <Text fontWeight={500} fontSize={FONT.bigger} color={FONT_COLOR.darkGrey} className="me-2">
                <Link href={`/${symbol.type}s`}>{capitalizeFirstLetter(symbol.type) + 's'}</Link>
            </Text>
            <Text fontWeight={700} fontSize={FONT.bigger} className="mx-2">
                {' > '}
            </Text>
            <Text fontWeight={700} fontSize={FONT.bigger} className="text-primary mx-2">
                {symbol.symbol.toUpperCase()}
            </Text>
        </_Card>
    );
}
