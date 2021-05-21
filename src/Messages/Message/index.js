import "./index.css";
import classNames from "classnames";

function Post({ sender, date, message, currentPost, index }) {
  let getStr = (date) => {
    let d = typeof date == "string" ? new Date(`${date.replaceAll("-", "/")} GMT+0`) : date;
    let month = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return `${d.getDate()} ${month[d.getMonth() + 1]}, ${pad(
      d.getHours()
    )}:${pad(d.getMinutes())}`;
  };

  let pad = (n) => (n < 10 ? `0${n}` : n);

  return (
    <div
      style={index === 0 ? { marginTop: `-${currentPost * 100}vh` } : null}
      className={classNames({
        message: true,
        before: index === currentPost - 1,
        current: index === currentPost,
        after: index === currentPost + 1,
      })}
    >
      <div className="post-message">{message}</div>
      <div className="post-footer">
        <div className="post-sender"> {sender}</div>
        <div className="post-date">{getStr(date)}</div>
      </div>
    </div>
  );
}

export default Post;
