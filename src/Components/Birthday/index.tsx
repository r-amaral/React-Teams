import { useEffect, useState } from "react";
import SelectBirthDay from "./SelectBirthDay";
import {
    BirthDayAge,
    BirthDayAgeContainer,
    BirthDayContainer,
    BirthDayName,
    BirthDayTitle,
} from "./styled";

const Birthday = ({ setValidateAge }: any) => {
    const [dayState, setDayState] = useState<number>();
    const [monthState, setMonthState] = useState<string>();
    const [yearState, setYearState] = useState<number>();
    const [ageState, setAgeState] = useState<number>();

    const setStates = { setDayState, setMonthState, setYearState };

    useEffect(() => {
        if (dayState && monthState && yearState)
            calculateAge(dayState, monthState, yearState);
    }, [dayState, monthState, yearState]);

    function calculateAge(day: number, month: string | number, year: number) {
        const dateObj = new Date();
        const monthCalc = dateObj.getMonth() + 1;
        const yearCalc = dateObj.getFullYear();
        const dayCalc = dateObj.getDate();

        let age = yearCalc - year;

        if (monthCalc < month || (monthCalc == month && dayCalc < day)) age--;

        setValidateAge(true);
        setAgeState(age);
    }

    return (
        <BirthDayContainer>
            <BirthDayTitle>Birthday *</BirthDayTitle>
            <SelectBirthDay
                type={"Day"}
                setStatesData={setStates}
                states={dayState}
            />
            <SelectBirthDay
                type={"Month"}
                setStatesData={setStates}
                states={monthState}
            />
            <SelectBirthDay
                type={"Year"}
                setStatesData={setStates}
                states={yearState}
            />
            <BirthDayAgeContainer>
                <BirthDayName>Age</BirthDayName>
                <BirthDayAge>{ageState ? ageState : "Age"}</BirthDayAge>
            </BirthDayAgeContainer>
        </BirthDayContainer>
    );
};

export default Birthday;
