/* eslint-disable react/prop-types */
const Card = ({nombre, corredor, onClick}) => {
    return (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">HOLA! {nombre}</h5>
            <p className="card-text">
              Tu corredor favorito actual es <strong className="text-uppercase">{corredor}</strong> <br />
              🏎️🏎️🏎️🏎️
            </p>
            <button className="btn btn-primary" onClick={onClick}>
                Volver Atras
            </button>
          </div>
        </div>
      );
};


export default Card;