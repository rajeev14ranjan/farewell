import './Form.css';


function Form({ }) {
    //TODO: Connect to API
    /*      const postData = {
                action: 'savepost',
                message: 'Hi, This is my farewell message...',
                sender: 'Dummy sender',
            }
            const response = await fetch('./api/greet.php', {
                        method: 'post',
                        body: JSON.stringify(postData)
        });
    */

    return (
        <div className="form">
            <form class="form-inline">
                <label for="text">Message:</label>
                <input type="text" maxLength="5000" placeholder="Enter your message" />
                <label for="pwd">Name:</label>
                <input type="text" placeholder="Enter name" />
                <button type="button">Post</button>
            </form>
        </div>
    );
}

export default Form;