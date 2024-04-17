'use client'

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useSelector, useDispatch } from 'react-redux'
import { handleMinus, handlePlus, getCount } from '@/app/components/counter/service/counter-slice'
import { NextPage } from 'next';

const CounterPage: NextPage = ()=> {

    const count = useSelector(getCount)
    const dispatch = useDispatch()
    return (<div className="text-center">
        <h1>Redux Counter : {count}</h1>

        <AddIcon onClick={() => dispatch(handlePlus())} /> <br />

        <RemoveIcon onClick={() => dispatch(handleMinus())} />

    </div>)
}
export default CounterPage ;