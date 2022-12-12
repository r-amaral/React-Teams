export interface ITypeSelect {
    type: string;
    setStatesData: {
        setDayState: React.Dispatch<React.SetStateAction<number | undefined>>;
        setMonthState: React.Dispatch<React.SetStateAction<string | undefined>>;
        setYearState: React.Dispatch<React.SetStateAction<number | undefined>>;
    }
    states: number | undefined | string
}