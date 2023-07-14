import Logo from "components/Logo/Logo";
import ToggleSwitch from "components/ToggleSwitch/ToggleSwitch";
import { API_URL } from "config/apiUrl";
import { IPlugins } from "interface/plugins.interface";
import { Link, useParams } from "react-router-dom";
import * as S from "./Navigation.styles";

import { BsJournalCheck } from "react-icons/bs";
import { FaMoneyBillWaveAlt } from "react-icons/fa";
import { MdOutlineAnalytics } from "react-icons/md";

import { useState } from "react";

interface IProps {
  data: IPlugins;
  setAllDisabled: (active: boolean) => void;
}

const getIcon = (icon: string) => {
  switch (icon) {
    case "icon-marketing":
      return <MdOutlineAnalytics />;
    case "icon-finance":
      return <FaMoneyBillWaveAlt />;
    case "icon-people":
      return <BsJournalCheck />;
    default:
      return <MdOutlineAnalytics />;
  }
};

const Navigation: React.FC<IProps> = ({ data, setAllDisabled }) => {
  const [disabled, setDisabled] = useState(data.data.disabled);
  const { tabdata, tabs } = data.data;
  const { plugin } = useParams<{ plugin: string }>();

  const handleTooltip = async (active: boolean) => {
    setDisabled(!active);
    const url = `${API_URL}`;
    await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        field: "disabled",
        fieldStatus: !active,
      }),
    });
  };

  return (
    <S.NavigationWrapper>
      <Logo />
      <S.TabList>
        {tabs.map((tab) => {
          const title = tabdata[tab].title.toLocaleLowerCase();
          const icon = getIcon(tabdata[tab].icon);
          const isActive = plugin === title;
          const url = `/${title}`;
          return (
            <S.TabItem active={isActive}>
              <Link to={url} state={{ tabKey: tab }}>
                {icon} <span>{title}</span>
              </Link>
            </S.TabItem>
          );
        })}
      </S.TabList>

      <S.Footer active={!disabled}>
        <ToggleSwitch
          activeLabel="All plugins enabled"
          inactiveLabel="All plugins disabled"
          labelPosition="left"
          callback={handleTooltip}
          active={!disabled}
          showIcon
        />
      </S.Footer>
    </S.NavigationWrapper>
  );
};

export default Navigation;
