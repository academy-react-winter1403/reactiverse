import React from 'react'
// import Register from '../../components/LoginForm/register'
// import Login from '../../components/LoginForm/login'
import { authRoutes } from '../../config/router/roots.jsx'
import { RouterProvider } from 'react-router-dom'
import { getApi } from '../../core/services/api/index.js'

const login = () => {
  const [course, setCourse] = useState([])

  const fetchData = async () => {
    const data = await getApi("/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=10&SortingCol=Active&SortType=DESC&TechCount=0");
    setCourse(data)
  }

  console.log(course)

  useEffect(() => {
    fetchData()
  }, [])
  


  return (
    <div>
        {/* <Register />
        <Login /> */}
        <RouterProvider router={authRoutes} />
    </div>
  )
}

export default login