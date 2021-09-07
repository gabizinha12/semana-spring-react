import DataTable from "assets/components/DataTable";
import Footer from "assets/components/Footer";
import Navbar from "assets/components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="text-primary">Olá mundo</h1>
        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
