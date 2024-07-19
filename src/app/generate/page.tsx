"use client"

import aiGenResponseAction from "@/actions/generate/ai-response";
import { Button, Link, Textarea } from "@nextui-org/react";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { PlusIcon } from "../assets/plus-icon";
import { SendArrowIcon } from "../assets/send-arrow-icon"
import ChatCard, { ChatEntry } from "@/components/generate/chat-card";

export default function GenerateResponse() {
  const [query, setQuery] = useState('');
  const [clicked, setClicked] = useState(false);
  const [btnAvailable, setBtnAvailable] = useState(true);
  const [chatEntries, setChatEntries] = useState<ChatEntry[]>([]);
  const chatBlockRef = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = (ref: MutableRefObject<null | HTMLDivElement>) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  };
  useEffect(() => scrollToBottom(chatBlockRef), [chatEntries])

  const onSend = () => {
    if (query === "") return;
    setChatEntries(chatEntries.concat({
      id: chatEntries.length,
      text: query,
      side: "left"
    }));

    setClicked(true);
  };

  useEffect(() => {
    if (!clicked || query.length < 4) return;

    setBtnAvailable(false);

    const genResponse = async () => {
      const formData = new FormData();

      formData.set("query", query);

      setQuery("");
      const generated = await aiGenResponseAction(formData);

      if (generated) {
        setChatEntries(chatEntries.concat({
          id: chatEntries.length,
          text: generated,
          side: "right",
        }));
      }

      setClicked(false);
    };

    genResponse();

    return () => { setBtnAvailable(true) };
  }, [clicked, chatEntries, query])

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
      <div className="flex flex-col p-4 gap-4 justify-between w-full md:w-3/4">
        <div className="overflow-y-scroll overflow-x-hidden no-scrollbar flex-1">
          <div ref={chatBlockRef} className="grid gap-4">
            {chatEntries.map(ChatCard)}
          </div>
        </div>
        <form onSubmit={onSend} className="flex flex-row w-full bg-default-100 items-end p-2 rounded-xl">
          <Textarea
            minRows={1}
            placeholder="Write query here..."
            value={query}
            onKeyDown={(e) => (e.key === "Enter" ? onSend() : null)}
            onChange={(e) => setQuery(e.target.value)}
          ></Textarea>
          <Button
            isIconOnly
            color="success"
            type="submit"
            disabled={!btnAvailable}
          >
            <SendArrowIcon />
          </Button>
        </form>
      </div>
    </div>
  );
}
