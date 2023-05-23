import React from 'react'
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react'
import { Table, Select, Button } from 'antd'
import './Timer.scss'


function Timer() {
  const { t, i18n } = useTranslation();
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
      title: t('table_title_name'),
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
        return formatTime(v)
      },
    },
  ]

  const changeLanguageHandler = (lang = 'tw') => {
    i18n.changeLanguage(lang)
  }

  const formatTime = (time) => {
    if (time == '-') {
      return '-'
    }
    return `${('0' + Math.floor((time / 60000) % 60)).slice(-2)}:${(
      '0' + Math.floor((time / 1000) % 60)
    ).slice(-2)}:${('0' + ((time / 10) % 100)).slice(-2)}`
  }

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

  const getNewListObj = (insert) => {
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
    return { lastEmptyTimeObjIndex, newList }
  }

  const insertStep = () => {
    const { lastEmptyTimeObjIndex, newList } = getNewListObj(true)
    setList(newList)
    setTableBodyScrollTop(lastEmptyTimeObjIndex)
    checkIndexForCanInsert(lastEmptyTimeObjIndex)
  }

  const thisStepDone = () => {
    let { lastEmptyTimeObjIndex, newList } = getNewListObj(false)
    if (lastEmptyTimeObjIndex < 0) {
      lastEmptyTimeObjIndex = newList.length
      setList(newList)
    } else {
      list[lastEmptyTimeObjIndex].time = time
    }
    setTableBodyScrollTop(lastEmptyTimeObjIndex)
    checkIndexForCanInsert(lastEmptyTimeObjIndex)
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
    <div className="Timers">
      <h2>Stopwatch</h2>
      <div id="display">
        <h3>{formatTime(time)}</h3>
      </div>

      <Table
        columns={columns}
        dataSource={[...list]}
        pagination={false}
        tableLayout={'fixed'}
        scroll={{
          y: tableBodyHight,
        }}
      />

      <div id="buttons">
        {!timerOn && time === 0 && (
          <Button onClick={() => setTimerOn(true)}>Start</Button>
        )}
        {timerOn && <Button onClick={() => setTimerOn(false)}>Stop</Button>}
        {timerOn && <Button onClick={() => thisStepDone()}>Done</Button>}
        {timerOn && (
          <Button onClick={() => insertStep()} disabled={!canInsert}>
            {' '}
            +{' '}
          </Button>
        )}
        {!timerOn && time > 0 && (
          <Button onClick={() => resetTime()}>Reset</Button>
        )}
        {!timerOn && time > 0 && (
          <Button onClick={() => setTimerOn(true)}>Resume</Button>
        )}
        <Button onClick={() => changeLanguageHandler()}>lang: tw</Button>
        <Button onClick={() => changeLanguageHandler('en')}>lang: en</Button>
      </div>
    </div>
  )
}

export default Timer
