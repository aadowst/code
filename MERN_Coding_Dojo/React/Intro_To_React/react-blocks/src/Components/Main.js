import React, { Component } from 'react';
import styles from './Main.module.css';
import SubContents from './SubContents';
import Advertisement from './Advertisement';

class Main extends Component {
    render(){
        return (
            <div className={styles.main}>
                <div className={styles.subcontents}>

                <SubContents />
                <SubContents />
                <SubContents />
                </div>

                <Advertisement />
            </div>
        )
    }
}

export default Main;