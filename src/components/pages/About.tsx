import React from "react";
import { motion } from "framer-motion";
import ShareButton from "../atoms/ShareButton";
import { pagingAnimationProps } from "../../animations";

const About = () => (
  <motion.div
    {...pagingAnimationProps}
    style={{ height: "100%", backgroundColor: "lightcoral" }}
  >
    <div>About</div>
    <div>
      2016年から大阪で活動しているソフトウェアエンジニア、兼ソリューションアーキテクト（見習い）。
      永遠の駆け出しエンジニア。 大阪出身。
      4年制大学（文系）卒業後、エンジニアとしてのキャリアをスタート。
      JavaやPHPを中心としたtoB向けの業務システム開発をメインに経験を積みつつ、プログラミング教育にも従事。
      最近はWebフロントエンド開発、モバイル開発、クラウドインフラ構築などにも関心を持ちつつ、幅広い分野で経験を積んでいます。
    </div>
    <ShareButton />
  </motion.div>
);

export default About;
