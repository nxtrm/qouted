import {
  Editable,
  EditableInput,
  EditablePreview,
  Input,
  Text,
} from "@chakra-ui/react";

const QuoteElement = () => {
  return (
    <Editable>
      <EditablePreview />
      <Input as={EditableInput} />
    </Editable>
  );
};

export default QuoteElement;
