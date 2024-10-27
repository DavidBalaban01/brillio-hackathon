import ModelViewer from "./ModelViewer";

export default function Prompt({ onClick, onChange }) {
  return (
    <div
      className="flex rounded-lg bg-white p-6"
      style={{ width: "700px", height: "500px", margin: "0px auto" }}
    >
      <div className="prompt">
        <ModelViewer />
        <div>
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
      </div>
    </div>
  );
}
