import { useEffect, useState } from "react";
import ContactForm from "./ContactForm";
import { validateEmail } from "../../helpers/validation";

export default function ContactFormContainer() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [fieldsCheck, setFieldsCheck] = useState(false);
  const [messageErr, setMessageErr] = useState("");

  useEffect(() => {
    name && email && phone && message
      ? setFieldsCheck(true)
      : setFieldsCheck(false);
  }, [name, email, phone, message]);

  const onBlurErr = () => {
    setMessageErr(validateEmail(email));
  };

  const onNameChange = (e) => {
    setName(e.target.value);
  };
  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const onPhoneChange = (e) => {
    setPhone(e.target.value);
  };
  const onMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const setEmptyInputs = () => {
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  const toggleModalHandler = (event) => {
    event.preventDefault();
    if (messageErr) return;
    setIsOpenModal(!isOpenModal);
  };

  return (
    <ContactForm
      toggleModalHandler={toggleModalHandler}
      name={name}
      email={email}
      phone={phone}
      message={message}
      isOpenModal={isOpenModal}
      onNameChange={onNameChange}
      onEmailChange={onEmailChange}
      onPhoneChange={onPhoneChange}
      onMessageChange={onMessageChange}
      fieldsCheck={fieldsCheck}
      setEmptyInputs={setEmptyInputs}
      onBlurErr={onBlurErr}
      messageErr={messageErr}
    />
  );
}
