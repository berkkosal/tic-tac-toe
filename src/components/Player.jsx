import React, { useState } from 'react'

export default function Player({ initialName, symbol, isActive }) {

    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);


    function handleEditClick() {
        setIsEditing(() => !isEditing);
        //State güncellerken eski state'i değiştireceğimiz
        //herhangi bir noktada direkt olarak müdahale etmiyoruz.
        //React tarafından çağırılıyor buradaki anonim fonksiyon.
        //React stateleri anlık olarak güncellemek yerine ufak bir gecikmeyle
        //planlamasına uygun olarak kendisi güncelliyor.

        // setIsEditing(!isEditing); state planlamasında true yapacak
        // setIsEditing(!isEditing); burası da true yapmak için planlama yapıyor false yapmak yerine.
        //Bu iki dummy kodla görülebiliyor.
    }

    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    let editablePlayerName = <span className='player-name'>{playerName}</span>
    //let btnCaption= 'Edit';

    if (isEditing) {
        editablePlayerName = (<input type='text' required value={playerName} onChange={handleChange} />)
        // btnCaption = 'Save';
    }


    return (
        <li className={isActive ? 'active' : undefined}>
            <span className='player'>
                {editablePlayerName}
                <span className='player-symbol'>{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}
