import _Card from 'src/components/card/Card';
import Loading from 'src/components/Loading';
import Text from 'src/components/Text';
import { useState } from 'react';
import { Button, Col, Row, Stack } from 'react-bootstrap';
import { FONT, FONT_COLOR } from 'variables/css';

export default function Forums({ forums, target, handleForumToggle, handleTargetToggle }) {
    const [hideContent, setHide] = useState<boolean>(false);
    return (
        <_Card hide={hideContent}>
            <Stack direction="column" onClick={() => setHide(pre => !pre)}>
                <div className="d-flex justify-content-between m-2">
                    <Col>
                        <Text>Forums</Text>
                    </Col>

                    <Col align="right">
                        <Button
                            size="sm"
                            variant="primary"
                            onClick={() => {
                                handleForumToggle(preState => {
                                    const forumObj = {};
                                    for (const forum in preState) {
                                        forumObj[forum] = true;
                                    }
                                    return forumObj;
                                });
                            }}
                            style={{ maxHeight: '30px' }}
                        >
                            {'ALL'}
                        </Button>{' '}
                        <Button size="sm" variant="primary" onClick={() => setHide(pre => !pre)} style={{ maxHeight: '30px' }}>
                            {hideContent ? 'SHOW' : 'HIDE'}
                        </Button>
                    </Col>
                </div>
            </Stack>

            {!hideContent && (
                <Stack>
                    <Row>
                        {Object.keys(forums).length ? (
                            Object.keys(forums).map(forum => (
                                <Col key={forum} xs={6} sm={4} lg={3} className="">
                                    <div className="form-check form-switch ms-2 my-1">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            checked={forums[forum]}
                                            onChange={() =>
                                                handleForumToggle(preState => ({
                                                    ...preState,
                                                    [forum]: !preState[forum]
                                                }))
                                            }
                                        />
                                        <Text fontSize={FONT.normal} color={FONT_COLOR.grey} fontWeight={400}>
                                            {forum}
                                        </Text>
                                    </div>
                                </Col>
                            ))
                        ) : (
                            <Loading />
                        )}
                    </Row>

                    <Row direction="column">
                        <div className="d-flex justify-content-between">
                            <Text>Target</Text>
                        </div>
                    </Row>

                    <Row>
                        <Col md={3} lg={3} className="">
                            <div className="form-check form-switch  ms-2 my-1">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    checked={target == 'comment'}
                                    onChange={() => handleTargetToggle(preState => (preState == 'comment' ? 'vote' : 'comment'))}
                                />
                                <Text fontSize={FONT.normal} color={FONT_COLOR.grey}>
                                    {target == 'comment' ? 'Comment' : 'Vote'}
                                </Text>
                            </div>
                        </Col>
                    </Row>
                </Stack>
            )}
        </_Card>
    );
}
