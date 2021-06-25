

const initData = []
export default function Brands(state = initData, action) {
    console.log(state);
    switch (action.type) {
        case 'add':
            const newArr = [...state]
            newArr.unshift(action.data)
            return newArr
        case 'delete':
            return state.filter(v => v.id !== action.data)
        case 'updata':
            return [action.data]
        default:
            return state
    }

}