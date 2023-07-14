import ToggleSwitch from "components/ToggleSwitch/ToggleSwitch";
import { IPlugin } from "interface/plugins.interface";
import * as S from "./Card.styles";

interface PluginProps extends IPlugin {
  active?: boolean;
  disabled?: boolean;
}

interface IProps {
  plugin: PluginProps;
  tabKey?: string;
  pluginKey?: string;
  allDisabled?: boolean;
  toggleCallback: (tabKey: string, active: boolean, pluginKey: string) => void;
}

const Card: React.FC<IProps> = ({
  plugin,
  toggleCallback,
  tabKey,
  pluginKey,
  allDisabled,
}) => {
  const { title, description, active, disabled } = plugin;

  const handleToggle = (active: boolean) => {
    toggleCallback(tabKey!, active, pluginKey!);
  };

  return (
    <S.Card disabled={disabled || allDisabled}>
      <S.CardHeader>
        <S.CardTitle>{title}</S.CardTitle>
        <ToggleSwitch
          inactiveLabel="Blocked"
          activeLabel="Allowed"
          active={active}
          callback={handleToggle}
        />
      </S.CardHeader>
      <S.CardDescription>{description}</S.CardDescription>
    </S.Card>
  );
};

export default Card;
