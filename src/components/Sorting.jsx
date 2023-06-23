import React from 'react'
import MySelect from './MySelect'

const Sorting = ({setSort, selectStyle, optionStyle, searchValue, setSearchValue, searchStyle, sortingStyle}) => {
  return (
    <div className={sortingStyle}>
    <MySelect
        selectStyle={selectStyle}
        optionStyle={optionStyle}
        onChange={selectedSort => setSort({sortBy:'price',order:selectedSort})}
        defaultValue='Сортировка по стоимости'
        options={[
        {value: 'ask', name: 'По возрастанию стоимости'},
        {value: 'desc', name: 'По снижению стоимости'},
        ]}
    />
    <MySelect
        selectStyle={selectStyle}
        optionStyle={optionStyle}
        onChange={selectedSort => setSort({sortBy:'category',order:selectedSort})}
        defaultValue='Сортировка по категориям'
        options={[
        {value: 'ask', name: 'отсортировать по категориям'},
        ]}
    />
    <input className={searchStyle} value={searchValue} placeholder='Поиск товара' onChange={(e) => setSearchValue(e.target.value)}/>
    </div>
  )
}

export default Sorting