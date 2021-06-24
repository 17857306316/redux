

import { Button, Table } from 'antd'
import { useState } from 'react'
export default function Page1({ store }) {
    let [dataList, setDataList] = useState(store.store.getState())
    console.log(dataList);

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