import { isLoading, fetchGoods, isSimilarLoading, fetchCategories, isCategoriesLoading } from "../store/goodsReducer"


export const fetchGoodsAction = async ({sort, search, category, page, dispatch}) => {
    dispatch(isLoading(true))
    try {
        fetch(`https://6475381ae607ba4797dbb5ea.mockapi.io/photos?${sort}&${search}&${category}&page=${page}&limit=6`).then(res => res.json()).then(json => {
        dispatch(fetchGoods(json))
        dispatch(isLoading(false))
        })
    }
    catch (e) {
        console.log(e);
    } 
}

export const fetchCategoriesAction = async ({dispatch}) => {
    try {
        dispatch(isCategoriesLoading(true))
        fetch('https://6475381ae607ba4797dbb5ea.mockapi.io/category').then(res => res.json()).then(json => {
        dispatch(fetchCategories(json))
        dispatch(isCategoriesLoading(false))
        })
    }
    catch (e) {
        console.log(e);
    }
}

export const fetchItem = async ({id, dispatch, setItem}) => {
    dispatch(isLoading(true))
    try {
        fetch(`https://6475381ae607ba4797dbb5ea.mockapi.io/photos?search=${id}`).then(res => res.json()).then(json => {
        setItem(json[0])
        dispatch(isLoading(false))
        })
    }  
    catch (e) {
        console.log(e);
    } 
}

export const fetchSimiliar = async ({item, dispatch, setSimilarGoods}) => {
    dispatch(isSimilarLoading(true)) 
    try {
        fetch(`https://6475381ae607ba4797dbb5ea.mockapi.io/photos?search=${item.category}`).then(res => res.json()).then(json => {
        setSimilarGoods(json)
        dispatch(isSimilarLoading(false))
        })
    }  
    catch (e) {
        console.log(e);
    }  
}