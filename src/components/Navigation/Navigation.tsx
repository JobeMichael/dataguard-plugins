import Logo from "components/Logo/Logo";
import TabList from "components/TabList/TabList";
import ToggleSwitch from "components/ToggleSwitch/ToggleSwitch";
import { API_URL } from "config/apiUrl";
import { IPlugins } from "interface/plugins.interface";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { apiRequest } from "services/apiRequest";
import * as S from "./Navigation.styles";

interface IProps {
  data: IPlugins;
  setAllDisabled: (active: boolean) => void;
}

const Navigation: React.FC<IProps> = ({ data, setAllDisabled }) => {
  const [disabled, setDisabled] = useState(data.data.disabled);

  const { tabdata, tabs } = data.data;
  const { plugin } = useParams<{ plugin: string }>();

  const handleTooltip = async (active: boolean) => {
    setDisabled(!active);
    setAllDisabled(!active);

    await apiRequest({
      url: API_URL,
      method: "PUT",
      body: {
        field: "disabled",
        fieldStatus: !active,
      },
    });
  };

  return (
    <S.NavigationWrapper>
      <Logo />
      <TabList tabdata={tabdata} tabs={tabs} plugin={plugin!} />
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
