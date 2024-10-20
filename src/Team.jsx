import { useState } from "react";

export default function Team(){
    const [team, setTeam] = useState(11);

    const handleAdd = () => {
        const newTeam = team + 1;
        setTeam(newTeam);
    }

    const handleRemove = () => {
        const newTeam = team - 1;
        setTeam(newTeam);
    }

    const handleClear = () => {
        const newTeam = 11;
        setTeam(newTeam);
    }

    const teamSyle = {
        border: '2px solid yellow',
        margin: '10px',
        padding: '15px',
        borderRadius: '25px'
    }

    return(
        <div style={teamSyle}>
            <h3>Players: {team}</h3>
            <button onClick={handleAdd}>Add player</button>
            <button onClick={handleRemove}>Remove player</button>
            <button onClick={handleClear}>Main Team</button>
        </div>
    );
}