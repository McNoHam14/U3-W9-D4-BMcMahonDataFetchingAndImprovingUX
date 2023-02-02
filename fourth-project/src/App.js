import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav.jsx";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import SingleBook from "./components/SingleBook";
import HorrorBooks from "./data/horror.json";
import BookList from "./components/BookList";

function App() {
  return (
    <div>
      <MyNav />

      <Welcome />

      <SingleBook book={HorrorBooks[10]} />
      <BookList books={HorrorBooks} />

      <footer>
        <MyFooter />
      </footer>
    </div>
  );
}

export default App;
