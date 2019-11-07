import React from "react";
import '../../App.css';

export default ({ close }) => (
  <div className="modal">
    <a className="close" onClick={close}>
      &times;
    </a>
    <div className="header"> Comentar  </div>
    <div className="content">
      {" "}
      {/* FORMULARIO DOS COMENTARIOS */}
      <form>
        <label>Descrição:</label>
        <textarea id="descricao" name="descricao" rows="7" cols="70">
        </textarea>
        <input type="submit" value="Enviar" className="en" />
      </form>

    <div className="comentarios">
        <label>Autor</label>
        <label>Comentário</label><br></br>
    </div>

    </div>
  </div>
);