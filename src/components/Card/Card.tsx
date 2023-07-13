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
  toggleCallback: (tabKey: string, active: boolean, pluginKey: string) => void;
}

const Card: React.FC<IProps> = ({
  plugin,
  toggleCallback,
  tabKey,
  pluginKey,
}) => {
  const { title, description, active, disabled } = plugin;

  const handleToggle = (active: boolean) => {
    toggleCallback(tabKey!, active, pluginKey!);
  };

  return (
    <S.Card disabled={disabled}>
      <S.CardHeader>
        <S.CardTitle>{title}</S.CardTitle>
        <ToggleSwitch label="Active" active={active} callback={handleToggle} />
      </S.CardHeader>
      <S.CardDescription>{description}</S.CardDescription>
    </S.Card>
  );
};

export default Card;
