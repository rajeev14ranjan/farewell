import { useState, useEffect } from "react";
import Message from "./Message";
import Form from "../Form";
import {
  ArrowCircleDownIcon,
  ArrowCircleUpIcon,
  PlusCircleIcon,
  XCircleIcon,
} from "@heroicons/react/solid";
import { getLastPostIndex, setLastPostIndex } from '../Service/localStorage';
// import dummyData from "./dummyData.js";
import "./index.css";

function Messages() {
  // const [data, setData] = useState(dummyData);
  const [showAddMessageForm, setShowAddMessageForm] = useState(false);

  const [data, setData] = useState([]);
  const [currentPost, setCurrentPost] = useState(getLastPostIndex());

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("./api/post.php", {
        method: "post",
        body: JSON.stringify({ action: "getposts" }),
      });
      let data = await response.json();
      setData(data);
    };
    fetchData();
  }, []);

  const callback = ({ message, sender }) => {
    let newData = [
      ...data,
      {
        id: `${data.length}`,
        date: new Date(),
        message,
        sender,
      }
    ];

    setData(newData);
    setShowAddMessageForm(false);
    setCurrentPost(newData.length - 1);
    setLastPostIndex(newData.length - 1);
  };

  return (
    <>
      {showAddMessageForm ? (
        <Form callback={callback}></Form>
      ) : (
        <div className="messages">
          {data.map((d, index) => (
            <Message
              key={d.id}
              {...d}
              currentPost={currentPost}
              index={index}
            />
          ))}
        </div>
      )}
      <section className="controls">
        <div className="next-prev">
          <ArrowCircleUpIcon
            className="icon"
            disabled={currentPost < 1}
            onClick={() => {
              if (currentPost > 0) {
                setCurrentPost((post) => {
                  setLastPostIndex(post - 1);
                  return post - 1
                });
              }
            }}
          />
          <ArrowCircleDownIcon
            className="icon"
            disabled={currentPost >= data.length - 1}
            onClick={() => {
              if (currentPost < data.length - 1) {
                setCurrentPost((post) => {
                  setLastPostIndex(post + 1);
                  return post + 1
                });
              }
            }}
          />
        </div>
        {showAddMessageForm ? (
          <XCircleIcon
            className="icon add"
            onClick={() => setShowAddMessageForm(false)}
          />
        ) : (
          <PlusCircleIcon
            className="icon add"
            onClick={() => setShowAddMessageForm(true)}
          />
        )}
      </section>
    </>
  );
}

export default Messages;
