import React, {useState} from "react";
// import Greet from "./components/Greet";
// import Counter from "./components/Counter";
// import Message from "./components/Message";
// import Subs from "./components/Subs";
// import FunClick from "./components/FunClick";
// import Api from "./components/Api";
// import Form from "./components/Form";
import { Login } from "./components/Login";
import { Posts } from "./components/Posts";

function App() {
  const [isLoggedIn, setIsLogginedIn] = useState(false);
  return (
    <div>
      {/* <Greet name="abhi" heroname="superman"> this is a test</Greet>
        <Greet name="abh" heroname="batman"/>
        <Greet name="ab" heroname="spiderman"/> */}

      {/* <Counter /> */}

      {/* <Message /> */}


      {/* <Subs/> */}


      {/* <FunClick/> */}

      {/* <Api/> */}

      {/* <Form/> */}


      <header>
        <h1>Day 21</h1>
      </header>

      {isLoggedIn ? (
        <Posts setIsLogginedIn={setIsLogginedIn} />
      ) : (
        <section className="login-wrapper">
          <Login setIsLogginedIn={setIsLogginedIn} />
        </section>
      )}


    </div>
  );
}

export default App;
