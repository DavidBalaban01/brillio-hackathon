export default function Prompt({ onClick, onChange }) {
  return (
    <div className="h-[250px] w-[400px] rounded-lg bg-white p-6">
      <header className="mb-6">
        <h1 className="font-title mb-2 text-2xl text-neutral-950">
          Title Goes Here
        </h1>
        <p className="text-lg text-neutral-700">
          This is the subtitle explaining the content.
        </p>
      </header>
      <input
        className="h-[56px] w-full rounded-md border border-neutral-300 p-2"
        // rows="2"
        placeholder="Enter your text..."
        // className="w-.25 mb-4 rounded-xl border border-neutral-300 p-2 text-neutral-950"
        onChange={(e) => onChange(e.target.value)}
      />
      {/* <button className="btn btn-primary" disabled={loading} onClick={onClick}> */}
      <button className="btn btn-primary mt-4" onClick={onClick}>
        {/* {loading ? "Loading..." : "Submit"} */}
        Submit
      </button>
    </div>
  );
}
