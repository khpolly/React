import React, {useState} from 'react';
import './NewCost.css';
import CostForm from './CostForm';


const NewCost = (props) => {

    const [isFormVisible, setIsFormVisible] = useState(false);

    const saveCostDataHandler = (inputCostData) => {
        const costData = {
            ...inputCostData,
            id: Math.random().toString()
        };
        
        props.onAddCost(costData);
        setIsFormVisible(false);

    };

    const inputCostDateHandler = () => {
        setIsFormVisible(true);
    }

    const cancelCostHandler = () => {
        setIsFormVisible(false);
    }

    return <div className="new-cost">
        {!isFormVisible && <button onClick={inputCostDateHandler}>Добавить новый расход</button>}
        {isFormVisible &&<CostForm onSaveCostData =
        {saveCostDataHandler} onCancel = {cancelCostHandler} />}
    </div>
};


export default NewCost;