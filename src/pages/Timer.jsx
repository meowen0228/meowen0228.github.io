import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Table, Select, Button, Typography } from 'antd'
import './Timer.scss'

import { formatInterval } from '../utils/formatTimeFunc'
import { getArrayWithKey, setArrayWithKey } from '../utils/localStorageFunc'

const { Title } = Typography

function Timer() {
  const { t } = useTranslation()
  const [time, setTime] = useState(0)
  const [timerOn, setTimerOn] = useState(false)
  const [canInsert, setCanInsert] = useState(true)
  const tableBodyHight = 240
  const [list, setList] = useState([
    {
      key: 1,
      name: 'ddddd',
      time: '-',
    },
    {
      key: 2,
      name: '2222',
      time: '-',
    },
    {
      key: 3,
      name: '3333',
      time: '-',
    },
    {
      key: 4,
      name: '4444',
      time: '-',
    },
    {
      key: 5,
      name: '555555',
      time: '-',
    },
    {
      key: 6,
      name: '6666666',
      time: '-',
    },
  ])
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
      title: t('Name'),
      dataIndex: 'name',
      render: (v) => {
        if (!v) {
          return (
            <Select>
              <Select.Option value={'aaa'}>aaa</Select.Option>
            </Select>
          )
        }
        return v
      },
    },
    {
      title: 'Time',
      dataIndex: 'time',
      render: (id, record, index) => {
        let v
        if (typeof record.time != 'number') {
          return record.time
        }
        if (index == 0) {
          v = record.time
        } else {
          v = record.time - list[index - 1].time
        }
        return formatInterval(v)
      },
    },
  ]

  const setTableBodyScrollTop = (index) => {
    setTimeout(() => {
      window.scrollTo({ behavior: 'smooth' })
      document.querySelector('.ant-table-body').scrollTop = 50 * index
    }, 50)
  }

  const checkIndexForCanInsert = (index) => {
    if (index == list.length - 1) {
      setCanInsert(false)
    }
  }

  const getNewListObj = (insert, fn) => {
    let lastEmptyTimeObjIndex = list.findIndex((v) => v.time == '-')
    const newList = [...list]
    const newObj = {
      key: list.length + 1,
      name: '',
      time: time,
    }
    if (insert) {
      newList.splice(lastEmptyTimeObjIndex, 0, newObj)
    } else {
      newList.push(newObj)
    }
    return fn(lastEmptyTimeObjIndex, newList)
  }

  const insertStep = () =>
    getNewListObj(true, (lastEmptyTimeObjIndex, newList) => {
      setList(newList)
      setTableBodyScrollTop(lastEmptyTimeObjIndex)
      checkIndexForCanInsert(lastEmptyTimeObjIndex)
    })

  const thisStepDone = () => {
    getNewListObj(false, (lastEmptyTimeObjIndex, newList) => {
      if (lastEmptyTimeObjIndex < 0) {
        lastEmptyTimeObjIndex = newList.length
        setList(newList)
      } else {
        list[lastEmptyTimeObjIndex].time = time
      }
      setTableBodyScrollTop(lastEmptyTimeObjIndex)
      checkIndexForCanInsert(lastEmptyTimeObjIndex)
    })
  }

  const resetTime = () => {
    setTime(0)
    setList(
      list
        .filter((v) => v.name)
        .map((v) => {
          v.time = '-'
          return v
        })
    )
    setTableBodyScrollTop(0)
  }

  const saveList = () => {
    getArrayWithKey('history', (historyList) => {
      historyList.push({
        date: new Date(),
        data: list,
      })
      setArrayWithKey('history', historyList)
      setTimerOn(false)
      setTime(list[list.length - 1].time)
    })
  }

  useEffect(() => {
    let interval = null

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10)
      }, 10)
    } else if (!timerOn) {
      clearInterval(interval)
    }

    return () => clearInterval(interval)
  }, [timerOn])

  return (
    <div className="timers">
      <Title level={1}>{formatInterval(time)}</Title>

      <Table
        columns={columns}
        dataSource={[...list]}
        pagination={false}
        tableLayout={'fixed'}
        scroll={{
          y: tableBodyHight,
        }}
      />

      <div className="buttons_group">
        {!timerOn && time === 0 && (
          <Button onClick={() => setTimerOn(true)}>{t('Start')}</Button>
        )}
        {timerOn && (
          <Button onClick={() => setTimerOn(false)}>{t('Stop')}</Button>
        )}
        {timerOn && <Button onClick={thisStepDone}>{t('Done')}</Button>}
        {timerOn && (
          <Button onClick={insertStep} disabled={!canInsert}>
            {' '}
            +{' '}
          </Button>
        )}
        {!timerOn && time > 0 && (
          <Button onClick={resetTime}>{t('Reset')}</Button>
        )}
        {!timerOn && time > 0 && (
          <Button onClick={() => setTimerOn(true)}>{t('Resume')}</Button>
        )}
        <Button onClick={saveList} disabled={canInsert}>
          {t('Save')}
        </Button>
      </div>
    </div>
  )
}

export default Timer
