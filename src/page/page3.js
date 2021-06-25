



import { Table } from 'antd'
import { useState } from 'react'
export default function Page3({ store }) {
    let [dataList, setDataList] = useState(store.store.getState())
    const columns = [
        {
            id: '1',
            dataIndex: 'id',
        }
    ]
    return (
        <>
            <Table dataSource={dataList} columns={columns} rowKey='id' />
        </>
    )
}