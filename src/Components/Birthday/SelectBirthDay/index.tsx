import { ITypeSelect } from "../../../Interfaces/ITypeSelect";
import {
    OptionBirthday,
    SelectContainer,
    SelectName,
    SelectStyle,
} from "./styled";

const SelectBirthDay = ({ type, setStatesData, states }: ITypeSelect) => {
    let dateValue;
    const date = [];

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

    type === "Year" ? (dateValue = 123) : (dateValue = 31);

    for (let i = 1; i <= dateValue; i++) {
        type === "Year" ? (date[i] = 2023 - i) : (date[i] = i);
    }

    const handleSelect = ({ target }: any) => {
        switch (type) {
            case "Day":
                return setStatesData.setDayState(target.value);
            case "Month":
                return setStatesData.setMonthState(target.value);
            case "Year":
                return setStatesData.setYearState(target.value);
        }
    };

    return (
        <SelectContainer>
            <SelectName states={states}>{type}</SelectName>
            <SelectStyle
                states={states}
                onChange={handleSelect}
                defaultValue={"nameDefault"}
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
