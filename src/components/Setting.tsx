import { Button, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'src/components/configurator/Range';
import Toggle from 'src/components/configurator/Toggle';
import graphQLHandler from 'src/lib/graphQLHandler';
import restHandler from 'src/lib/restHandler';
import { RootState } from 'src/store';
import { setForumData, setHeat, setLastestComment, setLastestVote, setTrendsData } from 'src/store/rawDataSlice';
import {
    setDateRange,
    //setFetchLimit,
    setMaxYAxis,
    setMinComment,
    setMinVote,
    setVisible,
    toggleNotice,
    toggleUseRestApi
} from 'src/store/settingSlice';
import { GraphQuery } from 'src/variables/graphQL';
export default function Setting() {
    const dispatch = useDispatch();

    const { fetchLimit, minVote, minComment, maxYAxis, dateRange, notice, useRestApi, visible } = useSelector((state: RootState) => state.setting);

    const fetchData = () => {
        const reducers = [setTrendsData, setForumData, setLastestVote, setLastestComment, setHeat];
        reducers.forEach(reducer => dispatch(reducer([])));
        const params = {
            limit: fetchLimit,
            minVote: minVote,
            minComment: minComment,
            dateRange: dateRange
        };
        if (useRestApi) {
            restHandler([
                [{ url: '/state/all', params }, data => dispatch(setTrendsData(data))],
                [{ url: '/state/vote', params }, data => dispatch(setLastestVote(data))],
                [{ url: '/state/comment', params }, data => dispatch(setLastestComment(data))],
                [{ url: '/state/distribution', params }, data => dispatch(setHeat(data))],
                [{ url: '/count/forum', params }, data => dispatch(setForumData(data))]
            ]);
        } else {
            //const query = getQueryAllString(params);
            graphQLHandler(GraphQuery.fetchAll, params, [
                data => dispatch(setTrendsData(data.state.all)),
                data => dispatch(setLastestVote(data.state.vote)),
                data => dispatch(setLastestComment(data.state.comment)),
                data => dispatch(setHeat(data.state.distribution)),
                data => dispatch(setForumData(data.count.forum))
            ]);
        }
    };

    const handleSave = () => {
        dispatch(setVisible(false));
        fetchData();
    };

    const handleClose = () => {
        dispatch(setVisible(false));
    };

    return (
        <>
            <Modal show={visible} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Settings</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Slider title="Min Vote" max={200} value={minVote} reducers={setMinVote} />
                    <Slider title="Min Comment" max={200} value={minComment} reducers={setMinComment} />
                    <Slider title="Max Chart Y Axis" max={6000} value={maxYAxis} reducers={setMaxYAxis} input />
                    {
                        //Slider title="Max fetch quantity" max={16000} min={1000} value={fetchLimit} reducers={setFetchLimit} />
                    }
                    <Slider title="Max fetch date range" max={4} min={1} value={dateRange} reducers={setDateRange} />
                    <Button variant="primary" onClick={fetchData}>
                        Refresh
                    </Button>
                </Modal.Body>
                <Modal.Body>
                    <Toggle title={'Notices'} content={`${notice ? 'On' : 'Off'}`} callback={() => dispatch(toggleNotice())} />
                    <Toggle
                        title={useRestApi ? 'RestAPI' : 'GraphQL'}
                        content={`Use ${useRestApi === true ? 'GraphQL' : 'RestAPI'}`}
                        callback={() => dispatch(toggleUseRestApi())}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
