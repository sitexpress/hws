import React, {useEffect} from 'react'
import s from './HW12.module.css'
import s2 from '../../s1-main/App.module.css'
import SuperSelect from '../hw07/common/c5-SuperSelect/SuperSelect'
import {useDispatch, useSelector} from 'react-redux'
import {changeThemeId} from './bll/themeReducer'
import {AppStoreType} from "../hw10/bll/store";

/*
* 1 - в файле themeReducer.ts написать нужные типы вместо any, дописать редьюсер 1
* 2 - получить themeId из редакса 1
* 3 - дописать тип и логику функции change 1
* 4 - передать пропсы в SuperSelect 1
* */

type ThemesType= {
    id: number
    value: number | string
}

const themes:ThemesType[] = [
    {id: 1, value: 'light'},
    {id: 2, value: 'blue'},
    {id: 3, value: 'dark'},
]


const HW12 = () => {
    // взять ид темы из редакса
    let themeId = useSelector<AppStoreType, number>(state => state.theme.themeId)
    const dispatch = useDispatch()

    console.log('useSelector state:',themeId)

    const change = (id: number) => { // дописать функцию
        const action = changeThemeId(id)
        dispatch(action)
    }

    useEffect(() => {
        document.documentElement.dataset.theme = themeId + ''
    }, [themeId])

    return (
        <div id={'hw12'}>

                <div id={'hw12-text'} className={s2.hwTitle}>
                    Homework #12
                </div>

                <div className={s2.hw}>
                    <div className={s.hw12_container}>
                    <div className={s.select__header}>Выберите тему</div>
                    <SuperSelect
                        id={'hw12-select-theme'}
                        className={s.select}
                        // сделать переключение тем
                        onChangeOption={change}
                        options={themes}
                    />
                </div>
            </div>

        </div>
    )
}

export default HW12
