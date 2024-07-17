"use client"

// import aiGenResponseAction from "@/actions/generate/ai-response";
import { Button, Link } from "@nextui-org/react";
// import { MouseEvent, useEffect, useState } from "react";
import { PlusIcon } from "../assets/plus-icon";

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

  return (
    <div className="grid h-screen w-full">
      <div className="flex flex-col p-4 justify-start gap-4 w-1/4 h-svh border-r">
        <div className=" flex flex-row justify-between items-center">
          <div className="font-medium">History</div>
          <Button isIconOnly color="success">
            <PlusIcon />
          </Button>
        </div>
        <div className="flex flex-col gap-2">
          <Link className="rounded-md bg-gray-900 p-3 transition-colors" color="foreground" href="#">Current</Link>
        </div>
      </div>
      <div className="flex flex-col w-3/4">
      </div>
    </div>
  );
}
