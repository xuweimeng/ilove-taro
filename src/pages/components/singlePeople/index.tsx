import { Component } from 'react'
import {View, Text, Image} from '@tarojs/components'
import './index.scss'
import StaticPeople from "../../assets/static/liu.png";
import IdenityPng from "../../assets/img/idenity.png";

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='single'>
        <View className='single-avator'>
          <Image
            style='width: 100%;'
            src={StaticPeople}
          />
        </View>
        <View className='single-content'>

          <View className='single-header'>
            <View className='single-header-nickname'>
              刘亦菲
              <View className='single-header-auth'>
                <Image
                  src={IdenityPng}
                />
              </View>
            </View>
          </View>

          <View className='single-basic'>
            <Text className="single-basic-text">31岁</Text>
            <Text className="single-basic-text">2000-5000</Text>
            <Text className="single-basic-text">155cm</Text>
            <Text className="single-basic-text">31岁</Text>
          </View>

          <View className='single-basic'>
            <Text className="single-basic-text">居住地：浙江杭州</Text>
            <Text className="single-basic-text">籍贯：浙江杭州</Text>
          </View>
        </View>

      </View>
    )
  }
}
