"use client"

// import aiGenResponseAction from "@/actions/generate/ai-response";
import { Button, Card, Link, ScrollShadow, Textarea } from "@nextui-org/react";
// import { MouseEvent, useEffect, useState } from "react";
import { PlusIcon } from "../assets/plus-icon";
import { SendArrowIcon } from "../assets/send-arrow-icon"

export default function GenerateResponse() {
  // const [query, setQuery] = useState('');
  // const [response, setResponse] = useState('');
  // const [clicked, setClicked] = useState(false);
  // const [btnAvailable, setBtnAvailable] = useState(true);
  //
  // const onGenerate = async (e: MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();
  //
  //   if (query === '') return;
  //
  //   setClicked(true);
  // };
  //
  // useEffect(() => {
  //   if (!clicked) return;
  //   setBtnAvailable(false);
  //
  //   const genResponse = async () => {
  //     const formData = new FormData();
  //
  //     formData.set("query", query);
  //
  //     const generated = await aiGenResponseAction(formData);
  //
  //     setResponse(response + "\n" + generated)
  //
  //     setClicked(false);
  //   };
  //
  //   genResponse();
  //
  //   return () => { setBtnAvailable(true) };
  // }, [clicked, response, query])
  const exampleText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud";

  return (
    <div className="flex flex-row w-full h-full overflow-hidden">
      <div className="flex flex-col shrink p-4 md:justify-start justify-between gap-4 border-r w-20 md:w-1/4">
        <div className="hidden md:flex md:flex-row justify-between items-center">
          <div className="font-medium">History</div>
          <Button isIconOnly color="success">
            <PlusIcon />
          </Button>
        </div>
        <div className="flex flex-col gap-2">
          <div className="w-full" key={1}>
            <Button className="md:hidden min-w-full transition-colors p-0" href="#">{1}</Button>
            <Link className="hidden md:block rounded-md bg-gray-900 p-3 transition-colors" color="foreground" href="#">{"Current"}</Link>
          </div>
        </div>
        <div className="md:hidden flex flex-row items-center">
          <Button className="min-w-full" isIconOnly color="success">
            <PlusIcon />
          </Button>
        </div>
      </div>
      <div className="flex flex-col p-4 justify-between w-full md:w-3/4">
        <ScrollShadow hideScrollBar className="flex-1 overflow-auto">
          <div className="grid gap-4">
            <div className="flex items-start p-2" key={1}>
              <Card className="whitespace-pre-line min-h-[40px] max-h-[300px] max-w-[400px] p-4">{exampleText}</Card>
            </div>
            <div className="flex items-start justify-end" key={2}>
              <Card className="whitespace-pre-line min-h-[40px] max-h-[300px] max-w-[400px] p-4">{exampleText + "\n\n2222"}</Card>
            </div>
          </div>
        </ScrollShadow>
        <div className="flex flex-row w-full bg-default-100 items-end p-2 rounded-xl">
          <Textarea minRows={1} placeholder="Write query here..."></Textarea>
          <Button isIconOnly color="success">
            <SendArrowIcon />
          </Button>
        </div>
      </div>
    </div>
  );
}
