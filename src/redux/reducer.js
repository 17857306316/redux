

const initData = [
    {
        id: 1,
        name: 'xxx',
        ctime: "2002"
    },
]
export default function brands(state = initData, action) {
    switch (action.type) {
        case 'add':
            const newArr =[...state]
            newArr.unshift(action.data)
            console.log(newArr);
            return newArr
        case 'delete':
            return state.filter(v => v.id !== action.data)
        default:
            return state
    }


}