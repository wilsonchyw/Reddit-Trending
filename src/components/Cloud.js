import Canvas from "components/canvas";
import React from "react";
import { TransitionGroup } from "react-transition-group"; // ES6
import Velocity from "velocity-animate";
import "velocity-animate/velocity.ui";

export default class TagCloud extends React.Component {
    constructor(props) {
        super(props);
        this.state = { visible: true };
        this.handleClick = this.handleClick.bind(this);
        this.handleWheelScroll = this.handleWheelScroll.bind(this);
    }

    handleClick() {
        this.setState({ visible: !this.state.visible });
    }

    handleWheelScroll(e) {
        if (e.deltaY > 0) this.setState({ visible: false });
    }

    componentDidMount() {
        window.addEventListener("wheel", this.handleWheelScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("wheel", this.handleWheelScroll);
    }

    render() {
        return <TransitionGroup>{this.state.visible ? <TagCloudContent handleHide={()=>this.setState({ visible: false })}/> : null}</TransitionGroup>;
    }
}

class TagCloudContent extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillEnter(callback) {
        const element = document.getElementById("panel");
        Velocity(element, "slideDown", { duration: 300 }).then(callback);
    }

    componentWillLeave(callback) {
        const element = document.getElementById("panel");
        Velocity(element, "slideUp", { duration: 500 })
            .then(callback)
            .then(() => {
                document.getElementById("main-content").scrollIntoView();
            });
    }

    render() {
        return (
            <div
                className="d-flex align-items-center justify-content-center flex-column"
                id="panel"
                key="cloudTag"
                style={{ background: "linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)", height: "100vh" }}
            >
                <div>
                    <Canvas />
                </div>
                <div
                    className="d-flex align-items-center justify-content-center mt-3 zoom"
                    onClick={this.props.handleHide}
                >
                    <i className="fas fa-angle-double-down zoom-in-out " style={{ fontSize: "70px", color: "white" }}></i>{" "}
                </div>
            </div>
        );
    }
}
