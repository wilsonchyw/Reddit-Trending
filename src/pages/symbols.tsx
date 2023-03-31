import { useState } from 'react';
import { Table } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';

import DataTable from 'src/components/SymbolPage/DataTable';
import type { Symbol } from 'src/types/Symbol';

function SymbolTable({ symbols }: { symbols: Symbol[] }) {
    //const [symbols, setSymbols] = useState([]);
    const [length, setLength] = useState<Number>(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(25);
    const [sortMethod, setSortMethod] = useState<String>('vote');
    const [sortTarget, setSortTarget] = useState<String>('vote');
    /* useEffect(() => {
        const fetchSymbols = async page => {
            const response = await axios.get(`http://api.rtrend.site:3003/api/symbol?page=${(page - 1) * rowsPerPage}&sort=${sortMethod}`);
            setSymbols(response.data.data);
            setLength(response.data.total);
            console.log(response.data.data);
            console.log('total,', response.data.total);
        };
        fetchSymbols(currentPage);
    }, [currentPage,sortMethod]); */
    console.log({ sortMethod });

    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = symbols; //.slice(indexOfFirstRow, indexOfLastRow);

    const renderTableHeader = () => {
        return (
            <thead>
                <tr>
                    <th>Symbol</th>
                    <th>Counter</th>
                    <th>24 Hour change</th>
                    <th>30 Day change</th>
                    <th onClick={() => setSortMethod('vote')}>Vote</th>
                    <th onClick={() => setSortMethod('comment')}>Comment</th>
                </tr>
            </thead>
        );
    };

    const renderTableRows = () => {
        return (
            <tbody>
                {currentRows
                    .sort((a, b) => b.change[sortMethod].max - a.change[sortMethod].max)
                    .map((symbol: Symbol) => (
                        <tr key={symbol.symbol}>
                            <td>
                                <div>{symbol.symbol.toUpperCase()}</div>
                                <div>{symbol.name}</div>
                            </td>
                            <td className="p-0">
                                {' '}
                                <img src={symbol.chart} />
                            </td>
                            <td>
                                <div>
                                    {symbol.change.vote.max}
                                    <div></div>
                                    {Math.round(symbol.change.vote.precentage)}%
                                </div>
                            </td>
                            <td>
                                <div>
                                    {symbol.change.comment.max}
                                    <div></div>
                                    {Math.round(symbol.change.comment.precentage)}%
                                </div>
                            </td>
                        </tr>
                    ))}
            </tbody>
        );
    };

    const renderPagination = () => {
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(length / rowsPerPage); i++) {
            pageNumbers.push(i);
        }
        return (
            <nav>
                <ul className="pagination">
                    {pageNumbers.map(number => (
                        <li key={number} className="page-item">
                            <a href="#" className="page-link" onClick={() => setCurrentPage(number)}>
                                {number}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        );
    };

    return (
        <div>
            <Table striped bordered hover>
                {renderTableHeader()}
                {renderTableRows()}
            </Table>
            {renderPagination()}
        </div>
    );
}

export default function SymbolPage({ symbols }: { symbols: Symbol[] }) {
    return (
        <Container fluid>
            <Stack className="m-2">
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
