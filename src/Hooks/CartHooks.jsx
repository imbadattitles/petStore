import { deleteItems, pushItems, setAmount, setItems } from "../store/cartReducer"


export const inCart = ({item, cart, dispatch, amountInCart}) => {
    if (cart.length) {
        let noSimilar = true
        cart.map(obj => {
            if (Number(item.itemNumber) === Number(obj.itemNumber)  ) {
                const newItems = cart.map(goods => {
                    if (Number(goods.itemNumber) === Number(item.itemNumber)) 
                    {return {...goods,count: goods.count + 1, totalPrice: item.price*(goods.count + 1)}} 
                    return goods
                })
                dispatch(setItems(newItems))
                dispatch(setAmount(amountInCart + 1))
                noSimilar = false
            } 
        }) 
        if (noSimilar) {
            dispatch(pushItems({...item, count:1, totalPrice: item.price}))
            dispatch(setAmount(amountInCart + 1))
        }
    }
    else {
        dispatch(pushItems({...item, count:1, totalPrice: item.price}))
        dispatch(setAmount(amountInCart + 1))
    }
}

export const MinusCount = ({item, items, dispatch, amountInCart}) => {
    if (item.count > 1) {
        const newItems = items.map(goods => {
            if (goods.itemNumber === item.itemNumber) {return {...item, count: item.count - 1, totalPrice:item.price*(goods.count-1)}}
            return goods
        })
        dispatch(setItems(newItems))
        dispatch(setAmount(amountInCart - 1))
    }
    if (item.count === 1) {
        dispatch(deleteItems(item))
        dispatch(setAmount(amountInCart - 1))
    }
}

export const PlusCount = ({item, items, dispatch, amountInCart}) => {
    const newItems = items.map(goods => {
        if (goods.itemNumber === item.itemNumber) {return {...item, count: item.count + 1, totalPrice: item.price*(goods.count+1)}}
        return goods
    })
    dispatch(setItems(newItems))
    dispatch(setAmount(amountInCart + 1))
}

export const countMath = (obj, method) => {
    if (method == 'plus') return PlusCount(obj);
    if (method == 'minus') return MinusCount(obj);
}