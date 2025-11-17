import { JobFilterParams } from "@/types/action";

export const fetchLocation = async () => {
    const response = await fetch("http://ip-api.com/json/?fields=country");
    const location = await response.json();
    return location.country;
};

export const fetchCountries = async () => {
    try {
        const response = await fetch("https://restcountries.com/v3.1/all?fields=name");
        const result = await response.json();
        console.log('result: ', result)
        return result;
    } catch (error) {
        console.log('error: ', error);
    }
};

export const fetchJobs = async (filters: JobFilterParams) => {
    const { query, page } = filters;

    const headers = {
        // "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY ?? "",
        "X-RapidAPI-Key": "d8b17fabe9msh34c604c513e7a80p1738bajsna6648e13cf40",
        "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    };
    
    const response = await fetch(
        `https://jsearch.p.rapidapi.com/search?query=${query}&page=${page}`,
        { headers, }
    );

    const result = await response.json();

    return result.data;
}