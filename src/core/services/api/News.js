import axios from 'axios';

export const GetNewsList = async(Query) =>{
try {
    const result = await axios.get(`https://classapi.sepehracademy.ir/api/News?PageNumber=1&RowsOfPage=10&SortingCol=InsertDate&SortType=DESC&Query=${Query ? Query : ``}`)
    return result.data.news;
}
catch (error) {
    console.error(error)
}
}