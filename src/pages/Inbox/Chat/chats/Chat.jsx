import styles from "./Chat.module.css";
import { GoSearch } from "react-icons/go";
import {useState,useEffect} from "react";
import image1 from "../../../../image/image1.svg";
import image2 from "../../../../image/image2.svg";
import image3 from "../../../../image/image3.svg";
import image4 from "../../../../image/image4.svg";
import girlimage from "../../../../image/girlimage.svg";
import messageimg from "../../../../image/messageimg.svg";
const Chat=()=>{
      const [data, setData] = useState([]);
     useEffect(() => {
    const row = [
      {
        id: 1,
        name: "James Watson",
        data: "Chupa chups Candy sweet caremels chocol...",
        time: " ",
      },
      {
        id: 2,
        name: "Felecia Rower",
        data: "I will purchase it for sure",
        time: "09.40 AM",
      },
      {
        id: 3,
        name: "Felecia Rower",
        data: "I will purchase it for sure",
        time: "01:16 PM",
      },
      {
        id: 4,
        name: "Felecia Rower",
        data: "I will purchase it for sure",
        time: " ",
      },
      {
        id: 5,
        name: "Felecia Rower",
        data: "I will purchase it for sure",
        time: "02:30 PM",
      },
      {
        id: 6,
        name: "Felecia Rower",
        data: "I will purchase it for sure",
        time: "Aug 25",
      },
      {
        id: 7,
        name: "Felecia Rower",
        data: "I will purchase it for sure",
        time: " ",
      },
      {
        id: 8,
        name: "Felecia Rower",
        data: "I will purchase it for sure",
        time: "01:16 PM",
      },
      {
        id: 9,
        name: "Felecia Rower",
        data: "I will purchase it for sure",
        time: "Aug 24",
      },
      {
        id: 10,
        name: "Felecia Rower",
        data: "I will purchase it for sure",
        time: " ",
      },
    
    ];
    setData(row);
  }, []);
return (
  <div className={styles.chatbox}>
    <div className={styles.chatsidebar}>
      <div className={styles.chatsearchbar}>
        <p>
          <img src={image1} />
        </p>
        <div className={styles.leftheader}>
          <button className={styles.btnsearch}>
            <GoSearch
              style={{
                fontSize: "20px",
                color: "#C9C9C9",
                background: "none",
                marginTop: "6px",
              }}
            />
          </button>
          <input
            type="text"
            className={styles.inputsearch}
            placeholder="Search mail"
          />
        </div>
      </div>
      <div className={styles.chatheading}>Chats</div>
      <div className={styles.chatname1}>
        <p>
          <img src={image2} />
        </p>
        <div>
          <p>Felecia Rower</p>
          <p>I will purchase it for sure</p>
        </div>
        <p>Aug 24</p>
      </div>
      <div className={styles.chatname2}>
        <p>
          <img src={image3} />
        </p>
        <div>
          <p>Adalbarto Granzin</p>
          <p>If takes long you can mail...</p>
        </div>
        <p>Aug 24</p>
      </div>
      <div className={styles.chatheading}>Contacts</div>
      <div className={styles.contacts}>
        {data.map((item,id) => (
          <div key={item.id}className={styles.chatname3}>
            <p>
              <img src={girlimage} />
            </p>
            <div>
              <p>{item.name}</p>
              <p>{item.data}</p>
            </div>
            <p>{item.time}</p>
          </div>
        ))}
      </div>
    </div>
    <div className={styles.messaging}>
      <p>
        <img src={messageimg} />
      </p>
      <div className={styles.button}>
        <p>Start Conversation</p>
      </div>
    </div>
  </div>
);
}
export default Chat;