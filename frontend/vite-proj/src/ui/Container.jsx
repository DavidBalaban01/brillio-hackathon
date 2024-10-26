export default function Container({ children }) {
  return (
    // <div className="bg-neutral-light container mx-auto flex w-4/5 items-center justify-center rounded-lg p-8 text-center shadow-lg">
    <div className="container mx-auto flex h-[500px] w-4/5 justify-center bg-blue-100 p-8 text-center">
      {children}
    </div>
  );
}
