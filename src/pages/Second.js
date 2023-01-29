import { Header } from "../components/header/header";
import { Table } from "../components/table/table";
import { Settings } from "../components/settings/settings";

const Second = () => {
  return (
    <body>
      <header>
        <Header />
      </header>
      <main>
        <Settings />
        <Table />
      </main>
      <footer></footer>
    </body>
  );
};
export { Second };
