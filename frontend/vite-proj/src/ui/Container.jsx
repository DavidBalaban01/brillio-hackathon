export default function Container({ children }) {
  return (
    <div
      className="container mx-auto w-4/5 bg-blue-100 p-8 text-center"
      // className="container bg-blue-100 p-8 text-center"
      style={{ height: "100vh" }}
    >
      {children}
    </div>
  );
}
