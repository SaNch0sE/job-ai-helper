import { Card } from "@nextui-org/react";

export type ChatSide = "left" | "right";

export interface ChatEntry {
  id: number,
  text: string,
  side: ChatSide,
}

export default function ChatCard(entry: ChatEntry) {
  const styles = entry.side === "right" ? "flex items-start justify-end" : "flex items-start";

  return (
    <div className={styles} key={entry.id}>
      <Card className="whitespace-pre-line snap-end min-h-[40px] max-w-[400px] md:max-w-[700px] p-4">{entry.text}</Card>
    </div>
  )
}
