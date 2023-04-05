import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import DataTable from 'src/components/SymbolPage/DataTable';
import useAgent from 'src/lib/useAgent';
import type { Symbol } from 'src/types/Symbol';

export default function StockPage({ symbols }: { symbols: Symbol[] }) {
    const isMobile = useAgent();

    return (
        <Container fluid className={isMobile && 'p-0'}>
            <Stack className={isMobile ? 'm-0' : 'm-2'}>
                <DataTable data={symbols} />
            </Stack>
        </Container>
    );
}

export async function getStaticProps(context) {
    return fetch(`http://api.rtrend.site:3003/api/symbol?page=0&per_page=9999&type=stock`)
        .then(response => response.json())
        .then(symbol => {
            return {
                props: {
                    symbols: symbol
                } // will be passed to the page component as props
            };
        })
        .catch(err => {
            console.log(err);
            return {
                notFound: true // will be passed to the page component as props
            };
        });
}
