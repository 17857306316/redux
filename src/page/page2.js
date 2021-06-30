

import { Button ,Pagination,Table} from 'antd'
export default function Page1({ store }) {
    const add = () => {
        const obj = {
            id: Date.now(),
        }
        store.store.dispatch({ type: 'add', data: obj })
    }
    return (
        <>
        <Button onClick={add}>删除</Button>
        <Table></Table>
        <Pagination></Pagination>
        </>
        // <Button onClick={add}>新增</Button>

    )
}