

import { Button } from 'antd'
export default function Page1({ store }) {
    const add = () => {
        const obj = {
            id: Date.now(),
        }
        store.store.dispatch({ type: 'add', data: obj })
    }
    return (
        <Button onClick={add}>新增</Button>

    )
}