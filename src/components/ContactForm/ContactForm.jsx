import "./stylesContactForm.css";
import Input from "./Input/Input";
import SectionTitle from "../common/SectionTitle/SectionTitle";
import TextArea from "./TextArea/TextArea";
import SentMessageModal from "./SentMessageModal/SentMessageModal";

export default function ContactForm({
  toggleModalHandler,
  isOpenModal,
  name,
  email,
  phone,
  message,
  onNameChange,
  onEmailChange,
  onPhoneChange,
  onMessageChange,
  fieldsCheck,
  setEmptyInputs,
  onBlurErr,
  messageErr,
}) {
  return (
    <div className="contactForm">
      {isOpenModal && (
        <SentMessageModal
          toggleModalHandler={toggleModalHandler}
          fieldsCheck={fieldsCheck}
          setEmptyInputs={setEmptyInputs}
        />
      )}
      <div className="container">
        <div className="contactForm-title">
          <SectionTitle
            text="Interested in your own extra space?"
            color="#254543"
          />
          <p>Contact us today to get started.</p>
        </div>
        <form>
          <div className="contactForm-inputs">
            <Input
              className="contactFormInput"
              label="Name:"
              value={name}
              onChange={onNameChange}
            />
            <Input
              className="contactFormInput"
              label="Email:"
              value={email}
              onChange={onEmailChange}
              onBlur={onBlurErr}
              messageErr={messageErr}
            />
            <Input
              className="contactFormInput"
              label="Phone:"
              value={phone}
              onChange={onPhoneChange}
            />
          </div>
          <div>
            <TextArea onChange={onMessageChange} value={message} />
            <div className="contactForm-button">
              <button onClick={toggleModalHandler}>Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
