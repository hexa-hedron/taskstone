import React from 'react';
import axios from 'axios';

import { changeTaskName, changeTaskType } from '../actions/App'

const ROOT_ENDPOINT = 'http://localhost:3001';

const Form = ({ taskName,taskType,changeTaskName,changeTaskType,initializeForm }) => {

    const addTask = e => {
        e.preventDefault();
        axios({
            method:"post",
            url:"",
            data:{
                taskName:taskName,
                taskType:taskType
            }
            // TODO:ヘッダ情報localStorageから取得
        })
        .then(res => {
            initializeForm();
            const _users = res.data;
            // TODO:リストに追加
        })
        .catch(err => {
            console.log(err);
            alert('登録中にエラーが発生しました')
            // TODO:失敗時処理
        })
    }

    return (
        <div>
            <form>
                <label>
                    内容：
                    <input type="text" value={ taskName } onChange={e => changeTaskName(e.target.value)}/>
                </label>
                <label>
                    種別：
                    <select value={ taskType } type="select" defaultValue="0" onChange={e => changeTaskType(e.target.value)}>
                        <option value="0">一回</option>
                        <option value="1">毎日</option>
                        <option value="2">毎週</option>
                        <option value="3">毎月</option>
                    </select>
                </label>
                <button otype="submit">追加</button><br />
            </form>
        </div>
    )
}

export default Form