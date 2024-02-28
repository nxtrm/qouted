import {
  Button,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { BiTrashAlt } from "react-icons/bi";
import useDelete from "../hooks/useDelete";

interface Props {
  slug: string;
}

function DeleteQuote({ slug }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  function handleDeletion() {
    onClose();
    useDelete(slug);
    console.log("deleted" + slug);
  }

  const red = useColorModeValue('red.300', 'red.100')

  return (
    <>
      <IconButton
        fontSize="25px"
        onClick={onOpen}
        aria-label="Edit"
        color={red}
        bgColor="transparent"
        icon={<BiTrashAlt />}
      />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirm Deletion</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Are you sure you want to delete the quote?</ModalBody>

          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              onClick={handleDeletion}
              variant={"outline"}
              colorScheme="red"
            >
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default DeleteQuote;
