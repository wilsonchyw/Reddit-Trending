import _Card from 'src/components/card/Card';
import formatNumber from 'src/lib/formatNumber';
import { Col, Stack } from 'react-bootstrap';
import { FONT, FONT_COLOR } from 'src/variables/css';
export default function Notice({ title, content, Icon, isDate = false }) {
    const textTitle = {
        color: FONT_COLOR.grey,
        fontFamily: 'Helvetica, sans-serif',
        fontSize: FONT.normal,
        fontWeight: 700
    };
    const textContent = { fontFamily: 'Helvetica, sans-serif', fontSize: FONT.large, fontWeight: 700 };

    return (
        <Col className="p-2" sm={12} md={4}>
            <_Card>
                <div style={textTitle}>{title}</div>
                <Stack>
                    <div fontSize="lg" style={textContent} fontWeight="bold">
                        {content ? (isDate ? new Date(content).toLocaleString() : formatNumber(content)) : 'Loading...'}
                    </div>
                </Stack>
            </_Card>
        </Col>
    );
}
