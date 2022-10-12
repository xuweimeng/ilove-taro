import { Component } from 'react'
import { View } from '@tarojs/components'
import { AtAvatar } from 'taro-ui'
import './index.scss'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='mine'>
        <View className='mine-header'>
          <View className='mine-header-left'>
          <AtAvatar image='https://jdc.jd.com/img/200'></AtAvatar>
          </View>
          <View className='mine-header-right'>
           22
          </View>

        </View>
      </View>
    )
  }
}
