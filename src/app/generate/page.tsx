import { Button, Textarea } from "@nextui-org/react";

export default function GenerateResponse() {
  return (<form className="m-10 flex flex-wrap md:flex-nowrap gap-4 justify-around">
    <Textarea
      isRequired
      disableAutosize
      placeholder="Write a query..."
      className="basis-2/5"
      classNames={{
        base: "max-w-s",
        input: "resize-y min-h-[500px]",
      }}
    ></Textarea>
    <Button className="basis-1/5 self-center">Generate</Button>
    <Textarea
      disableAutosize
      isReadOnly
      className="basis-2/5"
      defaultValue="Here will be generated response"
      classNames={{
        base: "max-w-s",
        input: "resize-y min-h-[500px]",
      }}
    ></Textarea>
  </form>);
}
