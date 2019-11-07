import React from "react";
import '../../App.css';

export default ({ close }) => (
  <div className="modal">
    <a className="close" onClick={close}>
      &times;
    </a>
    <div className="header"> Opções </div>
    <div className="content">
      {" "}
      {/* OPÇÕES */}
      <form>
          <input type="submit" value="Editar" className="em"/>
      </form>
      <br></br>
      <form>
          <input type="submit" value="Excluir" className="em"/>
      </form>
    </div>
  </div>
);