import { ReactElement } from 'react';
import Badge from 'react-bootstrap/Badge';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import _Card from 'src/components/card/Card';
import formatDate from 'src/lib/formatDate';
import useAgent from 'src/lib/useAgent';
import { Symbol } from 'src/types/Symbol';
import { FONT, FONT_COLOR } from 'src/variables/css';
import Divider from '../Divider';
import Text from '../Text';

interface Props {
    symbol: Symbol;
}

export default function SymbolDetail({ symbol }: Props): ReactElement {
    const isMobile = useAgent();
    return (
        <_Card style={{ width: '100%', paddingBottom: '100%' }} nopadding>
            <div style={{ position: 'absolute' }} className="m-3">
                <Row>
                    <Col xs={2} className="d-flex align-items-center">
                        <img src={`https://eodhistoricaldata.com/img/logos/US/${symbol.symbol.toUpperCase()}.png`} width="50px" height="50px" />
                    </Col>
                    <Col xs={10}>
                        <Text fontSize={FONT.normal} color={FONT_COLOR.darkGrey}>
                            {symbol.name}
                        </Text>
                        <br />
                        <Text fontSize={FONT.normal} fontWeight={800}>
                            {symbol.symbol.toUpperCase()}
                        </Text>
                    </Col>
                </Row>
                {!isMobile && <Divider width={95} />}
                <Row>
                    <Row>
                        <Text fontWeight={700} fontSize={FONT.normal}>
                            <Badge bg="primary">Up Vote</Badge>
                        </Text>
                    </Row>
                    <Row>
                        <Col>
                            <SymbolDetailTable symbol={symbol} target={'vote'} />
                        </Col>
                    </Row>
                </Row>
                <Row>
                    <Row>
                        <Text fontWeight={700} fontSize={FONT.normal}>
                            <Badge bg="primary">Comment</Badge>
                        </Text>
                    </Row>
                    <Row>
                        <Col>
                            <SymbolDetailTable symbol={symbol} target={'comment'} />
                        </Col>
                    </Row>
                </Row>
            </div>
        </_Card>
    );
}

function SymbolDetailTable({ symbol, target }) {
    return (
        <Table hover size="sm" className="symbol-detail" responsive>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Counter</th>
                    <th>Time</th>
                    <th>Change</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>{formatDate(1)}</th>
                    <td>
                        <Text fontWeight={500}>{symbol.quantity[target].day}</Text>
                    </td>
                    <td>1D</td>
                    <td>
                        <Text color={symbol.change[target].month > 0 ? FONT_COLOR.green : FONT_COLOR.red} fontSize={FONT.small}>
                            {symbol.change[target].day > 0 ? '+' : ''}
                            {(symbol.change[target].day * 100).toFixed(2)}%
                        </Text>
                    </td>
                </tr>
                <tr>
                    <th>{formatDate(7)}</th>
                    <td>
                        <Text fontWeight={500}>{symbol.quantity[target].week}</Text>
                    </td>
                    <td>7D</td>
                    <td>
                        <Text color={symbol.change[target].month > 0 ? FONT_COLOR.green : FONT_COLOR.red} fontSize={FONT.small}>
                            {symbol.change[target].week > 0 ? '+' : ''}
                            {(symbol.change[target].week * 100).toFixed(2)}%
                        </Text>
                    </td>
                </tr>
                <tr>
                    <th>{formatDate(30)}</th>
                    <td>
                        <Text fontWeight={500}>{symbol.quantity[target].month}</Text>
                    </td>
                    <td>30D</td>
                    <td>
                        <Text color={symbol.change[target].month > 0 ? FONT_COLOR.green : FONT_COLOR.red} fontSize={FONT.small}>
                            {symbol.change[target].month > 0 ? '+' : ''}
                            {(symbol.change[target].month * 100).toFixed(2)}%
                        </Text>
                    </td>
                </tr>
            </tbody>
        </Table>
    );
}
