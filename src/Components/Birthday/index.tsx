import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import SelectBirthDay from "./SelectBirthDay";

import { IBirtday } from "../../Interfaces/IBirthday";
import { birthdayAge } from "../../Redux/ValidateView/Basic/Birthday/index.action";

import {
    BirthDayAge,
    BirthDayAgeContainer,
    BirthDayContainer,
    BirthDayName,
    BirthDayTitle,
} from "./styled";
import { basicValidateBirthday } from "../../Redux/ValidateView/Basic/index.actions";

const Birthday = () => {
    const { day, month, year, age } = useSelector(
        (state: IBirtday) => state.birthdayReducer
    );

    const dispatch = useDispatch();

    useEffect(() => {
        if (day && month && year) calculateAge(day, month, year);
    }, [day, month, year]);

    const calculateAge = (
        day: number,
        month: string | number,
        year: number
    ): void => {
        const dateObj = new Date();
        const monthCalc = dateObj.getMonth() + 1;
        const yearCalc = dateObj.getFullYear();
        const dayCalc = dateObj.getDate();

        let ageC = yearCalc - year;

        if (monthCalc < month || (monthCalc == month && dayCalc < day)) ageC--;

        dispatch(basicValidateBirthday(true));
        dispatch(birthdayAge(ageC));
    };

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
