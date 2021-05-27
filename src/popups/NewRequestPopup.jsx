import React, { useRef, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { connect } from "react-redux";
import forEach from "lodash/forEach";
import has from "lodash/has";
import isEmpty from "lodash/isEmpty";
import some from "lodash/some";
import { addNotification } from "actions/notificationsActions";
import Asterisk from "components/Asterisk";
import Icon from "components/Icon";
import Input from "components/Input";
import Toggle from "components/Toggle";

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 100%;
`;

const Popup = styled(motion.div)`
  background-color: #f8f8f8;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0 0.3);
  color: #000;
  padding: 56px 0;
  position: relative;
  overflow: hidden;
  max-width: 100vw;
  width: 420px;
`;

const Header = styled.div`
  background-color: #f0f0f0;
  border-bottom: 1px solid #bdbdbd;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 56px;
`;

const Title = styled.p`
  color: #333;
  font-size: 24px;
  font-weight: bold;
  line-height: 56px;
  text-align: center;
`;

const CloseButton = styled(Icon)`
  color: #bdbdbd;
  cursor: pointer;
  position: absolute;
  top: 12px;
  right: 12px;
  width: 32px;
  height: 32px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
`;

const Field = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;

  &:first-child {
    margin-top: 0;
  }
`;

const Label = styled.p`
  color: #333;
  font-size: 16px;
  font-weight: bold;
`;

const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  width: 300px;
  height: 36px;
`;

const StyledInput = styled(Input)`
  color: #333;
  margin-left: auto;
  padding: 8px;
  width: 300px;
  height: 36px;
`;

const Footer = styled.div`
  background-color: #f0f0f0;
  border-top: 1px solid #bdbdbd;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;
  padding: 12px;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 56px;
`;

const StyledButton = styled(motion.button)`
  background-color: #d5d5d5;
  border-radius: 4px;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
  margin-left: 12px;
  padding: 0 8px;
  white-space: nowrap;
  height: 32px;
`;

const CreateButton = styled(StyledButton)`
  background-color: #8fe388;
  color: #fff;
`;

function NewUserPopup({ dispatch, popup, onClose }) {
  const [refs] = useState({ name: useRef(), email: useRef() });
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    isActive: false,
  });

  const fieldsToValidate = ["name", "email"];

  function validateFields() {
    return fieldsToValidate.reduce((acc, field) => {
      switch (field) {
        case "name": {
          const result = { isEmpty: !formValues[field].length };
          if (some(result, (value) => value)) {
            return { ...acc, [field]: result };
          }
          return acc;
        }
        case "email": {
          const result = {
            isEmpty: !formValues[field].length,
          };
          if (some(result, (value) => value)) {
            return { ...acc, [field]: result };
          }
          return acc;
        }
        default:
          return acc;
      }
    }, {});
  }

  const [invalidFields, setInvalidFields] = useState({});
  const modalRef = useRef();

  const onFormValueChange = (prop, value) => {
    setFormValues({ ...formValues, [prop]: value });
  };

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  const onCancelButtonClick = () => {
    onClose();
  };

  const onCreateButtonClick = () => {
    const validatedFields = validateFields();
    console.log(validatedFields);
    setInvalidFields(validatedFields);
    if (!isEmpty(validatedFields)) {
      forEach(fieldsToValidate, (item) => {
        if (has(validatedFields, item)) {
          refs[item].current.focus();
          return false;
        }
      });
    }
    if (some(validatedFields, (field) => field.isEmpty)) {
      const notification = {
        type: "error",
        title: "Validation error",
        message: "Fill in the required fields.",
      };
      dispatch(addNotification(notification));
      return;
    }
    if (some(validatedFields, (field) => field.invalidEmail)) {
      const notification = {
        type: "error",
        title: "Validation error",
        message: "Invalid email",
      };
      dispatch(addNotification(notification));
      return;
    }
    popup.onCreate(formValues);
  };

  return (
    <Overlay onClick={closeModal} ref={modalRef}>
      <Popup
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        <Header>
          <Title>{popup.title}</Title>
          <CloseButton icon="close" onClick={onClose} />
        </Header>
        <Content>
          <Field>
            <Label>
              Name <Asterisk />
            </Label>
            <StyledInput
              ref={refs.name}
              invalid={invalidFields.name}
              onChange={(e) => onFormValueChange("name", e.currentTarget.value)}
              value={formValues.name}
              maxLength="15"
              autoFocus
            />
          </Field>
          <Field>
            <Label>
              Email <Asterisk />
            </Label>
            <StyledInput
              ref={refs.email}
              invalid={invalidFields.email}
              onChange={(e) =>
                onFormValueChange("email", e.currentTarget.value)
              }
              value={formValues.email}
              maxLength="10"
            />
          </Field>
          <Field>
            <Label>Active</Label>
            <ToggleWrapper>
              <Toggle
                onChange={(value) => onFormValueChange("isActive", value)}
                value={formValues.isActive}
              />
            </ToggleWrapper>
          </Field>
        </Content>
        <Footer>
          <StyledButton
            onClick={onCancelButtonClick}
            whileTap={{ scale: 0.95 }}
          >
            Cancel
          </StyledButton>
          <CreateButton
            onClick={onCreateButtonClick}
            whileTap={{ scale: 0.95 }}
          >
            Create
          </CreateButton>
        </Footer>
      </Popup>
    </Overlay>
  );
}

export default connect()(NewUserPopup);
