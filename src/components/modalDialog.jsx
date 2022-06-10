import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Icon,
  UnorderedList,
  ListItem,
  Link
} from '@chakra-ui/react'
import { ViewIcon } from '@chakra-ui/icons'


const ModalDialog = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button onClick={onOpen} bg="white">
        <Icon as={ViewIcon} />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <UnorderedList>
              <ListItem>Bike ID: {props.bike?.bike_id}</ListItem>
              <ListItem>Vehicle Type: {props.bike?.vehicle_type}</ListItem>
              <ListItem>Total Booking: {props.bike?.total_bookings}</ListItem>
              <ListItem>IOS: <Link>{props.bike?.ios}</Link></ListItem>
              <ListItem>Android: <Link>{props.bike?.android}</Link></ListItem>
              <ListItem>Is Reserved: {props.bike?.is_reserved ? "Yes" : "No"}</ListItem>
            </UnorderedList>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ModalDialog