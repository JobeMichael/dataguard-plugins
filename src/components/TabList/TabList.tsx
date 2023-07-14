import { getIcon } from "components/Navigation/getIcon";
import { ITab } from "interface/plugins.interface";
import React from "react";
import TabItem from "./TabItem/TabItem";
import * as S from "./TabList.styles";

interface IProps {
  tabs: string[];
  plugin: string;
  tabdata: Record<string, ITab>;
}
const getData = (
  tabdata: Record<string, ITab>,
  tab: string,
  plugin: string
) => {
  const title = tabdata[tab].title.toLocaleLowerCase();
  const icon = getIcon(tabdata[tab].icon);
  const isActive = plugin === title;
  const url = `/${title}`;

  return {
    title,
    icon,
    isActive,
    url,
  };
};

const TabList: React.FC<IProps> = ({ tabdata, tabs, plugin }) => {
  return (
    <S.TabList>
      {tabs.map((tab) => {
        const { title, icon, isActive, url } = getData(tabdata, tab, plugin);
        return (
          <TabItem
            key={title}
            title={title}
            icon={icon}
            isActive={isActive}
            url={url}
            tab={tab}
          />
        );
      })}
    </S.TabList>
  );
};

export default TabList;
