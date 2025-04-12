import React from 'react'
import TeacherInfo from './Teacherinfo'

export const TeachInfoHandler = ({Teacher}) => {
  return (
    <div>
        {Teacher.slice(5,9).map((item,index) => {
            return <TeacherInfo key={index} TeacherName={item.fullName}/>
        })}
    </div>
  )
}
