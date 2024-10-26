export default function Container({ children }) {
  return (
    <div className="bg-neutral-light container mx-auto w-4/5 rounded-lg p-8 text-center shadow-lg">
      {children}
    </div>
  );
}
