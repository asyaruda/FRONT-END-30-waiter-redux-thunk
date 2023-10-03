import { WaiterItem } from "./WaiterItem";
import React from "react";
import style from './WaiterList.module.css'
import style from './TodoList.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { WaitersApi } from '../../api/server'
import { actionSetList } from './store/action'

export function WaiterList () {
    const dispatch = useDispatch()
    const waiters = useSelector((state) => state.waiter.list)

    useEffect(() => {
        WaitersApi.getList().then((newList) => dispatch(actionSetList(newList)))
      }, [])

    return (
        <table className={style.listTable}>
            <thead>
                <tr>
                    <th className={style.th}>First name</th>
                    <th className={style.th}>Phone</th>
                    <th className={style.th}>Actions</th>
                </tr>
            </thead>
            <tbody>
               {waiters.map(waiter => (
               <WaiterItem 
               key={waiter.id} 
               waiter={waiter}
               onWaiterDelete={onWaiterDelete}
               onWaiterEdit={onWaiterEdit}
                />
                ))}
            </tbody>
        </table>
    )
}