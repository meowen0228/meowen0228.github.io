import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate, Outlet } from 'react-router-dom'
import { Button, Divider, Drawer, Menu, Typography } from 'antd'
import {
  FieldTimeOutlined,
  InboxOutlined,
  AppstoreAddOutlined,
  SkinOutlined,
  MenuOutlined,
} from '@ant-design/icons'
import './TimerHome.scss'

const { Title } = Typography

function TimerTemplate() {
  const { t, i18n } = useTranslation()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)

  const changeLanguageHandler = (lang = 'tw') => {
    i18n.changeLanguage(lang)
  }

  const getItem = (key, label, icon, path) => {
    return {
      key,
      icon,
      label,
      path,
    }
  }

  const menuList = [
    getItem(1, t('Timer'), <FieldTimeOutlined />, '/timer'),
    getItem(2, t('History'), <InboxOutlined />, '/timer/history'),
    getItem(3, t('Template'), <AppstoreAddOutlined />, '/timer/template'),
    getItem(4, t('Style'), <SkinOutlined />, '/timer/style'),
  ]

  const showDrawer = () => {
    setOpen(true)
  }

  const closeDrawer = () => {
    setOpen(false)
  }

  const menuItemOnClick = (e) => {
    closeDrawer()
    navigate(e.item.props.path, { replace: true })
  }

  return (
    <div className="timer_home">
      <div>
        <Button type="text" onClick={showDrawer} icon={<MenuOutlined />} />
      </div>
      <div>
        <Outlet />
      </div>
      <Drawer
        placement="left"
        closable={false}
        onClose={closeDrawer}
        open={open}
        width={'60%'}
        style={{ minWidth: '250px', maxWidth: '400px' }}
      >
        <Title level={4}>MENU</Title>
        <Divider />
        <Menu
          defaultSelectedKeys={['1']}
          mode="inline"
          items={menuList}
          onClick={menuItemOnClick}
        />
        <Button onClick={() => changeLanguageHandler()}>lang: tw</Button>
        <Button onClick={() => changeLanguageHandler('en')}>lang: en</Button>
      </Drawer>
    </div>
  )
}

export default TimerTemplate
