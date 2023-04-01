import { ReactElement } from 'react';
import { Button, Col, Dropdown, DropdownButton, Row } from 'react-bootstrap';
import Export from 'src/components/Export';
import Pagination_ from 'src/components/home/Pagination';
import Text from 'src/components/Text';
import useAgent from 'src/lib/useAgent';
import { FONT, FONT_COLOR } from 'src/variables/css';
interface Props {
    currentPage: number;
    data: any[];
    itemsPerPage: number;
    sortTarget: string;
    toggleName: Function;
    handlePageChange: Function;
    setItemPerPage: Function;
    setSorttarget: Function;
}

export default function Header({
    currentPage,
    data,
    handlePageChange,
    setItemPerPage,
    toggleName,
    itemsPerPage,
    sortTarget,
    setSorttarget
}: Props): ReactElement {
    const isMobile = useAgent();
    return (
        <Row>
            <Col md={4} className={isMobile ? 'd-flex justify-content-center mb-2' : 'd-flex justify-content-start'}>
                <Text color={FONT_COLOR.black} fontSize={FONT.bigger}>
                    Total {data.length} records
                </Text>
            </Col>
            <Col md={4} className={'d-flex justify-content-center'}>
                <Pagination_ currentPage={currentPage} total={Math.ceil(data.length / itemsPerPage)} handlePageChange={handlePageChange} />
            </Col>
            <Col md={4} className={isMobile ? 'd-flex justify-content-center mb-2' : 'd-flex justify-content-end'}>
                <Export datas={data} />
                <DropdownButton title={`Size`} size="sm" className="ms-2">
                    <Dropdown.Item onClick={() => setItemPerPage(10)}>10</Dropdown.Item>
                    <Dropdown.Item onClick={() => setItemPerPage(25)}>25</Dropdown.Item>
                    <Dropdown.Item onClick={() => setItemPerPage(50)}>50</Dropdown.Item>
                </DropdownButton>

                <div>
                    <Button size="sm" className="mx-1 ms-2" onClick={() => toggleName(pre => !pre)}>
                        Name
                    </Button>
                    <Button size="sm" className="mx-1" onClick={() => setSorttarget(sortTarget == 'comment' ? 'vote' : 'comment')}>
                        {sortTarget}
                    </Button>
                </div>
            </Col>
        </Row>
    );
}
