import { Component } from 'react'
import {View, Text, Image} from '@tarojs/components'
import './index.scss'
import StaticPeople from "../../assets/static/liu.png";
import IdenityPng from "../../assets/img/idenity.png";
import WomenPng from "../../assets/img/women.png";
import manPng from "../../assets/img/man.png";

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () {
  }

  componentDidHide () {

  }

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
              <View className='single-header-gender'>
                <Image
                  src={WomenPng}
                />
              </View>
            </View>
          </View>

          <View className='single-basic'>
            <Text className="single-basic-text">未婚</Text>
            <Text className="single-basic-text">31岁</Text>
            <Text className="single-basic-text">155cm</Text>
            <Text className="single-basic-text">本科</Text>
          </View>

          <View className='single-basic'>
            <Text className="single-basic-text">居住地：浙江杭州</Text>
            <Text className="single-basic-text">籍贯：浙江杭州</Text>
          </View>
          <View className='single-basic'>
            <Text className="single-basic-text">职业：演员</Text>
            <Text className="single-basic-text">收入：3000-5000</Text>
          </View>
        </View>

      </View>
    )
  }
}
