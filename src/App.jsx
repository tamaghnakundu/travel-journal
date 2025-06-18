import Header from "./components/Header";
import Entry from "./components/Entry";
import data from "./data";

export default function () {
  const elements = data.map((entry) => {
    return <Entry key={entry.id} {...entry} />;
  });

  return (
    <>
      <Header />
      {elements}
    </>
  );
}
