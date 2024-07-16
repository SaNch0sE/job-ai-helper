"use client"

import EditProjectAction from "@/actions/projects/edit";
import IProjectTable from "@/interfaces/project-table.interface";
import { Button, Input, Modal, ModalBody, ModalContent, ModalHeader, Textarea, useDisclosure } from "@nextui-org/react";
import { ReadonlyURLSearchParams, usePathname, useRouter, useSearchParams } from "next/navigation";
import { toFormValue } from "./utils/to-form-value";
import DeleteProjectAction from "@/actions/projects/delete";

type FormSubmitThisType = {
  onClose: () => void;
};

export interface IViewProjectModalItem {
  item?: IProjectTable;
}

export default function ViewProjectModalBtn({ item }: IViewProjectModalItem) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  if (!item) {
    return (<></>);
  }

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
                  <div className="w-full flex justify-between">
                    <Button color="danger" onPress={async () => {
                      const formData = new FormData();

                      formData.append("id", item.id.toString());

                      return DeleteProjectAction(formData).finally(onFormSubmit.bind({ onClose }));
                    }}>
                      Delete
                    </Button>
                    <Button type="submit" color="success" onPress={onFormSubmit.bind({ onClose })}>
                      Update
                    </Button>
                  </div>
                </form>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
