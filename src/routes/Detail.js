import styles from "./Detail.module.css";
import IMG from "../img/0.jpg";
import React from "react";
import { connect } from "react-redux";
import { DELETE } from "../store";

const Detail = ({toDo, dispatch, history}) => {
    const handleDeleteToDo = (toDo, dispatch, history) => {
        dispatch({type: DELETE, id: toDo.id});
        return history.push("/");
    };
    return (
        <div className={styles.todo}>
            <img src={IMG} className={styles.bg} />
            <h2>🎈{toDo?.text}</h2>
            <h5>⏰{toDo?.id}</h5>
            <button className={styles.detail__btn} onClick={() => handleDeleteToDo(toDo, dispatch, history)}>
                Delete this detail
            </button>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    return {toDo: state?.find((toDo) => toDo.id === parseInt(id))};
};

const mapDispatchToProps = (dispatch) => {
    return { dispatch };
  };

export default connect(mapStateToProps, mapDispatchToProps) (Detail);