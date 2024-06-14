export default function PreviousJobs() {
  const genContent = () => {
    let content = [];
    for (let i = 0; i < 10; i++) {
      content.push(<tr key={i}>
        <td className="border border-slate-600">{i}</td>
        <td className="border border-slate-600">asd</td>
        <td className="border border-slate-600">dasdfs</td>
        <td className="flex flex-row justify-around border border-slate-600"><button>Update</button>|<button>Delete</button></td>
      </tr>);
    }
    return content;
  };

  return (
  <main className="flex min-h-screen flex-col items-center justify-between p-24 h-screen">
    {/* Main navigation panel */}
    <div className="flex flex-row flex-wrap gap-x-2 justify-start w-screen">
      <button className="border">Add</button>
    </div>
    {/* Data table */}
    <table className="border-collapse border w-5/6">
      <thead>
        <tr>
          <th className="border border-slate-600">Id</th>
          <th className="border border-slate-600">Name</th>
          <th className="border border-slate-600">Description</th>
          <th className="border border-slate-600">Actions</th>
        </tr>
      </thead>
      <tbody>
        {genContent()}
      </tbody>
    </table>
    {/* Page navigation panel */}
    <div className="flex flex-row flex-wrap gap-x-2 justify-evenly">
      <button className="border">Previous</button>
      <button className="border">Next</button>
    </div>
  </main>
  );
}