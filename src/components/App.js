import trashIcon from "../images/vector/Trash-icon.svg";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="page">
        <Header />
        <Main />

        <template id="template__elements">
          <div className="template__element">
            <img
              src={trashIcon}
              alt="Icono de Eliminar foto"
              className="element__trash-icon"
            />
            <div className="element__image-container">
              <img src=" " alt=" " className="element__image" />
            </div>
            <div className="element__button">
              <h2 className="element__text"></h2>
              <div className="element__container">
                <div className="element__like-button"></div>
                <span className="element__like-number"></span>
              </div>
            </div>
          </div>
        </template>
        <Footer />
      </div>
    </div>
  );
}

export default App;
