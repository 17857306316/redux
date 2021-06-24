

import { Table, Button } from 'antd'
export default function Page3({ store }) {
    const add = () => {
        store.store.dispatch({ type: 'delete', data: 1 })
    }
    return (
        <Button onClick={add}>click</Button>

    )
}