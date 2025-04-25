import http from '../interceptor';

const getBlogsDetail = async (id) => {
    try {
        const response = await http.get('/News/'+id);
        return response.detailsNewsDto;
      } catch (error) {
        return console.log(error);
      }
} 
export {getBlogsDetail}