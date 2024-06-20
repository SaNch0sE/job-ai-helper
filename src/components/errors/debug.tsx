export default function DebugErrorPage(error: unknown) {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-between p-24 h-screen">
        {JSON.stringify(error, null, 2)}
      </div>
    </>
  );
}