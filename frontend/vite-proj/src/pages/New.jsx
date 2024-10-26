import Container from "../ui/Container";

export default function New() {
  // return (
  //   <Container>
  //     <h1 class="my-4 text-center text-3xl font-bold text-gray-800">
  //       Your Title Here
  //     </h1>
  //     <h2 class="mb-4 mt-2 text-center text-xl text-gray-600">
  //       Your Subtitle Here
  //     </h2>
  //     <div className="flex gap-5">
  //       <div className="flex items-center space-x-4">
  //         <input
  //           type="text"
  //           placeholder="Enter your text here..."
  //           className="w-[300px] rounded-md border px-4 py-2 outline-none"
  //         />
  //         <button className="btn btn-primary">Submit</button>
  //       </div>
  //       <div className="bg-lightblue-300 flex-1 p-5">GPT Generated Survey</div>
  //     </div>
  //   </Container>
  // );

  return (
    <div id="webcrumbs">
      <div className="w-[800px] rounded-lg bg-white p-8 shadow-lg">
        <header className="mb-6">
          <h1 className="font-title mb-2 text-2xl text-neutral-950">
            Title Goes Here
          </h1>
          <p className="text-lg text-neutral-700">
            This is the subtitle explaining the content.
          </p>
        </header>

        <div className="grid grid-cols-2 gap-8">
          {/* First Column: Input and Submit Button */}
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="Enter your text..."
              className="mb-4 rounded-md border border-neutral-300 p-2 text-neutral-950"
            />
            <button className="bg-primary text-primary-50 rounded-md py-2">
              Submit
            </button>
          </div>

          {/* Second Column: Questions with 2 Possible Answers */}
          <div>
            <div className="mb-4">
              <p className="mb-2 text-neutral-950">Question 1?</p>
              <div className="flex gap-4">
                <button className="rounded-md bg-neutral-200 px-4 py-2 text-neutral-950">
                  Answer 1
                </button>
                <button className="rounded-md bg-neutral-200 px-4 py-2 text-neutral-950">
                  Answer 2
                </button>
              </div>
            </div>

            <div className="mb-4">
              <p className="mb-2 text-neutral-950">Question 2?</p>
              <div className="flex gap-4">
                <button className="rounded-md bg-neutral-200 px-4 py-2 text-neutral-950">
                  Answer 1
                </button>
                <button className="rounded-md bg-neutral-200 px-4 py-2 text-neutral-950">
                  Answer 2
                </button>
              </div>
            </div>

            <div className="mb-4">
              <p className="mb-2 text-neutral-950">Question 3?</p>
              <div className="flex gap-4">
                <button className="rounded-md bg-neutral-200 px-4 py-2 text-neutral-950">
                  Answer 1
                </button>
                <button className="rounded-md bg-neutral-200 px-4 py-2 text-neutral-950">
                  Answer 2
                </button>
              </div>
            </div>

            <button className="bg-primary text-primary-50 rounded-md py-2">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// return (
//   <div id="webcrumbs">
//     <div className="w-[800px] rounded-lg bg-white p-8 shadow-lg">
//       <header className="mb-6">
//         <h1 className="font-title mb-2 text-2xl text-neutral-950">
//           Title Goes Here
//         </h1>
//         <p className="text-lg text-neutral-700">
//           This is the subtitle explaining the content.
//         </p>
//       </header>

//       <div className="grid grid-cols-2 gap-8">
//         {/* First Column: Input and Submit Button */}
//         <div className="flex flex-col">
//           <input
//             type="text"
//             placeholder="Enter your text..."
//             className="mb-4 rounded-md border border-neutral-300 p-2 text-neutral-950"
//           />
//           <button className="bg-primary text-primary-50 rounded-md py-2">
//             Submit
//           </button>
//         </div>

//         {/* Second Column: Questions with 2 Possible Answers */}
//         <div>
//           <div className="mb-4">
//             <p className="mb-2 text-neutral-950">Question 1?</p>
//             <div className="flex gap-4">
//               <button className="rounded-md bg-neutral-200 px-4 py-2 text-neutral-950">
//                 Answer 1
//               </button>
//               <button className="rounded-md bg-neutral-200 px-4 py-2 text-neutral-950">
//                 Answer 2
//               </button>
//             </div>
//           </div>

//           <div className="mb-4">
//             <p className="mb-2 text-neutral-950">Question 2?</p>
//             <div className="flex gap-4">
//               <button className="rounded-md bg-neutral-200 px-4 py-2 text-neutral-950">
//                 Answer 1
//               </button>
//               <button className="rounded-md bg-neutral-200 px-4 py-2 text-neutral-950">
//                 Answer 2
//               </button>
//             </div>
//           </div>

//           <div className="mb-4">
//             <p className="mb-2 text-neutral-950">Question 3?</p>
//             <div className="flex gap-4">
//               <button className="rounded-md bg-neutral-200 px-4 py-2 text-neutral-950">
//                 Answer 1
//               </button>
//               <button className="rounded-md bg-neutral-200 px-4 py-2 text-neutral-950">
//                 Answer 2
//               </button>
//             </div>
//           </div>

//           <button className="bg-primary text-primary-50 rounded-md py-2">
//             Submit
//           </button>
//         </div>
//       </div>
//     </div>
//   </div>
// );
// };
