export default function Prompt({ onClick }) {
  return (
    <div className="min-h-[600px] w-[400px] rounded-lg bg-red-500 shadow-lg">
      Prompt
      <button onClick={onClick} className="btn btn-primary">
        Start
      </button>
    </div>
  );
}
