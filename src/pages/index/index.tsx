import { Component } from "react";
import { View, Text, Image } from "@tarojs/components";
import { Swiper, SwiperItem } from "@tarojs/components";
import "./index.scss";
import Meizu1 from '../assets/banner/meizu1.jpeg';
import Meizu2 from '../assets/banner/meizu2.jpeg';
import Meizu3 from '../assets/banner/meizu3.jpeg';

export default class Index extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="index">
        <Swiper
          className="test-h"
          indicatorColor="#999"
          indicatorActiveColor="#333"
          circular
          indicatorDots
          autoplay
        >
          <SwiperItem>
            <Image
              style='width: 100%;'
              src={Meizu1}
            />
          </SwiperItem>
          <SwiperItem>
          <Image
              style='width: 100%;'
              src={Meizu2}
            />
          </SwiperItem>
          <SwiperItem>
          <Image
              style='width: 100%;'
              src={Meizu3}
            />
          </SwiperItem>
        </Swiper>
      </View>
    );
  }
}
