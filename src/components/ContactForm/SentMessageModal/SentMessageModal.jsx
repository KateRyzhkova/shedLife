import "./stylesSentMessageModal.css";

export default function SentMessageModal({
  toggleModalHandler,
  fieldsCheck,
  setEmptyInputs,
}) {
  const onClickWasSent = (e) => {
    toggleModalHandler(e);
    setEmptyInputs();
  };
  return (
    <div
      className="modalContainer"
      onClick={fieldsCheck ? onClickWasSent : toggleModalHandler}
    >
      {fieldsCheck ? (
        <div className="sentMessageModal">
          <h3>Message was sent.</h3>
          <p>Expect a response within 24 hours.</p>
          <button onClick={onClickWasSent}> ok </button>
        </div>
      ) : (
        <div className="sentMessageModal err">
          <h3>Please, fill in all fields.</h3>
          <button onClick={toggleModalHandler}> ok </button>
        </div>
      )}
    </div>
  );
}
