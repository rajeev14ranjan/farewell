import './Post.css';


function Post({ sender, date, message, likes }) {
    let getStr = (d) => {
        let month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let hours = d.getHours();
        return `${d.getDate()} ${month[d.getMonth() + 1]}, ${pad(d.getHours())}:${pad(d.getMinutes())}`;
    }

    let pad = n => n < 10 ? `0${n}` : n;

    return (
        <div className="post">
            <div className="post-message">
                {message}
            </div>
            <footer className="post-footer">
                <span className="post-like">
                    <span className="post-sender"> - {sender}</span>
                    <sapn className="post-date">{getStr(date)}</sapn>
                </span>
            </footer>
        </div>
    );
}

export default Post;