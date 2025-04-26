import React, { useEffect, useState } from 'react'
import Items from './Items'
import { getApi } from '../../../core/services/api'

const UserCounter = () => {

  const [LandingReport, setLandingReport] = useState([])
  console.log(LandingReport , "landing"
  )

  const fetchData = async () => {
    const data = await getApi("/Home/LandingReport")
    setLandingReport(data)
  }
useEffect(() => {
  fetchData()
}, [])
  return (
    <div className='w-[900px] h-[170px] m-auto p-[30px] flex justify-center gap-11 mt-[100px]'>
      {/* <Items title={"استاد فعال"} data={LandingReport.teacherCount}/>
      <Items title={"رضایتمندی"} data={LandingReport.studentCount} />
      <Items title={"دوره آموزشی"} data={LandingReport.courseCount} />
      <Items title={"دانشجو آکادمی"} data={LandingReport.newsCount} /> */}

    </div>
  )
}

export default UserCounter
