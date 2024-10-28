import Accordion from "./components/Accordion/Accordion";
import './App.css'
const App = ()=>  {
  const accordionData = [
    {
      title: "My order arrived, but it’s damaged!",
      content: `We’re so sorry to hear that! Please email us at hello@eat.com and let us know which flavors were damaged so we can get this sorted out right away.`,
    },
    {
      title: "Do you offer expedited shipping?",
      content: `We don’t offer expedited shipping at this time, but if you’re craving for food right now we promise it’s worth a few day’s wait.`,
    }
  ];
  return (
    <div className="mybody">
        <h1>Frequently Asked Questions</h1>
    <div className="main-container">
        {accordionData.map(({title,content}) => (
            <Accordion title={title} content={content} />
        ))}
    </div>
        </div>
);
}

export default App;
