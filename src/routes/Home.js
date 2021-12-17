import styles from "./Home.module.css";
import IMG from "../img/0.jpg";
import React, { useState } from "react";
import { connect } from "react-redux";
import ToDo from "../components/ToDo";
import {ADD} from "../store";

const Home = ({ state, addDispatch }) => {
    const [value, setValue] = useState("");
  
    const onSubmit = (event) => {
      event.preventDefault();
      addDispatch(value);
      setValue("");
    };
  
    const onChange = (event) => {
      setValue(event.target.value);
    };
  
    return (
      <div className={styles.form}>
          <img src={IMG} className={styles.bg} />
        <h1>📋 ToDo List</h1>
        <form onSubmit={onSubmit}>
          <input type="text" placeholder="Write your To-Do" value={value} onChange={onChange} maxLength="20" required></input>
          <button className={styles.home__btn}>✔</button>
        </form>
        <ul >
          {state?.map((state) => (
            <ToDo key={state.id} {...state} />
          ))}
        </ul>
      </div>
    );
  };
  
  const mapStateToProps = (state) => {
    return { state };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      addDispatch: (value) => dispatch({ type: ADD, id: Date.now(), text: value }),
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Home);