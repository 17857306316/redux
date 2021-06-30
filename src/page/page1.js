
import { Button, Pagination, Table } from 'antd';
import React, { useEffect } from "react";
import { request } from '../axios/request';

export default function Page3({ store }) {

    useEffect(() => {
        request({ url: 'https://www.fastmock.site/mock/f786e661350436da533d11037d50598a/redux/redux01' }).then(res => {
        store.store.dispatch({ type: 'updata', data: res })
        })
    }, [])
    const add = () => {
        store.store.dispatch({ type: 'delete', data: '1' })
    }
    return (
        <>
        <Button onClick={add}>删除</Button>
        <Table></Table>
        <Pagination></Pagination>

        </>
        )
}
