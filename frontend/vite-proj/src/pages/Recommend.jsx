export default function Recommend({ doctor }) {
  return (
    <div
      className="rounded-lg bg-white p-6"
      style={{
        width: "700px",
        height: "500px",
        margin: "0px auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "2rem",
      }}
    >
      <h2>We recommend to go to this doctor</h2>
      <h1>DOCTOR{doctor}</h1>
    </div>
  );
}
