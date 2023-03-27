import { useDispatch } from "react-redux";
import { ITypeSelect } from "../../../Interfaces/ITypeSelect";

import {
    birthdayDay,
    birthdayMonth,
    birthdayYear,
} from "../../../Redux/ValidateView/Basic/Birthday/index.action";

import {
    OptionBirthday,
    SelectContainer,
    SelectName,
    SelectStyle,
} from "./styled";

const SelectBirthDay = ({ type, states, dateDefault }: ITypeSelect) => {
    let dateValue;
    const date = [];

    const dispatch = useDispatch();

    const month = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    if (type === "Year") {
        dateValue = 123;
    } else dateValue = 31;

    for (let i = 1; i <= dateValue; i++) {
        if (type === "Year") {
            date[i] = 2023 - i;
        } else date[i] = i;
    }

    const handleSelect = ({ target }: React.ChangeEvent<HTMLSelectElement>) => {
        switch (type) {
            case "Day":
                return dispatch(birthdayDay(target.value));
            case "Month":
                return dispatch(birthdayMonth(target.value));
            case "Year":
                return dispatch(birthdayYear(target.value));
        }
    };

    return (
        <SelectContainer>
            <SelectName states={states}>{type}</SelectName>
            <SelectStyle
                states={states}
                onChange={handleSelect}
                value={dateDefault ? dateDefault : "nameDefault"}
            >
                <OptionBirthday value="nameDefault" disabled>
                    {type}
                </OptionBirthday>

                {type === "Month"
                    ? month.map((Month) => (
                          <OptionBirthday key={Month}>{Month}</OptionBirthday>
                      ))
                    : date.map((Date) => (
                          <OptionBirthday key={Date}>
                              {Date >= 10 ? Date : "0" + Date}
                          </OptionBirthday>
                      ))}
            </SelectStyle>
        </SelectContainer>
    );
};

export default SelectBirthDay;
