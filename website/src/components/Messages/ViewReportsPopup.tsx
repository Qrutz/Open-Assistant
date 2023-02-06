import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Textarea,
  } from "@chakra-ui/react";
  import { useTranslation } from "next-i18next";
  import { useState } from "react";
  import { post } from "src/lib/api";
  import useSWRMutation from "swr/mutation";
  
  interface ReportPopupProps {
    show: boolean;
    onClose: () => void;
  }
  
  export const ViewReportsPopup = ({ show, onClose }: ReportPopupProps) => {
   

    
    return (
      <Modal isOpen={show} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>All reports</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* TODO: Fetch all reports for this message and display them here */ }
          </ModalBody>
  
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={(e) => console.log("OK")}>
              OK
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  };
  