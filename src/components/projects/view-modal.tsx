"use client"

import EditProjectAction from "@/actions/projects/edit";
import IProjectTable from "@/interfaces/project-table.interface";
import { Button, ButtonGroup, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Textarea, useDisclosure } from "@nextui-org/react";
import { ReadonlyURLSearchParams, usePathname, useRouter, useSearchParams } from "next/navigation";
import { toFormValue } from "./utils/to-form-value";
import DeleteProjectAction from "@/actions/projects/delete";

type FormSubmitThisType = {
  onClose: () => void;
};

export interface IViewProjectModalItem {
  item: IProjectTable;
}

export default function ViewProjectModalBtn({ item }: IViewProjectModalItem) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const onFormSubmit = function (this: FormSubmitThisType) {
    router.push(pathname);
    
    return this.onClose();
  };

  const addOldPath = (params: ReadonlyURLSearchParams) => {
    if (!params.get("fromId")) return;

    return (<input name="oldPath" value={`${pathname}?${searchParams.toString()}`} hidden readOnly></input>);
  };

  return (
    <>
      <Button size="sm" variant="flat" onPress={onOpen}>Edit</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="xl" backdrop="blur">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Edit project</ModalHeader>
              <ModalBody>
                <form className="flex flex-col gap-1" action={EditProjectAction}>
                  <input name="id" value={item.id.toString()} hidden readOnly></input>
                  {addOldPath(searchParams)}
                  <Input type="text" label="Name" name="name" defaultValue={item.name}></Input>
                  <Textarea label="Description" name="description" defaultValue={item.description}></Textarea>
                  <Textarea label="Features" name="features" defaultValue={toFormValue(item.features)}></Textarea>
                  <Textarea label="Tech Stack" name="techstack" defaultValue={toFormValue(item.techstack)}></Textarea>
                  <Input type="text" label="Links" name="links" defaultValue={toFormValue(item.links)}></Input>
                  <Button type="submit" color="success" onPress={onFormSubmit.bind({ onClose })}>Update</Button>
                </form>
              </ModalBody>
              <ModalFooter>
                <form action={DeleteProjectAction}>
                  <input type="number" name="id" value={item.id.toString()} hidden readOnly></input>
                  <ButtonGroup>
                    <Button type="submit" color="danger" onPress={onFormSubmit.bind({ onClose })}>
                      Delete
                    </Button>
                    <Button color="secondary" onPress={onClose}>
                      Close
                    </Button>
                  </ButtonGroup>
                </form>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}