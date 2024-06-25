"use client"

import CreateProjectAction from "@/actions/projects/create";
import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Textarea, useDisclosure } from "@nextui-org/react";

export default function CreateProjectModalBtn() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button className="absolute bottom-10 right-10" onPress={onOpen}>Add Project</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="xl" backdrop="blur">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Add Project</ModalHeader>
              <ModalBody>
                <form className="flex flex-col gap-1" action={CreateProjectAction}>
                  <Input type="text" label="Name" name="name"></Input>
                  <Textarea label="Description" name="description"></Textarea>
                  <Textarea label="Features" name="features"></Textarea>
                  <Textarea label="Tech Stack" name="techstack"></Textarea>
                  <Input type="text" label="Links" name="links"></Input>
                  <Button type="submit" color="primary" onPress={onClose}>Create</Button>
                </form>
              </ModalBody>
              <ModalFooter>
                <Button variant="flat" color="secondary" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}