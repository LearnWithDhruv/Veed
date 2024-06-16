function Cards() {
  return (
    <div className="w-full flex flex-col md:flex-row justify-center items-center p-8 px-10 gap-4">
      {[
        {
          title: "Basic",
          subtitle: "Ideal Starter Pack",
          price: "₹290.67",
          offer: "SAVE 36%",
          button: "Go Basic",
          points: [
            "Remove watermark",
            "Subtitles 12 hr/yr",
            "No Upload Size Limit",
            "Full HD 1080p Exports ",
          ],
        },
        {
          title: "Pro",
          subtitle: "For pro video creation",
          price: "₹599",
          offer: "SAVE 21%",
          button: "Go Pro",
          points: [
            "Subtitles 24 hr/yr",
            "Clean Audio ",
            "Eye Contact Correction ",
            "Stock Audio & Video Library",
            "Download Subtitles ",
          ],
        },
        {
          title: "Business",
          subtitle: "For up to 5 people",
          price: "₹1500",
          offer: "SAVE 14%",
          button: "Go Business",
          points: [
            "AI Avatars 4 hr/yr",
            "Subtitles 134 hr/yr",
            "Translate to 50+ Languages ",
            "Text to Speech 60 hr/yr",
            "Customizable Video Templates ",
            "4k Export Quality",
          ],
        },
        {
          title: "Enterprise",
          subtitle: "Scale video across your team",
          price: "Let's Talk",
          offer: "Contact Us",
          button: "Book a Demo",
          points: [
            "Personalized AI avatars ",
            "Brand assets & templates ",
            "Multiple workspaces ",
            "Custom usage limits",
            "Creator training",
            "Account manager",
          ],
        },
      ].map((item, index) => {
        return <Card key={index} item={item} index={index} />;
      })}
    </div>
  );
}

function Card({ item, index }) {
  return (
    <div
      className={`relative w-[100%] md:w-[25%] h-[500px] rounded-2xl bg-white p-4 flex flex-col justify-start items-start gap-1 ${
        index === 1 ? "border-[3px] border-[#6474FF]" : ""
      }`}
    >
      {index === 1 && (
        <div className="absolute right-8 top-0 bg-[#6474ff] p-2 flex justify-center items-center rounded-b-2xl gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
            />
          </svg>

          <h2 className="font-roboto font-semibold text-white text-sm">
            RECOMMENDED
          </h2>
        </div>
      )}
      <h1 className="font-medium font-roboto text-2xl">{item.title}</h1>
      <h3 className="font-normal font-roboto text-lg">{item.subtitle}</h3>
      <div className="flex mt-4 gap-2">
        <h3 className="font-medium font-roboto text-3xl">{item.price}</h3>
        <div className="flex justify-center items-center bg-[#D0FF99] rounded-full px-2 text-sm font-semibold font-roboto text-[rgb(0,96,0)]">
          {item.offer}
        </div>
      </div>
      <p className="text-xs font-regular font-roboto">
        Per user / month, billed yearly
      </p>
      <div className="w-full flex justify-center items-center p-4 border-b-[1px] border-gray-200">
        <button
          className={`w-full py-4 border-2 border-[#6474FF] text-lg font-semibold font-roboto rounded-full ${
            index === 1 ? "bg-[#6474ff] text-white" : ""
          }`}
        >
          {item.button}
        </button>
      </div>
      <ul className="w-full flex flex-col gap-2 p-2 my-2">
        {item.points.map((points, index) => {
          return (
            <li key={index} className="flex justify-start items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
              <h4>{points}</h4>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Cards;
