import { isLoading, fetchGoods, isSimilarLoading, fetchCategories, isCategoriesLoading } from "../store/goodsReducer"
import { fetchUser, setAuth } from "../store/userReducer"


export const fetchGoodsAction = async ({sort, search, category, page, dispatch}) => {
    dispatch(isLoading(true))
    fetch(`https://6475381ae607ba4797dbb5ea.mockapi.io/photos?${sort}&${search}&${category}&page=${page}&limit=6`).then(res => res.json())
    .then(json => {
        dispatch(fetchGoods(json))
        dispatch(isLoading(false))
    })
    .catch((e) => {
        console.log(e)
    })
}

export const fetchCategoriesAction = async ({dispatch}) => {
        dispatch(isCategoriesLoading(true))
        fetch('https://6475381ae607ba4797dbb5ea.mockapi.io/category').then(res => res.json())
        .then(json => {
            dispatch(fetchCategories(json))
            dispatch(isCategoriesLoading(false))
            })
        .catch((e) => {
            console.log(e)
        })
}

export const fetchItem = async ({id, dispatch, setItem}) => {
    dispatch(isLoading(true))
    fetch(`https://6475381ae607ba4797dbb5ea.mockapi.io/photos?search=${id}`).then(res => res.json())
    .then(json => {
        setItem(json[0])
        dispatch(isLoading(false))
    })
    .catch((e) => {
        console.log(e)
    })
    
}

export const fetchSimiliar = async ({item, dispatch, setSimilarGoods}) => {
    dispatch(isSimilarLoading(true)) 
    fetch(`https://6475381ae607ba4797dbb5ea.mockapi.io/photos?search=${item.category}`).then(res => res.json())
    .then(json => {
        setSimilarGoods(json)
        dispatch(isSimilarLoading(false))
        })
    .catch((e) => {
        console.log(e);
    })
}

export const FetchUsers = async ({dispatch, login, password, setError, router}) => {
        fetch(`https://imbadattitles.com/api.php`).then(res => res.json()).then(json => {
        let error = true
        json.map((userApi) => {
                if ((userApi.login === login) && (userApi.password === password)) {
                    dispatch(setAuth(true))
                    dispatch(fetchUser({name: login}))
                    router(`/MainPage`)
                    return error = false
                }
            })
        if (error) {
            setError('Логин или пароль введён неправильно')
        }
        })
        
}

export const logOut = async ({dispatch}) => {
    dispatch(setAuth(false))
    dispatch(fetchUser({name: 'Незарегистрированный пользователь'}))
}