import axios from "axios"

export const GetCourseList = async(Query) =>{
try {
    const result = await axios.get(`https://classapi.sepehracademy.ir/api/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=10&SortingCol=Active&SortType=DESC&Query=${Query ? Query : `1`}`)
    console.log(result.data.courseFilterDtos)
    return result.data.courseFilterDtos
}
catch (error) {
    console.error(error)
}
}