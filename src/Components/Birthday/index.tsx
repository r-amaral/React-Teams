import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import SelectBirthDay from "./SelectBirthDay";

import { birthdayAge } from "../../Redux/ValidateView/Basic/Birthday/index.action";

import {
    BirthDayAge,
    BirthDayAgeContainer,
    BirthDayContainer,
    BirthDayName,
    BirthDayTitle,
} from "./styled";

const Birthday = ({ setValidateAge }: any) => {
    const dispatch = useDispatch();

    const { day, month, year, age } = useSelector(
        (state: any) => state.birthdayReducer
    );

    useEffect(() => {
        if (day && month && year) calculateAge(day, month, year);
    }, [day, month, year, age]);

    function calculateAge(day: number, month: string | number, year: number) {
        const dateObj = new Date();
        const monthCalc = dateObj.getMonth() + 1;
        const yearCalc = dateObj.getFullYear();
        const dayCalc = dateObj.getDate();

        let ageC = yearCalc - year;

        if (monthCalc < month || (monthCalc == month && dayCalc < day)) ageC--;

        setValidateAge(true);
        dispatch(birthdayAge(ageC));
    }

    return (
        <BirthDayContainer>
            <BirthDayTitle>Birthday *</BirthDayTitle>
            <SelectBirthDay dateDefault={day} type={"Day"} states={day} />
            <SelectBirthDay dateDefault={month} type={"Month"} states={month} />
            <SelectBirthDay dateDefault={year} type={"Year"} states={year} />
            <BirthDayAgeContainer>
                <BirthDayName>Age</BirthDayName>
                <BirthDayAge>{age ? age : "Age"}</BirthDayAge>
            </BirthDayAgeContainer>
        </BirthDayContainer>
    );
};

export default Birthday;
