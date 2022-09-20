import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='at-row'>
        <View className='at-col'>A</View>
        <View className='at-col'>B</View>
        <View className='at-col'>C</View>
      </View>
    )
  }
}
