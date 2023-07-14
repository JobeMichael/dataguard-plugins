import React from "react";
import { Link } from "react-router-dom";
import * as S from "./TabItem.styles";

interface IProps {
  title: string;
  icon: JSX.Element;
  isActive: boolean;
  url: string;
  tab: string;
}

const TabItem: React.FC<IProps> = ({ isActive, url, tab, icon, title }) => {
  return (
    <S.TabItem active={isActive}>
      <Link to={url} state={{ tabKey: tab }}>
        <>
          {icon} <span>{title}</span>
        </>
      </Link>
    </S.TabItem>
  );
};

export default TabItem;
