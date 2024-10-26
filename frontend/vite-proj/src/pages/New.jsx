import Container from "../ui/Container";
import Survey from "../ui/Survey";

const questionData = [
  {
    question: "Do you prefer coffee or tea?",
    options: {
      A: "Coffee",
      B: "Tea",
    },
  },
  {
    question: "Which season do you enjoy more?",
    options: {
      A: "Summer",
      B: "Winter",
    },
  },
];

export default function New() {
  return (
    <Container>
      <header className="mb-6">
        <h1 className="font-title mb-2 text-2xl text-neutral-950">
          Title Goes Here
        </h1>
        <p className="text-lg text-neutral-700">
          This is the subtitle explaining the content.
        </p>
      </header>
      <div className="grid grid-cols-2 gap-8">
        <div className="flex flex-col justify-start">
          <textarea
            rows="3"
            placeholder="Enter your text..."
            className="mb-4 rounded-xl border border-neutral-300 p-2 text-neutral-950"
          />
          <button className="btn btn-primary">Submit</button>
        </div>

        <Survey questions={questionData} />
      </div>
    </Container>
  );
}
