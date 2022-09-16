export default function Loading({isWhite=false}) {
    return (
        <div className={`spinner-border m-auto ${isWhite?"text-white":""}`} role="status" style={{ width: "6rem", height: "6rem" }}>
            <span className="sr-only">Loading...</span>
        </div>
    );
}
