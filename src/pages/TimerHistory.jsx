import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Table } from 'antd'
import * as dayjs from 'dayjs'
import './Timer.scss'

import { formatInterval } from '../utils/formatTimeFunc'
import { getArrayWithKey } from '../utils/localStorageFunc'

function TimerHistory() {
  const { t } = useTranslation()
  const tableBodyHight = 540
  const [list, setList] = useState([])
  const columns = [
    {
      title: 'No.',
      align: 'center',
      width: 60,
      render: (id, record, index) => {
        ++index
        return index
      },
    },
    {
      title: t('Date'),
      dataIndex: 'date',
      render: (record) => dayjs(record.date).format('YYYY/MM/DD hh:mm:ss'),
    },
    {
      title: 'Total Time',
      dataIndex: 'totalTime',
    },
  ]

  const processHistoryData = () => {
    const nenwList = getArrayWithKey('history', (list) =>
      list.map((v, i) => {
        v.totalTime = formatInterval(
          v.data.reduce(
            (accumulator, currentValue) => accumulator + currentValue.time,
            0
          )
        )
        v.key = i + 1
        return v
      })
    )
    console.log(nenwList)
    setList(nenwList)
  }

  useEffect(() => {
    processHistoryData()
  }, [])

  return (
    <Table
      columns={columns}
      dataSource={[...list]}
      pagination={false}
      tableLayout={'fixed'}
      scroll={{
        y: tableBodyHight,
      }}
    />
  )
}

export default TimerHistory
