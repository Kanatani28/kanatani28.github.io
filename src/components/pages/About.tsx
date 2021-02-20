import React from "react";
import { motion } from "framer-motion";
import { Box, Heading, List, ListIcon, ListItem } from "@chakra-ui/react";
import { FaAws, FaJava, FaPython, FaLinux, FaHtml5 } from "react-icons/fa";
import { GrOracle, GrAndroid } from "react-icons/gr";
import { GiArtificialIntelligence, GiTalk } from "react-icons/gi";
import { IconType } from "react-icons/lib";
import { MdPerson } from "react-icons/md";

type License = {
  name: string;
  icon: IconType;
};

const licenses: License[] = [
  { name: "AWS 認定ソリューションアーキテクト – アソシエイト", icon: FaAws },
  { name: "AWS 認定デベロッパー – アソシエイト", icon: FaAws },
  { name: "応用情報技術者", icon: MdPerson },
  { name: "基本情報技術者", icon: MdPerson },
  { name: "Oracle Certified Java Programmer, Gold SE 8", icon: FaJava },
  { name: "HTML5 Professional Certification Level.2", icon: FaHtml5 },
  { name: "JDLA G検定 ジェネラリスト", icon: GiArtificialIntelligence },
  { name: "Android技術者認定ベーシック", icon: GrAndroid },
  { name: "実用英語技能検定2級", icon: GiTalk },
  { name: "LPIC Level1", icon: FaLinux },
  { name: "Python3 エンジニア基礎認定", icon: FaPython },
  { name: "ORACLE MASTER Bronze Oracle Database 12c", icon: GrOracle },
];

const aboutParagraphs = [
  "2016年から大阪で活動しているソフトウェアエンジニア、ソリューションアーキテクトです。",
  "生まれも育ちも大阪です。",
  "大学卒業後、エンジニアとしてのキャリアをスタート。",
  "JavaやPHPを中心としたtoB向けの業務システム開発をメインに経験を積みつつ、プログラミング教育にも従事。",
  "最近はWebフロントエンド開発、モバイル開発、クラウドインフラ構築などにも関心を持ちつつ、",
  "幅広い分野で経験を積んでいます。",
];
const About = () => (
  <motion.div
    animate={{
      y: 0,
      opacity: 1,
    }}
    initial={{
      y: "100vh",
      opacity: 0,
    }}
    exit={{
      y: "-100vh",
      opacity: 0,
    }}
    transition={{
      duration: 1,
    }}
    style={{ height: "100%", padding: "1.5rem" }}
  >
    <Heading as="h2" size="xl" mb="2">
      About
    </Heading>
    <p>
      {aboutParagraphs.map((paragraph) => (
        <Box fontSize="md" mt={2}>
          {paragraph}
        </Box>
      ))}
    </p>
    <Box mt={5}>
      <Heading as="h3" size="md" mb={2}>
        保有資格
      </Heading>
      <List spacing={2}>
        {licenses.map((license) => (
          <ListItem flex="1">
            <ListIcon
              fontSize="1.5rem"
              as={license.icon}
              verticalAlign="middle"
            />
            <Box as="span" verticalAlign="middle">
              {license.name}
            </Box>
          </ListItem>
        ))}
      </List>
    </Box>
  </motion.div>
);

export default About;
