"use client"

import CreateProjectAction from "@/actions/projects/create";
import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Textarea, useDisclosure } from "@nextui-org/react";
import { usePathname, useRouter } from "next/navigation";

type FormSubmitThisType = {
  onClose: () => void;
};

export default function CreateProjectModalBtn() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const router = useRouter();
  const pathname = usePathname();

  const onFormSubmit = function (this: FormSubmitThisType) {
    router.push(pathname);
    
    return this.onClose();
  };

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
                  <Button type="submit" color="primary" onPress={onFormSubmit.bind({ onClose })}>Create</Button>
                </form>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
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