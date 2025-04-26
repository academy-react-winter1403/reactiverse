import http from "../interceptor"

export const getNewsFromSameCategory = async (categoryId, count = 4) => {
    try {
        const response = await http.get(`/News?RowsOfPage=${count}&NewsCategoryId=${categoryId}`);
        return response.news
    }
    catch (err) {
        console.log(err);
    }
}