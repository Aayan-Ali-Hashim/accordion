import Accordion from "./components/Accordion/Accordion";
import './App.css'
const App = ()=>  {
  const accordionData = [
    {
      title: "Section 1",
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
            laborum cupiditate possimus labore, hic temporibus velit dicta earum
            suscipit commodi eum enim atque at? Et perspiciatis dolore iure
            voluptatem.`,
    },
    {
      title: "Section 2",
      content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
            reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
            quaerat iure quos dolorum accusantium ducimus in illum vero commodi
            pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
            quidem maiores doloremque est numquam praesentium eos voluptatem amet!
            Repudiandae, mollitia id reprehenderit a ab odit!`,
    }
  ];
  return (
    <div className="mybody">
        <h1>FAQ</h1>
    <div className="main-container">
        {accordionData.map(({title,content}) => (
            <Accordion title={title} content={content} />
        ))}
    </div>
        </div>
);
}

export default App;
