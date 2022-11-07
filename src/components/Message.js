import { useDispatch, useSelector } from "react-redux";

export default function Message() {
    const { messageQueue } = useSelector((state) => state.message);
    //const handleClose = () => dispatch(deQueue());
    const dialog = { zIndex: "2000", position: "fixed", right: "1%", top: "1%" };
    const style = { animation: "fadeIn linear 1s" };
    return (
        messageQueue.length? (
            <div style={dialog}>
                {messageQueue.map((msg) => (
                    <div key={msg.content} style={style} className={msg.type === "error" ? "alert alert-danger" : "alert alert-primary"} role="alert">
                        <pre>{msg.content}</pre>
                    </div>
                ))}
            </div>
        ):<></>
    );
}
