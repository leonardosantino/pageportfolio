import "../assets/styles/board.scss"

function Board(props) {
  return (
    <>
      <div className="my-5" id={props.id}>
        <div className="d-flex justify-content-center mb-5"><span className="normaltext">{props.normaltext}&nbsp;</span><span className="boldtext">{props.boldtext}</span></div>
        <div className="d-grid d-md-flex justify-content-evenly gap-3">{props.children}</div>
      </div>
    </>
  );
}
export default Board;