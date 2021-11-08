import { useContext, useState, useRef, useEffect } from "react";
import { Context } from "../store";
import { addPost, removePost, updatePosts } from "../store/actions";
import { Table, Space, Layout } from 'antd';
import Title from "antd/lib/skeleton/Title";

const { Content, Footer } = Layout

const { Column } = Table;

const data = [
  {
    id: 1,
    userName: "Villu",
    topic: "Teema",
    dateCreated: "24.10.11"
  }
]
  

function Posts() {
  const [title, setTitle] = useState("No title added");
  const [state, dispatch] = useContext(Context);
  const inputRef = useRef(null);

  function deleteTopic(){
    console.log("click")
    data.splice(0)
    console.log(data)
  }

  // Ilma dependency massivita ehk ilma [] kutsub välja igal renderdusel
  // tühja massiivi dependencyna esimest korda
  // saab ka kutsuda teatud state muutustel välja

  useEffect(() => {
    dispatch(updatePosts([
      {
        id: 1,
        title: "Test-prefetched-array-1",
        user: "System assigned",
        dateCreated: Date.now()
      },
      {
        id: 2,
        title: "Test-prefetched-array-2",
        user: "System assigned",
        dateCreated: Date.now()
      },
      {
        id: 3,
        title: "Test-prefetched-array-3",
        user: "System assigned",
        dateCreated: Date.now()
      },
      {
        id: 4,
        title: "Test-prefetched-array-4",
        user: "System assigned",
        dateCreated: Date.now()
      },
    ]))
  }, [])

  // Või võite panna eraldi nupu, et "Get latest from database" (Sync)

  const handleSubmit = (e) => {
    e.preventDefault();

    setTitle("");

    addNewPost()

    if (inputRef.current) inputRef.current.focus();
  };


  const addNewPost = () => {
    const newPost = {
      id: 7,
      title: title,
      user: "System assigned",
      dateCreated: Date.now()
    };

    // Salvestame andmebaasi ja kui on edukas, 
    // siis teeme dispatchi ja uuendame state lokaalselt

    dispatch(addPost(newPost));
  };

  console.log({ inputRef });

  return (
    <>
      <Layout>
        <Content>
          <Table className="listpost" dataSource={ data }>
            <Column title="Post ID" dataIndex="id" key="id"/>
            <Column title="Username" dataIndex="userName" key="userName" />
            <Column title="Topic" dataIndex="topic" key="topic" />
            <Column title="Date Created" dataIndex="dateCreated" key="dateCreated" />
      
            <Column
                title="Actions"
                key="action"
                render={(text, record) => (
                  <Space size="middle">
                    <a onClick={ deleteTopic }>Delete</a>
                    <a>Update</a>
                    <a>Edit</a>
                  </Space>
                )}
            />
          </Table>
        </Content>
      </Layout>
      

      <div style={{ textAlign: "center" }}>
        <h1>Posts</h1>
        <form onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
          />
          <button type="submit">Submit</button>
        </form>

        {state.posts.data.map((e) => (
          <li key={e.id}>
            {e.id} {e.title} {e.user} {e.dateCreated}
          <span
            style={{ cursor: "pointer" }}
            onClick={() => dispatch(removePost(e.id))}
          > &#128540; </span>
          </li>
        ))}
      </div>
  </>
  );
}

export default Posts;
