import styles from "./ToDo.module.css";
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { DELETE } from "../store";

const ToDo = ({text, onBtnClick, id}) => {
    return (
        <>
        {text && (
            <li className={styles.li}>
                <Link to={`/${id}`}>
                    {text}
                </Link>
                <button className={styles.btn} onClick={onBtnClick}>❌</button>
            </li>
        )}
        </>
    );
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return{
        onBtnClick: () => dispatch({ type: DELETE, id: ownProps.id})
    };
}

export default connect(null, mapDispatchToProps)(ToDo);