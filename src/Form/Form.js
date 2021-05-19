import './Form.css';


function Form({ }) {
    return (
        <div className="form">
            <div className="form-message">
                <input type="text"></input>
            </div>
            <footer className="form-footer">
                <span className="form-like">
                    <span className="form-name"> </span>
                    <sapn className="form-action"></sapn>
                </span>
            </footer>
        </div>
    );
}

export default Form;