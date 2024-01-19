import React from 'react'

type Props = {
  data:any
}

const AdminCard = ({data}: Props) => {
  return (
    <div className={`py-5 px-5 rounded-xl border border-primary`}>
        <div>
          <h2>{data?.title}</h2>
        </div>
    </div>
  )
}

export default AdminCard